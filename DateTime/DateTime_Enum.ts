
  
enum Day{
	  Sunday = 0,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
       }

function getDay(date : Date): number
{
    return date.getDay();
}

const anydate = new Date();
const today = getWeekDay(anydate);
 
console.log(WeekDay[today]);  