// Функція getExtremeElements(array) приймає один параметр array - масив елементів
// довільної довжини. Доповни код функції таким чином, щоб вона повертала масив
// з двох елементів - першого і останнього елементів параметра array.

function getExtremeElements(array) {
    const array1 = [];
    const lastElementIndex = array[array.length - 1];;
    const firstElementIndex = array[0];
    array1.push(firstElementIndex);
    array1.push(lastElementIndex);
    return array1;
}

// console.log(getExtremeElements([1, 2, 3, 4, 5, 6, 7, 8])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //["apple", "banana"]
//  ----------------Джемини --------------------------
// function getExtremeElements(array) {
//   // Перевірка на випадок, якщо масив порожній
//   if (array.length === 0) {
//     return []; 
//   }

//   // Отримуємо перший елемент. Індекс першого елемента завжди 0.
//   const firstElement = array[0];
  
//   // Отримуємо останній елемент. Індекс останнього елемента 
//   // дорівнює довжині масиву мінус 1 (array.length - 1).
//   const lastElement = array[array.length - 1]; 
  
//   // Повертаємо новий масив, що містить ці два елементи
//   return [firstElement, lastElement]; 
// }
// __________________________________________________________________________________________________

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

function getLastElementMeta(array) {
    const array1 = [];
    const firstElementIndex = array.length - 1;
    const lastElementIndex = array[array.length - 1];;
    array1.push(firstElementIndex);
    array1.push(lastElementIndex);
    return array1;
}

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])) //  [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])) //  [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"])) //  [1, "peach"]


// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

function calculateTotalPrice(order) {
  // 1. Ініціалізуємо акумулятор (змінну для підрахунку загальної суми)
  let totalPrice = 0;

  // 2. Ітеруємося по кожному елементу (ціні) в масиві order
  for (const price of order) {
    // 3. На кожній ітерації додаємо поточний елемент до загальної суми
    totalPrice += price;
  }

  // 4. Повертаємо фінальний результат
  return totalPrice;
}

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116


// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// Використовуй цикл for.

function getEvenNumbers(start, end) {
  const array = [];
    for (let i = start; i <= end; i++) {
    if (i%2 === 0) {
        array.push(i);
        return array;
    } else {
       return [];
    }
  }
}

console.log(getEvenNumbers(2, 5)) // повертає [2, 4]
console.log(getEvenNumbers(3, 11)) // повертає [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)) // повертає [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)) // повертає [8]
console.log(getEvenNumbers(7, 7)) // повертає []