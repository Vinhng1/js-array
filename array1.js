let x = [-3,5,1,3,2,10];
let first = 0;
let last = x.length-1;
for (let i = 0; first < last ; i++) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x); 