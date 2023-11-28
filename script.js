//Задание 1 Сделайте функцию, которая отнимает от первого числа второе и делит на 
//третье. Числа передаются параметром.

function numbers(a, b, c){
    d = (a + b) / c;
    console. log(d);
}
numbers(5, 5, 2);

//Задание 2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function scv(f){
    var x = [ ];
    x[0] = f*f*f;
    x[1] = f*f;
    console.log(x);
    return x;
}
scv(5);

//Задание 3 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
 function max(v, w){
    console.log('Из чисел ', v, 'и', w, 'больше');
    if (v > w){
        console.log(v);
        return v;
    } else {
        console.log(w);
        return w;
    }
 }
 max(7, 6);

 function min(v, w){
    console.log('Из чисел ', v, 'и', w, 'меньше');
    if (v < w){
        console.log(v);
        return v;
    } else {
        console.log(w);
        return w;
    }
 }
 min(7, 6);

 //Задание 4 Напишите две функции: первая ф-ция должна возвращать массив с
//числовыми значениями, диапазон которых должен вводиться пользователем
//с клавиатуры; вторая – выводить полученный массив.

/*function f1(){
    var num = [];
    min_zn = prompt('Введите мин знач = ', 0);
    max_zn = prompt('Введите макс знач = ', 0);
    for (let j = min_zn; j<= max_zn; j++){
        num[j] = j;
    }
    return num;    
}

function f2(){
    console.log(f1());    
}
f2();*/

//Задание 5 Сделайте функцию isEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//функция возвращает true, если нечетное — false.

function isEven(d){
    if (d % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4));

//Задание 6 Напишите ф-цию, в которую передается массив с целыми числами.
//Верните новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей
//задачи.

function arra(a){
    var masEven = [];
    var i = 0;
    for (let j = 0; j< a.length; j++){
       if(isEven(a[j]) === true)
       {
       masEven[i] = a[j];
       i++;
       }
    }
    return masEven;    
}
console.log(arra([1,2,3,4,5,6,7,8,9,10]));

//7Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//кроме пробела, то пирамида должна быть нарисована этим символом,
//например:
/**
 * 
 * @param {number} h
 */
function f7(h){
    var xxx ='';
    for (let i = 1; i<= h; i++){
        xxx ='';
        for (let j = 1; j<= i; j++){
        xxx+=i.toString();
        }
        console.log(xxx);
        }
    }
f7(3, '*')



//7
/**
 * 
 * @param {number} h
 */
function f7_0(h){
    for (let i = 1; i<= h; i++){
        let s = '';
        for (let j = 0; j< i; j++){
            if(arguments[1]){
                s+= arguments[1]
            } else {
                s+= i;
            }
        }
    console.log(s);
    }
}

f7_0(3,'*');

function f7_1(h){
    for (let i = 1; i<= h; i++){
        let s = '';
        for (let j = 0; j< i; j++){
            s += (arguments[1] !==' '  ? arguments[1] : i);//одно или втророе
        }
    console.log(s);
    }

}
f7_1(4,'a');



//8Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
//Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
//цию, но которая выведет перевернутый треугольник.


 function f8(h){
    for (let i = 1; i<= h; i++){
        let s = '';
        for (let j = 1; j<= h-i; j++){
           s+=' ';
        }
        for(let j = h-i+1; j <= h+i-1; j++){
            s+='*';
        }
    console.log(s);
    }}
   
 function f8_1(h){
    for (let i = 1; i<= h; i++){
        let s = '';
        for (let j = 1; j<= i-1; j++){
           s+=' ';
        }
        for(let j = i; j <= 2*h-i; j++){
            s+='*';
        }
    console.log(s);
    }} 

 f8(8); 
 f8_1(8);