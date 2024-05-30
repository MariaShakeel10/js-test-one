//Q1
//legal
let firstName ;
let _myWork ;
let your-variable ;
let list04

//illegal
let 3student ;
let school data ;
let 66 ;
let @username ;

//Q2
let firstNum = +prompt("Enter a no.");
let secondNum = +prompt("Enter a no.");

let sum = firstNum +secondNum;
console.log (sum);

//Q3
let one = "Hello";
let two = "World";
console.log (one +" " + two);

//Q4
let userNum = +prompt("Enter a no.");
let ans = userNum % 2;
if(ans === 0){
 console.log("even")
}
else {
 console.log("odd")
}

//Q5
let marks = +prompt("Enter your score");
let calculate = (marks/100)*100;

let grade ;
if (grade >= 90){
 grade ="A"
}
else if (grade >= 80){
 grade ="B"
}
else if (grade >= 70){
 grade ="C"
}
else if (grade >= 60){
 grade ="D"
}
else{
 grade ="F"
}
console.log(grade);

//Q6
//1
var a=4;//5
var b =3 ;//4,5
var c=6 ;//7,8
let result1 = a++ - ++c + b++ + ++c -b++;
console.log (result1);//4

//2
let a = 3;//2,1
let b =2;//1
let c =3 ;//4
let result2 = --a ---a +++c +c -a++ + --b;
console.log (result2);//9

//3
let a = 3 ;//4
let b = 2 ;//1,0
let c = 6 ;//5,6
let result3 = a++ - --b+ c--+ b-- - ++c;
console.log(result3);//3

//4
let a = 3 ;//4
let b = 5 ;//4
let c = 8 ;//9
let result4 = ++a + --b - c++;
console.log(result4);//0

//5
let a = 3 ;//2,3
let b =1  ;//2,3
let c =  1;//2
let result5 = b++ - --a + ++c - a++  ++b -a;
console.log(result5);//-2

//6
let a =5  ;//4,
let b = 5 ;//
let c = 5 ;//4
let result6 = c-- + a-- - --a;
console.log(result6);//7


//7
let a =5  ;let b = 5 ;let c = 5 ;
let result7 = ++c - a-- + --b + b++ - --c +c;
console.log(result7);


//8
let a =5  ;//
let b = 7 ;//6,7,6
let c = 2 ;//3,2,1
let result8 =  ++b + c-- - b-- + ( ++c + --c - --b);
console.log(result8);//1


//9
let a =1  ;let b = 10 ;let c = 2 ;
let result9 = c++ -b + a-- - --c +b;
console.log(result9);


//10
let a =0 ;let a = 0 ;let c = 0 ;
let result10 = a + --b -c - ++c + b-- + a++;
console.log(result10);

//Q7
//1 undefined
//2 cat
//3 0
//4 false
//5 undefined
//6 undefined
//7 true
//8 0
//9 null
//10 true
//11 true
