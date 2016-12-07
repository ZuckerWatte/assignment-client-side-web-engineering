// guarantees that the content script has access to current page's DOM
chrome.runtime.onMessage.addListener(function(msg, sender) {
  if (msg.from === 'content' && msg.subject === 'showPageAction') {
    // Enable the page-action for the requesting tab
    chrome.pageAction.show(sender.tab.id);
    return true;
  }
});
