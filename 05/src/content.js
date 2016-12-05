import { cleanupTextcorpus, highlightText, prepareTextcorpus, stopwordRemoval } from './utils/text-processing.js';
import { countOccurences, sortObject } from './utils/occurence-counting.js';
import mark from 'mark.js';

// Inform the background page that this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  if (msg.from === 'popup' && msg.subject === 'Wiki-Giphy') {
    // get most common words in article and return as searchstring
    const tags = document.body.querySelectorAll('div, span, mark, li, b, i, p, a, h1, h2, h3, h4'),
      corpus = prepareTextcorpus(tags),
      cleanedCorpus = cleanupTextcorpus(corpus),
      tokens = stopwordRemoval(cleanedCorpus),
      occurences = countOccurences(tokens),
      sortedOccurences = sortObject(occurences, 'count'),
      buzzwords = `${sortedOccurences[0].value}-${sortedOccurences[1].value}`;

    // highlight the search buzzwords in the page's DOM
    highlightText(tags, sortedOccurences[0].value, 'first');
    highlightText(tags, sortedOccurences[1].value, 'second');

    // hand search terms to popup.js
    response(buzzwords);
  }
});
