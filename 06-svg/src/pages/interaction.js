const html = require('choo/html')
const nav = require('../elements/nav')
const tickTodo = require('../elements/tickTodo')

 function onSubmit(send, state) {
   console.log('test!')
  }

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <hr>
      <section class="clearfix mxn2">
        <div class="col-12 px2 mx-auto">
          <div class="clearfix mxn2">
            <div class="col-12 px mx-auto">
              <svg height="400" width="300" viewBox="0 0 400 300">
                <symbol id="flower" viewBox="0 0 400 400" x="-50" y="-45">
                  <path d="M243.3,199.3L243.3,199.3c-11.5-29.2-25.3-69.7-26.1-98.8c-1-38.2,5.9-65.2,20.5-80.3c8.8-9.1,20.1-13.7,33.4-13.8
  c0.1,0,0.1,0,0.2,0c13.5,0,25.3,5,34,14.4c18.3,19.7,19.8,54.3,17.9,79.9s-15,65.1-26,94.7h-0.1"/>
                </symbol>
                <use xlink:href="#flower" class="petal ${state.inactive_progress}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_progress}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_progress}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_complete}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_complete}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_complete}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_complete}"/>
                <use xlink:href="#flower" class="petal ${state.inactive_progress}"/>
                <circle cx="50%" cy="50%" r="55" class="inner" onclick=${(e) => send('tickTodo')}/> 
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
