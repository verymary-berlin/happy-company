const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Chalk = require('chalk')
const Database = require('./database.js')
  
  
  armagan = new Person("Armagan", 35)
  mert = new Person("Mert", 34)
  wtmb = new Meetup("Women Techmakers Berlin")
armagan.attend(wtmb)
  mert.attend(wtmb)
  

  console.log(Chalk.blue.bgRed('hello'))
  mert.greet(armagan)
  wtmb.printAttendeeNames()

Database.save('meetup.json',wtmb)
Database.save('person.json', mert)

const loadedFile = Database.load('data.json', wtmb)
console.log(loadedFile.name)