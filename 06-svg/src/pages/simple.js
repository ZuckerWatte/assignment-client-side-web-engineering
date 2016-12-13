const html = require('choo/html')
const nav = require('../elements/nav')

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <hr>
      <section class="clearfix mxn2">
        <div class="col-12 px2 mx-auto">
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg width="300">
                <rect x="30" y="25%" width="75" height="50%" fill="#ea4a38" stroke="#b72121" stroke-width="4"/>
                <circle cx="154" cy="50%" r="40" fill="#31bcd8" stroke="#0088ba" stroke-width="4"/>
                <polygon points="230,38 190,112, 270,112" fill="#f9e33b" stroke="#f7c53b" stroke-width="4"/>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg width="300">
                 <g stroke="#3a3a3a" fill="#dedede" stroke-width="5">
                  <circle cx="50%" cy="50%" r="70" stroke="none" fill="#787878"/>
                  <circle cx="50%" cy="50%" r="65"/>
                  <circle cx="50%" cy="50%" r="55"/>
                  <circle cx="50%" cy="50%" r="45"/>
                  <circle cx="50%" cy="50%" r="35"/>
                  <circle cx="50%" cy="50%" r="25"/>
                  <circle cx="50%" cy="50%" r="15"/>
                  <circle cx="50%" cy="50%" r="6" stroke="none" fill="#c10000" />
                 </g>
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg width="300">
                 <g stroke="#f7c53b" fill="#f9e33b" stroke-width="8">
                  <circle cx="20%" cy="50%" r="35"/>
                  <circle cx="40%" cy="50%" r="35"/>
                  <circle cx="60%" cy="50%" r="35"/>
                  <circle cx="80%" cy="50%" r="35"/>
                 </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
