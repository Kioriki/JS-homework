let arr = [3, 2, null, 1, 5, 11, 4, 0, 0, 10, 0];
let a = 0; //сколько всего цифр
let b = 0;// сколько нулей
let c = 0;//сколько четных
let d = 0;//сколько нечетных
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
            a += 1;
      if(arr[i] === 0) {
            b += 1; 
      } else if (arr[i] % 2 === 0) {
            c += 1; 
      } else {
            d += 1;
          }
        }
      }
console.log('Итого ' + (a) + ' цифр ' + (b) + ' нулей ' + (c) + ' четных ' + (d) + ' нечетных')