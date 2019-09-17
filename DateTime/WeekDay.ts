 enum WeekDay{
	  Sunday = 1,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
       }

function getDay(date : Date): number
{
    return WeekDay[date];
}

var selectedDate = new Date();
var today = getDay(selectedDate);
 
console.log(WeekDay[today]);  
