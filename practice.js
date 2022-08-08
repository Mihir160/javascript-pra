// problem 1

// function convertHour(min){

//     hour = min / 60;
//     return hour;

// }

// const minconvert = convertHour(500);
// const totalhour = minconvert.toFixed(2);
// const intconvert = parseFloat(totalhour);
// console.log(intconvert);


// problem 2

function findLeapYear(year){
    
    const arrayinsert =[];
     for(let i=0; i<year.length; i++){
      
         let element =  year[i];
        // console.log(element);
        // const remainder = element % 4;
        // console.log(remainder);
        if(((element % 4 == 0) && (element % 100 != 0)) || (element % 400 == 0)){
            
            // console.log(element);
            //  console.log("leapyear is", element);
            arrayinsert.push(element);
        }
        
     }
     return arrayinsert;

}

const years = [2023, 2024, 2025, 2028, 2030];
const arrayinsert1 = findLeapYear(years);
console.log(arrayinsert1);