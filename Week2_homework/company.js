const Chalk = require('chalk');

//CLASS -> COMPANY
module.exports = class Company {
    constructor(name, service, city) {
        console.log("Hi, I am created, my name is", Chalk.bgGreen(name))
        this.name = name
        this.service = service
        this.city = city
        this.subscribe = []
        this.products = []

    }
    greet(customer){
        console.log("Hello " + Chalk.bgMagenta(customer.name) + ", my name is " + this.name + ". I offer " + this.products + ". My business is in " + Chalk.bgGreen(this.city)  + ". Do you want to join?")
    }

    offer(products) {
                this.products = products.name
                products.purchase.push(this)
        
            }

}

