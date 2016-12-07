export function prepareTextcorpus(nodes) {
  const textnodes = [];

  // extract content of textnodes
  for (let i = 0; i < nodes.length; i++) {
    const current = nodes[i];
    if (current.children.length === 0 && current.textContent.replace(/ |\n/g, '') !== '') {
      textnodes.push(current.textContent);
    }
  }
  return textnodes;
}


export function cleanupTextcorpus(textnodes) {
  const removeDigits = new RegExp(/\d+/g),
    removeShortWords = new RegExp(/\W*\b\w{1,2}\b/g);

  // lowercase, remove digits too short words and whitespaces, stopword removal
  let tokens = textnodes.join(' ').toLowerCase();
  tokens = tokens.replace(removeDigits, '');
  tokens = tokens.replace(removeShortWords, '');
  return tokens;
}


export function stopwordRemoval(inputTokens) {
  const stopwords = ['dec', 'december', 'nov', 'november', 'oct', 'october', 'sep', 'september', 'aug', 'august', 'jul', 'july', 'jun', 'june', 'may', 'apr', 'april', 'mar', 'march', 'feb', 'february', 'jan', 'january', 'pm', 'am', 'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'aren"t', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'can"t', 'cannot', 'could', 'couldn"t', 'did', 'didn"t', 'do', 'does', 'doesn"t', 'doing', 'don"t', 'down', 'during', 'each', 'edit', 'few', 'for', 'from', 'further', 'had', 'hadn"t', 'has', 'hasn"t', 'have', 'haven"t', 'having', 'he', 'he"d', 'he"ll', 'he"s', 'her', 'here', 'here"s', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'how"s', 'i', 'i"d', 'i"ll', 'i"m', 'i"ve', 'if', 'in', 'into', 'isbn', 'is', 'isn"t', 'it', 'it"s', 'its', 'itself', 'jump', 'let"s', 'me', 'more', 'most', 'mustn"t', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'pdf', 'pp', 'same', 'shan"t', 'she', 'she"d', 'she"ll', 'she"s', 'should', 'shouldn"t', 'so', 'some', 'such', 'than', 'that', 'that"s', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'there"s', 'these', 'they', 'they"d', 'they"ll', 'they"re', 'they"ve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasn"t', 'we', 'we"d', 'we"ll', 'we"re', 'we"ve', 'were', 'weren"t', 'what', 'what"s', 'when', 'when"s', 'where', 'where"s', 'which', 'while', 'who', 'who"s', 'whom', 'why', 'why"s', 'with', 'won"t', 'would', 'wouldn"t', 'you', 'you"d', 'you"ll', 'you"re', 'you"ve', 'your', 'yours', 'yourself', 'yourselves'];
  let tokens = inputTokens.split(/\W+/)
    .filter((w) => stopwords.indexOf(w.toLowerCase()) < 0)
    .join(' ');
  tokens = tokens.match(/\S+/g);
  return tokens;
}


export function highlightText(nodes, word, className) {
  let found;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].textContent.toLowerCase().includes(word)) {
      found = nodes[i];
      const instance = new Mark(nodes[i]);
      instance.mark(word, { className });
      break;
    }
  }
}
