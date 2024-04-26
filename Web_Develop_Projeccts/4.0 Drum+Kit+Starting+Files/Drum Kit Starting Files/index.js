// document.querySelectorAll("button ")[1].addEventListener('click',headleClick)
// function headleClick(){
//     alert("Ahmmadnazzal")
// }

// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener('click', handleClick);
// });

// function handleClick() {
//     alert("Ahmmadnazzal");
// }

//  var auldi = new Audio("sounds/tom-1.mp3");
//         auldi.play();




// استهداف جميع العناصر التي تحمل الفئة "drum"


var drums = document.querySelectorAll(".drum");

// إضافة حدث النقر (click) إلى كل عنصر من العناصر المستهدفة
drums.forEach(function(drum) {
    drum.addEventListener('click', function() {
        // تغيير لون العنصر إلى اللون الأبيض
        //console.log(this.style.color = 'white');
        var x = this.innerHTML;
        MakeSound(x);
        bttenAnimation(x);
    });
});

// إضافة حدث الضغط على المفاتيح
document.addEventListener("keypress", function(event) {
    // استدعاء دالة MakeSound مع تحويل المفتاح إلى حروف صغيرة
    MakeSound(event.key.toLowerCase());
    bttenAnimation(event.key.toLowerCase())
});

// دالة لتشغيل الأصوات
function MakeSound(key){
    switch(key){
        case "w":
            var tom = new Audio("sounds/tom-1.mp3");
            tom.play();
            break;

        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(key);
    }
}



function bttenAnimation(v){
   var actaveButten =  document.querySelector("."+ v);
   actaveButten.classList.remove("pressed"); // تعديل عل شكل العنصر يصبح غامق
   setTimeout(function(){
    actaveButten.classList.remove("pressed");
   },100);// يرجع العنصر الى نفس الشكل بعد ثانيه واحده 

}



// function add(num1, num2) { //  js الالة حاسبه في
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }
    








// function Blm(name,old,clean){   //array نستخدم الفنكشن اداا كان عندي عدد كبير من 
//     this.name = name;
//     this.old = old;
//     this.clean = clean;
    
// }

// // طريقة ادخال المعلومات للفنكشن
// var x = new Blm("sara","33",["bathroom","lobby","bedroom"]);


// var x = {  //array 
//     name :"sara",
//     olde :"25",
//     clean:[
//         "bathroom","lobby","bedroom"    
//     ]
    
// }