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
              <svg height="150">
                <rect x="90" y="15" width="120" height="120" class="style-radialGradientred"/>          
                <defs>
                  <linearGradient id="radialGradientred"  x1="80" y1="5" x2="210" y2="130" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fca399" offset="0"/>
                    <stop stop-color="#f78c80" offset="10%"/>
                    <stop stop-color="#f27365" offset="20%"/>
                    <stop stop-color="#f95b4d" offset="30%"/>
                    <stop stop-color="#ea4a38" offset="40%"/>  
                    <stop stop-color="#e03a28" offset="50%"/>  
                    <stop stop-color="#d32323" offset="60%"/>  
                    <stop stop-color="#b72121" offset="70%"/>  
                    <stop stop-color="#aa1919" offset="80%"/>  
                    <stop stop-color="#991212" offset="90%"/>
                    <stop stop-color="#8c0c0c" offset="100%"/>  
                  </linearGradient>
                </defs> 
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="150">
                <circle cx="150" cy="50%" r="65" class="style-radialGradientblue"/>           
                <defs>
                  <radialGradient id="radialGradientblue" fx="35%" fy="30%" r="80" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a5ebf7" offset="0"/>
                    <stop stop-color="#8ae7f7" offset="10%"/>
                    <stop stop-color="#59dcf7" offset="20%"/>
                    <stop stop-color="#3acdea" offset="30%"/>
                    <stop stop-color="#31bcd8" offset="40%"/>  
                    <stop stop-color="#1bb7d6" offset="50%"/>  
                    <stop stop-color="#12b0cc" offset="60%"/>  
                    <stop stop-color="#0c9cd1" offset="70%"/>  
                    <stop stop-color="#0088ba" offset="80%"/>  
                    <stop stop-color="#067499" offset="90%"/>
                    <stop stop-color="#026789" offset="100%"/>  
                  </radialGradient>
                </defs> 
              </svg>
            </div>
          </div>
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg height="150">
                <polygon points="150,15 75,130, 225,130" class="style-radialGradientyellow"/>              
                <defs>
                  <linearGradient id="radialGradientyellow" x1="80" y1="30" x2="215" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff5af" offset="0"/>
                    <stop stop-color="#fff093" offset="10%"/>
                    <stop stop-color="#ffe760" offset="20%"/>
                    <stop stop-color="#f9e33b" offset="30%"/>
                    <stop stop-color="#ffe14f" offset="40%"/>  
                    <stop stop-color="#f9d245" offset="50%"/>  
                    <stop stop-color="#f7c53b" offset="60%"/>  
                    <stop stop-color="#f4bd24" offset="70%"/>  
                    <stop stop-color="#e5aa09" offset="80%"/>  
                    <stop stop-color="#db9d00" offset="90%"/>
                    <stop stop-color="#c68e00" offset="100%"/>  
                  </linearGradient>
                </defs> 
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>`
