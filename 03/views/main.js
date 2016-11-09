const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <main>
      <a href='/author'>Moni</a>
      <h1>This is the ${state.item}-Train</h1>
      <button class='drink' onclick=${(e) => send('addEmoji', 'wine_glass')}>Wine!</button>
      <button class='drink' onclick=${(e) => send('addEmoji', 'beer')}>Beer!</button>
      <div class='drink-selection ${state.chooseClass}'>
        <p class='me-like'>${state.body}</p>
        <button class='add-drinks' onclick=${(e) => send('add', state.item)}>${state.button}</button>
      </div>
      <span class='drinks-counter ${state.drinkClass}'>You had ${state.drinks} drinks.</span>
      <span>${state.content}</span>
      <span class='warning'>${state.warning}</span>
      <button class='remove-drinks ${state.removeClass}' onclick=${(e) => send('remove', state.item)}>Let it out!</button>
      <span class='vomits-counter ${state.vomitClass}'>You let out ${state.vomits} drinks.</span>
      <span>${state.iigh}</span>
  </main>
`
}