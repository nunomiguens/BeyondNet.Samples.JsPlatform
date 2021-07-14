const Print = (product) => {
    console.log("Name: " + product.name + " " + "Price: " + product.price);
}

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }     
}