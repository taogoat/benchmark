var chalk = require('chalk')
var fs = require('fs-extra')

var data = require('../results/test1/javascript/taogoat/stub_profile.json')

var targetArray = data.markers
var targetKey = 'isOffMainThread'

var results = []
var length = targetArray.length
var i = 1
while(i<length){
  var key = targetArray[i][targetKey]
  if(results.indexOf(key)==-1) results.push(key)
  i++
}

console.log(chalk.yellow('results are \n')+results)