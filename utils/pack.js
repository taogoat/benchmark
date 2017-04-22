var fs = require('fs-extra')
var path = require('path')

// clear out build/server
fs.removeSync('build/server')
// clear out build/public
fs.removeSync('build/server')

// copy all of src/core/server
fs.copySync('src/core/server', 'build/server')

// remove webpack.index.js
fs.unlinkSync('build/server/webpack.index.js')

// slice webpack out of server/index.js
fs.readFile('build/server/index.js', 'utf8', function(err, data) {  
    if (err) throw err
    var begin = data.indexOf('// begin production slice')
    var end = data.indexOf('// end production slice')+24
    data = data.slice(0, begin).concat(data.slice(end))
    fs.writeFileSync('build/server/index.js', data)
})