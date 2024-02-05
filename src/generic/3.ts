/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<U extends object, T extends object>(objA: U, objB: T): U & T {
  return Object.assign(objA, objB);
}

export {};
