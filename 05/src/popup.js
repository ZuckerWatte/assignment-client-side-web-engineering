import $ from 'jquery';

// render status messages in popup
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

// checks download state and removes notification on complete
function downloadState(downloadId, notificationId, interval) {
  chrome.downloads.onChanged.addListener(function(downloadDelta) {
    if (typeof downloadDelta.state === 'undefined') {
      return;
    }
    if (downloadDelta.state.current === 'complete' && downloadId === downloadDelta.id) {
      clearInterval(interval);
      chrome.notifications.update(notificationId, { progress: 100 });
      chrome.notifications.clear(notificationId, function() {
        // console.log(notificationId)
      });
    }
  });
}

// calculate downloaded percentage and update notification
function progressBar(downloadId, notificationId) {
  let progress = 0;
  const interval = setInterval(function() {
    chrome.downloads.search({ id: downloadId }, function(item) {
      progress = item[0].bytesReceived / item[0].totalBytes * 100;
      chrome.notifications.update(notificationId, {
        progress: Math.round(progress),
        requireInteraction: true
      });
    });
  }, 300);
  downloadState(downloadId, notificationId, interval);
}

// creates a notification for each download
function showNotification(downloadId, searchTerm) {
  chrome.notifications.create('', {
    type: 'progress',
    iconUrl: 'https://giphy.com/favicon.ico',
    title: `Downloading Gif: ${searchTerm}`,
    message: '',
    progress: 0,
    requireInteraction: true
  },
      function(notificationId) {
        progressBar(downloadId, notificationId);
      });
}

// starts download to folder
function downloadGif(src, searchTerm) {
  chrome.downloads.download({
    url: src,
    filename: `giphy-downloader/${searchTerm}.gif`
  },
  function(downloadId) {
    showNotification(downloadId, searchTerm);
  });
}

// bind and unbind clickevents for download
function handleClicks() {
  $('#giflist').off()
    .on('click', 'li', function() {
      const src = $(this)
      .find('img')
      .attr('src'),
        searchTerm = `${$('h3 > #first').text()}-${$('h3 > #second').text()}`;
      downloadGif(src, searchTerm);
    });
}

// insert img tag with gif preview in popup DOM
function setDOMGif(gif) {
  console.log(gif);
  $('#giflist').append($(`<li><img class='gif' src='${gif}'/></li>`));
  handleClicks();
}

// call giphy with search terms
function giphyApiCall(searchUrl, searchTerm, errorCallback) {
  const urls = [];
  fetch(searchUrl)
  .then((response) => response.json())
  .then((gifs) => {
    for (let g = 0; g < gifs.data.length; g++) {
      setDOMGif(gifs.data[g].images.original.url);
    }
  })
  .catch(function(err) {
    errorCallback(err);
  });
}

// prepare url
function getSearchUrl(searchTerm) {
  const publicApiKey = 'dc6zaTOxFJmzC',
    ratingType = 'g',
    limit = 10,
    searchUrl = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&limit=${limit}&api_key=${publicApiKey}`;
  giphyApiCall(searchUrl, searchTerm, function(errorMessage) {
    renderStatus(`Cannot load gifs ${errorMessage}`);
  });
}

// insert search terms into popup DOM
function setDOMSearchTerm(searchTerm) {
  const buzzwords = searchTerm.split('-');
  $('#first').text(buzzwords[0]);
  $('#second').text(buzzwords[1]);
  $('h3 > span').addClass('show');
  getSearchUrl(searchTerm);
}


// after dom has loaded, query for active tab, send request for DOM info
// callback to be called from receiving end (content script)
window.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
      {
        from: 'popup',
        subject: 'Wiki-Giphy'
      },
      setDOMSearchTerm);
  });
});
