class Date {
    date;
    month;
    year;

    constructor(date, month, year) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.date;
    }
    getMonth(){
        return this.month;
    }
    getYear () {
        return this.year;
    }
    setDay (date) {
        this.date = date;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
}
let date=new Date(2,2,2017);
console.log(date);

date.setDay(10);
date.setMonth(12);
date.setYear(2023);

let day = date.getDay();
let month=date.getMonth();
let year=date.getYear();
document.write(day+'/'+month+'/'+year);