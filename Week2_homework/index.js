const Company = require('./company')
const Products = require('./products')
const Customer = require('./customer')
const Database = require('./database')
const Chalk = require('chalk');
 


// I would like to create a database, where HR-people can look for services that improve the satisfaction of employees ( like yoga, massage, fresh fruits).
printName = customer => console.log(customer.name + " lives in " + customer.city + "for the price of " + Products.price)


//PRODUCT
yoga = new Products('Yoga Class', 20)
pilates = new Products('Pilates', 15)
food = new Products ('Salad', 10)

//COMPANY
yogabarn = new Company ('Yoga Barn', 'yoga classes', 'Munich', 'sports')
hellofresh = new Company ('HelloFresh', 'healthy food', 'Berlin', 'food')

//CUSTOMER
maria = new Customer ('Maria', 'Health', 'Berlin')
frank = new Customer ('Frank', 'Food', 'Munich')



maria.purchase(yoga)
maria.purchase(yoga)
maria.purchase(food)
frank.purchase(yoga)

yogabarn.greet(maria)
yogabarn.offer(yoga)
yogabarn.offer(pilates)

console.log(Chalk.blue('Hello'));

Database.save('company.json', yogabarn)
Database.save('products.json', pilates)

const loadedFile = Database.load('company.json', yogabarn)
console.log(loadedFile.name)




