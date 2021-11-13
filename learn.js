const s = [5, 7, 2];

function editInPlace() {
    const a = s[2], b = s[1], c = s[0];
    s[0] = a;
    s[1] = c;
    s[2] = b;
}

console.log(s);
editInPlace();
console.log(s);


/*

s.sort((a, b) => {
    return a > b
});*/
