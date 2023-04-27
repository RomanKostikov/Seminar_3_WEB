// *Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let index = 2; index < arr.length; index = index + 2) {
        if (arr[index] > max) {
            max = arr[index];
        }    
    }
    return max; 
}
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
const arr = [4, -12, 29, 6, 31, 92, -50];
console.log(`Наибольшое значение в чётном индеске, среди чисел ${arr.join(", ")} будет равен ${getMaxEvenElement(arr)}`); // 31