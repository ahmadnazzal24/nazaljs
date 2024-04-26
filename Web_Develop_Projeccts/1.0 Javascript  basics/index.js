alert("Hello");   //=> شاشه منبثقة

typeof("Ahmad");   //=> (string) تحديدد نوع المتغير 

typeof("125");      //=>(number)  تحديدد نوع المتغير 

typeof("true");     //=>(boolean)  تحديدد نوع المتغير 

prompt("what is you name!");    //=>    الدخال عن طريق المستخدم

var name = "Ahmad";    //=> تعريف متغير

alert("Hello"+ nome);    //=> اظهار اكثر من عنصر عل شاشه المنبثقه


var name = prompt("compose your tweet: ");
var tex = nome.length;    //=> تحدد عدد احرف الكلمة 
alert("You. have written "+tex+" you have "+(140 - tex)+" characters left.");
alert(nome.slice(0,140))   //=> تحدد عدد الاحرف التي تريد ان تظهر عل الشاشة المنبثقه
alert(nome.toUpperCase());   //=> تحويل جميع الاحرف من سمول الى كبتل
nome.slice(0 ,10);

var name = prompt("what is you name! ");
var frstchrt = nome.slice(0,1);
var upperfrstchrt = frstchrt.toUpperCase();
var restname = nome.slice(1,);
var v = restname.toLowerCase();   //=> تحويل جميع الاحرف من كبتل الى سمول 
alert("Hello "+ upperfrstchrt + v + ".");


var dogAge = prompt('How old is your dog? ');
var humanAge = ((dogAge-2) * 4) + 21;
alert("Your dog is "+ humanAge + " years old in human years.");

a++  //=> a = a + 1  //=> a += 1;
a--  //=> a = a - 1  //=> a -= 1;

function name4(){
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
    alert("Ahmad");
}
name4();

function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    var namber = Math.floor(bottles / 1.5);
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("buy "+namber+" bottles of Milk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(5);
  
  
  
function lifeInWeeks(age) {
      
  /************Don't change the code above************/    
      
      //Write your code here.
  var years = 90 * 12 - age * 12;
  var weeks = 90 * 52 - age * 52;
  var days = 90 * 365 - age * 365;
  
  console.log("You have " + days + " days, " + weeks + " weeks, and " + years + " months left.");
      
      
      
  /*************Don't change the code below**********/
  }
  

lifeInWeeks(56);

  function namea(a){
    return a % 1.5
}
var x = namea(4);
console.log(x)



var x = Math.random(); // ارقام عشوائية بين (0-100)
x *= 9; // ارقام عشوائية بين (0-8)
x=Math.floor(x); // تقريب الارقام 
console.log(x);

var name_one = prompt("what is your name!");
var name_tow = prompt("what istheir name!");
var x = Math.random() *100;
x = Math.floor(x);
alert("Your love score " + x + "%");


var name_one = prompt("what is your name!");
var name_tow = prompt("what istheir name!");
var x = Math.random() *100;
x = Math.floor(x);
if (x > 70){ // x === 100
  alert("Your love score "+ x + "%" + " You love each other like kanye loves kanye.");  
}
if(x >30 && x<=70){ // && => and /  || => or / ! => not;
  alert("Your love score "+ x +"%🚑"); 
}

else{
    alert("Your love score "+ x + "%");
}


function calculateBMI(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
      return "Your BMI is " + bmi.toFixed(1) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + bmi.toFixed(1) + ", so you have a normal weight.";
  } else {
      return "Your BMI is " + bmi.toFixed(1) + ", so you are overweight.";
  }
}

// Example usage:
var weight = 65; // in kilograms
var height = 1.75; // in meters
var result = calculateBMI(weight, height);
console.log(result);



function isLeap(year) {
  // Check if the year is divisible by 4 but not by 100, or if it's divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap year.");
  } else {
      console.log("Not leap year.");
  }
}
isLeap(2002);


var last = ['Ahmad', 'mohammad','seif','abood','noor','rama','lana']; // last
var x = prompt('What is your name? ')
// console.log(llast[0]); // يبداء عد القائمة من 0
if (last.includes(x)){ // includes تبحث عن العنصر داخل قائمة last
    alert('Welcome');
}
else{
    alert('Sorry, maybe next time.');
}


var output = [];
var a = 1;
function fizzBuzz(){
    
    if (a % 3  === 0){
         output.push("fizz"); // last.push() اضافة عنصر عل القائمة
    }
    if (a % 5 === 0){
        output.push("Buzz"); // last.pop() ازالة اخر عنصر في القائمة
    }
    if (a%3===0 && a%5===0){
        output.push("fizzBuzz");
    }
    else{
         output.push(a);
    }
    a++;
    console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

function ax(){ // list
  var last =["Angela", "Ben", "Jenny", "Michael", "Chloe"];
   var x = last.length;
   var v = Math.floor(Math.random() * 5);
   console.log(last[v]+"is going to buy lunch today!");
}
ax();

var numberOfBottles = 99
while (numberOfBottles >= 0) { //طرقية كتابة While
    var bottleWord = "bottle"; // numberOfBottles >= 0 => شرط 
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--; // للتنقيص من العداد او الزياده
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


var output = [];
var a = 1;
function fizzBuzz(){
    for (var i =0; i<=100; i++){ // طريقة كتابة for 
        if (a % 3  === 0){
             output.push("fizz");
        }
        if (a % 5 === 0){
            output.push("Buzz");
        }
        if (a%3===0 && a%5===0){
            output.push("fizzBuzz");
        }
        else{
             output.push(a);
        }
        a++;
        console.log(output);
    }
}

fizzBuzz();

function fibonacciGenerator(n) { // جمع عناصر لبعضهم
    var fibonacciSequence = [0, 1];
    var x =[]
  
    if (n === 1) {
      fibonacciSequence = [0];
    } 
    else if (n > 2) {
      for (var i = 2; i < n; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
      }
    }
  
    return fibonacciSequence;
  }
  console.log(fibonacciGenerator(100));

