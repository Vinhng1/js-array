let numbers = [-3, 1, 5, 2, 7, 10];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
document.write("max:" + max + " at position " + index);