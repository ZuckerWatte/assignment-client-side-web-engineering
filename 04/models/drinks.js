const html = require('choo/html')
const emoji = require('node-emoji');

module.exports = {
  state: { 
      item: `${emoji.get('question')}`,
      body: '',
      chooseClass: '',
      removeClass: '',
      drinkClass: '',
      vomitClass: '',
      button: '',
      drinks: 0,
      content: [],
      warning: '',
      vomits: 0,
      iigh: []
    },
    reducers: {
      update: (data, state) => ({ item: data }),
      addEmoji: (data, state) => {
        return {
          body: `...because I ${emoji.get('heart')} ${emoji.get(data)}`,
          item: emoji.get(`${data}`),
          button: `More ${emoji.get(data)} pls!`,
          chooseClass: 'fade-in'
        }
      },
      add: (data, state) =>{
        state.content.push(data)
        if (state.drinks+1 > 0) {
          state.warning = ''
        }
        if (state.drinks+1 >= 10) { 
          state.warning = 'Oh Oh! Too many drinks!',
          state.removeClass = 'fade-in'
        }
        return {
          drinks: state.drinks += 1,
          content: state.content,
          warning: state.warning,
          removeClass: state.removeClass,
          drinkClass: 'show'
        }
      },
      remove: (data, state) => {
        if (!state.drinks == 0) {
          state.content.pop(data)
          state.iigh.push(emoji.get('mask'))
          if (state.drinks-1 < 10) { 
            state.warning = ''
          }
          return {
            drinks: state.drinks -= 1,
            content: state.content,
            warning: state.warning,
            vomits: state.vomits += 1,
            iigh: state.iigh,
            vomitClass: 'show'          
          }
        } 
        return {
          warning: 'Get some drinks first!'
        }
      }
    }
}