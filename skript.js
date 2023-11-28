
document.write(`№1 <br />`);
let first = [1,2,3,4,5];
for(let i = 0; i < first.length; i++){
    document.write(`${first[i]} <br />`);
};

document.write(`№2 <br />`);

let second = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0;i < second.length; i++){
    if(second[i]> -10){}else{continue;};
    if(second[i]< -3){}else{continue;};
    document.write(second[i]+ `<br />`);
};

document.write(`№3 <br />`);

let third = [];
for(let i = 23; i<= 57; i++){
    third.push(i);
}
document.write(third + `<br />`)

document.write(`№4 <br />`);

let fourth = [`10`,`20`,`30`,`50`,`235`,`3000`];
for