const choo = require('choo')
const html = require('choo/html')
const app = choo()

app.model(require('./models/drinks'))
app.model(require('./models/moni'))

const mainView = require('./views/main'),
  moniView =  require('./views/author')

app.router((route) => [
  route('/', mainView),
  route('/author', require('./views/author'))
])

const tree = app.start()
document.body.appendChild(tree)
