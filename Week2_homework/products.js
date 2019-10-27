//CLASS -> PRODUCT
module.exports = class Products{
    constructor(name, price) {
        this.name = name
        this.price = price
        this.purchase = []
    }

    printPurchaseNames () {
        this.purchase.forEach(printName)
    }


    

}