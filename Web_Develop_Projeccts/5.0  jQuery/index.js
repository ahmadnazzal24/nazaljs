
//$("button"); // ==> document.querySelectorAll("button"); نفس الطريقه 
//$("h1").css("color","red"); // ==> document.querySelector("h1").style.color = "red"; نفس الوضيفة 


//$("h1") ; html يتم استدعاء عنصر 
//$("h1").css("color","red");   js عل عنصر من خلال css و تطبيق اومر html يتم استدعاء عنصر 


$("h1").addClass("big random");// h1 المودج داخل فنفكشن و تطبيقها عل العنصر  css يتم استدعاء اومر 

//("h1").text("Bye"); //   h1 لتغير النص دخل عنصر 

//$("button").text("Don't Click Me");//buttonلتغير النص داخل جميع عناصر ال 
//$(".A").text("Don't Click Me");// A يوجد به فنكشن باسم button لتغير النص داخل  عنصر ال 

//$("button").html("<em>Hey</em>"); //  JS دمجها في العنصر عن طريق Html تغير النص داخل الهنصر و اضافة عناصر من 

// $("button").click(function(){
//     $("h1").css("background-color","pink");
//     $("h1").css("color","white");
// });


// $(document).keypress(function(event){ //  event تخزين ما يكتب داخل 
//     $("h1").text(event.key); //event تغير النص داخل العنصر حسب ما داخل 
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color","purple");
// });


//$("h1").before("<button>New</button>");h1 اضافة كبسه اعلى الشاشه العنصر 
//$("h1").after("<button>New</button>");h1 اضافة كبسه تحت  العنصر 
//$("h1").prepend("<button>New</button>");h1 اضافة كبسه فوق  العنصر 
//$("h1").append("<button>New</button>"); // h1 اضافة كبسه جانب العنصر 


// $("button").on("click",function(){
//     $("h1").hide(); // h1عند الضغط عل العنصر يختفي ال 
// });

// $("button").on("click",function(){
//     $("h1").fadeOut(); // h1عند الضغط عل العنصر يختفي تدريجيا ال 
// });

// $("button").on("click",function(){
//     $("h1").fadeToggle(); //   h1 و عند الضغط عل العنصر يضهر مره اخرى h1عند الضغط عل العنصر يختفي تدريجيا ال 
// });


// $("button").on("click",function(){
//     $("h1").slideToggle(); // h1عند الضغط عل العنصر يختفي  h1 يضهر عناصر فوقه و عند الضعط كمان مره يضهر  ال 
// });

$("button").on("click",function(){
    $("h1").animate({opacity:0.5}); // h1عند الضغط عل العنصر يصبح لونها فاتح تدريجيا ال 
});






