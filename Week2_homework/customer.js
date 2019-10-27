const Chalk = require('chalk')
printName = customer => console.log(Chalk.bgGreen(customer.name))

//CLASS -> CUSTOMER
module.exports =  class Customer {
    constructor (name, interest, city) {
        console.log("Hi, I am created, my name is", name)
        this.name = name
        this.interest = interest
        this.city = city
        this.products = []
        this.company = [] 
    }

     search(company){
        console.log("Hello " + company.name + ", my name is " + this.name + ". My interest is " + this.interest + " .I live in " + this.city  + ". Is this a fit?")
    }

    purchase(products) {
        this.products.push(products)
        products.purchase.push(this)

    }

        subscribe(company) {
        this.company.push(company)
        company.subscribe.push(this)
    }

}
