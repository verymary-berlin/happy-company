const fs = require('fs')


// a database saves something
  const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data)) 
    }
     
// a database loades something
    const load = function(filename) {
     return JSON.parse(fs.readFileSync(filename, 'utf8'))
    } 

    module.exports = { save, load }   