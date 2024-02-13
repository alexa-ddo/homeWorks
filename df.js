//1.
console.log('aaa@bbb@ccc'.replace(/@/g, '!' ));
//2.
let str = '2025-12-31';
var s = str.replace(/-/g, ' ');
var s =s.replace(/(2025) (12) (31)/, '$3 $2 $1');
console.log(s.replace(/ /g, '/'));
//\3. 
let dano = 'Я учу javascript!';
//учу
console.log(dano.substr(2, 3));
console.log(dano.substring(2, 5));
console.log(dano.slice(2, 5));
//«javascript» 
console.log(dano.substr(6, 10));// (start, [lenght])
console.log(dano.substring(6, 16));
console.log(dano.slice(6, 16));

//4. 
let nums = [4, 2, 5, 19, 13, 0, 10]
for(i = 0; i< nums.length; i++){
    var num = [];
    num[i] = nums[i] ** 3;
    sum = 0;
    sum += num[i];
} console.log(sum);


//5.
var a = 0;
var b = 0;
function f_5(a, b){
  var c = a - b;
  if (a < b)return -c; else return c;
}
console.log(f_5(4, 1));

//6.
let date = new Date();
 function zero(num){
  if(num<10)return '0' + num; else return num;
}
let dateNow = zero(date.getDate()) + '.' + zero(date.getMonth()+1) + '.' + date.getFullYear();//+1 потому что месяц январь дает 0

console.log(dateNow);

//7.


function finding(str){
  let regExp = /ab+a/g; 
  let opa = str.match(regExp);
  return opa;
}

console.log(finding('aa aba abba abbba abca abea'))

//8.
var srr = '375293334849';
console.log(/^\+?375?\(?29||25\)?\d{6}$/.test(srr));





