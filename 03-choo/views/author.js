const html = require('choo/html')
const emoji = require('node-emoji');

console.log('View is loaded!!!!')
module.exports = (state, prev, send) => {
  return html`
    <main>
      <h1>Huhu: ${state.moni.title + emoji.get('woman')}</h1>
    </main>
  `
}