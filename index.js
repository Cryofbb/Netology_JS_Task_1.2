const arr = []
const taxArray = [];
let salarySumm = 0;
let tax = 0;
for (let i = 0; i < 70; i++) {
  if (i < 5){
    arr.push(10000);
  }
  if (i > 4 && i < 20){
    arr.push(25000);
  }
  if (i > 19 && i < 60){
    arr.push(50000);
  }
  if (i > 59 && i < 70){
    arr.push(100000);
  }
}
for (let i = 0; i < arr.length; i++) {
  const salary = arr[i];
  if (salary <= 10000){
    tax = 0;
  } else if (salary > 10000 && salary <= 20000){
    tax = (salary - 10000) * 0.1;
  } else if (salary > 20000 && salary <= 70000){
    tax = (salary - 20000) * 0.2 + (10000 * 0.1);
  } else if (salary > 70000){
    tax = (salary - 70000) * 0.5 + (50000 * 0.2) + (10000 * 0.1);
  }
  taxArray.push(tax);
  salarySumm+=taxArray[i];
  
}
console.log(`Средние налоговые отчисления с человека составили ${Math.floor(salarySumm / taxArray.length)} руб.`)
console.log(`Суммарные налоговые отчисления составили ${salarySumm} руб.`)


