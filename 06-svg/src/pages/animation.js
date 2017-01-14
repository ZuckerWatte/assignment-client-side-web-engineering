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
              <svg height="250">
                <circle cx="35%" cy="38%" r="30" class="style-radialGradientgreen animation-circle"/> 
                <circle cx="62%" cy="35%" r="60" class="style-radialGradientblue animation-circle delay-1"/> 
                <circle cx="18%" cy="38%" r="50" class="style-linearGradientred animation-circle delay-2"/> 
                <circle cx="84%" cy="38%" r="40" class="style-linearGradientyellow animation-circle delay-3"/>           
                <defs>
                  <radialGradient id="radialGradientblue" fx="45%" fy="15%" r="110" gradientUnits="userSpaceOnUse">
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
                  <radialGradient id="linearGradientred"  fx="3%" fy="20%" r="160" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ffbeb7" offset="0"/>
                    <stop stop-color="#fca399" offset="10%"/>
                    <stop stop-color="#f27365" offset="20%"/>
                    <stop stop-color="#f95b4d" offset="30%"/>
                    <stop stop-color="#ea4a38" offset="40%"/>  
                    <stop stop-color="#e03a28" offset="50%"/>  
                    <stop stop-color="#d32323" offset="60%"/>  
                    <stop stop-color="#b72121" offset="70%"/>  
                    <stop stop-color="#aa1919" offset="80%"/>  
                    <stop stop-color="#991212" offset="90%"/>
                    <stop stop-color="#8c0c0c" offset="100%"/>  
                  </radialGradient>
                  <radialGradient id="linearGradientyellow"  fx="75%" fy="22%" r="145" gradientUnits="userSpaceOnUse">
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
                  </radialGradient>
                  <radialGradient id="radialGradientgreen"  fx="25%" fy="22%" r="105" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#daffce" offset="0"/>
                    <stop stop-color="#c7ffb5" offset="10%"/>
                    <stop stop-color="#aeff93" offset="20%"/>
                    <stop stop-color="#68f286" offset="30%"/>
                    <stop stop-color="#4fd66c" offset="40%"/>  
                    <stop stop-color="#42ce5e" offset="50%"/>  
                    <stop stop-color="#39ba53" offset="60%"/>  
                    <stop stop-color="#26a840" offset="70%"/>  
                    <stop stop-color="#1b9633" offset="80%"/>  
                    <stop stop-color="#0f8224" offset="90%"/>
                    <stop stop-color="#067018" offset="100%"/>  
                  </radialGradient>
                </defs> 
              </svg>
            </div>
          </div>
          <div class="col-12 px2 mx-auto">
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <svg class="snowflake-animation">
              <path id="snowflake" class="snowflake" d="M115.4,33.3l-5.9-3.5l-16.1,8.6V26.9l-4.3-2.4l-4,2.4v18l-11,5.6V38.2
                l-11,6.2V32.9l16.6-8.3V19l-5.9-3.2l-10.7,5.6V4l-5.4-4l-5.4,3.8v17.4l-9.4-5.6l-4.6,3v6.2l14,8v11.5l-11-5.9v12.1l-10.2-5.9
                l0.3-16.9L26,24.5l-4,3.2v11L6.4,30.1l-6.4,3v7l15.3,8.3L5.4,54v6.2l5.6,2.7l14.2-8.3l9.9,5.6l-9.9,6.2l10.2,5.9h0.3l-9.9,5.9
                l-14.5-8.6l-5.9,3.2v6.4L15.6,84L0,92.8v7l6.7,2.7L22,93.9v11l3.8,3l4.6-3.2V88l11-5.6v12.1l11-6.7v11.5l-14,8v6.2l4.6,3l9.4-5.6
                v17.4l5.4,3.7l5.4-3.8v-17.4l9.4,5.6l4.6-2.4v-6.7l-14-8V87.8l11,6.2V82.7l11,5.9v16.6l4.3,3l4-3v-11l15,8.3l7-3v-6.7L101,84
                l9.1-5.1V73l-5.1-3.2l-14.8,8l-10.5-5.4l10.2-5.9l-9.7-6.2l9.9-6.4l14.8,8.6l5.1-2.7v-6.2l-9.7-5.4l15-8.6v-6.3H115.4z"/>
               <defs>
                  <radialGradient id="radialGradientlightblue" fx="50%" fy="50%" r="110" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#d6f9fc" offset="0"/>
                    <stop stop-color="#bbf3f7" offset="33%"/>
                    <stop stop-color="#7ed7e5" offset="60%"/>
                    <stop stop-color="#67d0e0" offset="100%"/>   
                  </radialGradient>
                </defs>
              </svg>
            </div>     
          </div>     
          </div>  
          <div class="clearfix mxn2">
            <div class="col-12 px2 mx-auto">
              <div class="pattern-animation-bg">
                <svg height="300">
                  <defs>
                    <pattern id="pattern1" width="75" height="75" patternUnits="userSpaceOnUse">
                      <circle class="element0" cx="35" cy="35" r="15"/>
                      <circle class="element1" cx="35" cy="35" r="20"/>
                      <circle class="element2"cx="35" cy="35" r="25">
                      <circle class="element3"cx="35" cy="35" r="30">
                    </pattern>
                    <radialGradient id="radialGradientlightred" fx="50%" fy="50%" r="110" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#ffecea" offset="0%"/>
                      <stop stop-color="#ffe2e0" offset="50%"/>
                      <stop stop-color="#fcd5d1" offset="100%"/>   
                    </radialGradient>
                  </defs>
                  <rect width="350" height="350" class="pattern-bg"/>
                  <rect width="300" height="300" class="animation-pattern1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>      
      </section>
    </div>
  </main>`
