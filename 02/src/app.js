import Handlebars from 'handlebars'

import Todolist from './todolist'

Handlebars.registerHelper('eq', function(a, b, options) {
  return a === b ? options.fn(this) : options.inverse(this)
})


new Todolist()
