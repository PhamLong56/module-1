class Book {
    id;
    name;
    year;
    quantity;
    status;
    constructor(id, name, year,quantity,status) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.quantity = quantity;
        this.status= status;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getYear(){
        return this.year;
    }
    getQuantity(){
        return this.quantity;
    }
    getStatus(){
        return this.status;
    }
    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setYear(year){
        this.year = year;
    }
    setQuantity(quantity){
        this.quantity = quantity;
    }
    setStatus(status){
        this.status = status;
    }

}