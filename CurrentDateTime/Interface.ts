interface iDate{
    today : Date;
}

class CurrentDate implements iDate {
    today : Date = new Date();
    
getCurrentDate (){
let date = this.today.getDate()+'-'+this.today.getMonth()+'-'+
this.today.getFullYear()
console.log(date);
    }
getCurrentTime(){
let time = this.today.getHours()+':'+this.today.getMinutes()+':'+ this.today.getSeconds()
console.log(time);      
    }
}

let dateTime = new CurrentDate();
dateTime.getCurrentDate();
dateTime.getCurrentTime();