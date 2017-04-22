var fs = require('fs-extra')

// copy all of src/core/server
fs.copySync('src/core/client/index.js', 'build/public/app.js')
