let numbers = [10, 5, 15, 20, 25, 35, 40];
let min = numbers[0];
let index = 0;
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
        index = i
    }
}
document.write("min =" + min + " at position " + index);