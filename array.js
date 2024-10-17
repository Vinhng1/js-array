// cach 1
// let array = [1, 2, 3, 4, 5];
// for ( let element in array) {
//     console.log ("element=" + array[element]);
// }
// cach 2
// let numbers = [0,1,2,13,15,16,17,18,19,20]
// for (let i = 0; i<numbers.length; i++) {
//     console.log("elment=" + numbers[i])
// }
let x = 0;
let array = Array()
function add_element_to_array() {
    array[x] = document.getElementById("txtValue").value;
    x++;
    alert(" Element: " + array[x] + " Add at index " + x);
    document.getElementByid("txtValue").value = ""
}
function display_array() {
    let e = "<hr>";
    for (let i = 0; i < array.length; i++) {
        e += " Elemnt " + i + " = " + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e
}
