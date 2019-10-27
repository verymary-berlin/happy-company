const Chalk = require('chalk')
printName = person => console.log(Chalk.bgGreen(person.name))
  
module.exports = class Meetup {
    constructor(name) {
      this.name = name
      this.attendees = []
    }
    printAttendeeNames() {
      this.attendees.forEach(printName)
    }
  }
  
