const html = require('choo/html')

module.exports = {
  state: { 
    inactive_progress: 'inactive',
    inactive_complete: 'inactive',
    clickCount: 0
  },
  reducers: {
    tickTodo: (data, state) => {
      if (state.clickCount+1 < 2) {
        state.inactive_complete = 'inactive'
        state.inactive_progress = ''
      } 
      else if (state.clickCount+1 === 3) {
        state.inactive_complete = 'inactive'
        state.inactive_progress = 'inactive'
        state.clickCount = -1
      } 
      else {
        state.inactive_complete = ''
      }
      return {
        inactive_progress: state.inactive_progress,
        inactive_complete: state.inactive_complete,
        clickCount: state.clickCount+=1
      }
    }
  }
}