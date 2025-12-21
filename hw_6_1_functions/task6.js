/*After a hard quarter in the office you decide to get some rest on a vacation. 
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).*/

/*Після важкого кварталу в офісі ви вирішуєте трохи відпочити у відпустці. Т
ож ви забронюєте авіаквиток для себе та своєї дівчини та спробуєте залишити весь безлад позаду.
Вам знадобиться орендований автомобіль, щоб пересуватися під час відпустки. 
Менеджер з прокату автомобілів робить вам кілька вигідних пропозицій.
Кожен день оренди автомобіля коштує 40 доларів. 
Якщо ви орендуєте автомобіль на 7 або більше днів, ви отримуєте знижку 50 доларів від загальної суми. 
Або ж, якщо ви орендуєте автомобіль на 3 або більше днів, ви отримуєте знижку 20 доларів від загальної суми.
Напишіть код, який видає загальну суму за різні дні.*/


function rentalCarCost(days) {
  const pricePerDay = 40;
  let totalCost = days * pricePerDay;

  if (days >= 7) {
    totalCost = totalCost - 50;
  } else if (days >= 3) {
    totalCost = totalCost - 20;
  }

  return totalCost;
}

// Перевірка
console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(7)); // 230