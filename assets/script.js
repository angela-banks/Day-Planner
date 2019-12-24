//Saving the input from Day Planner

$(".saveBtn").on("click" , function(){
    console.log($(this).siblings("textarea").val());
    console.log($(this).parent().attr("id"));
//Saving input to local storage
    localStorage.setItem($(this).parent().attr("id") , $(this).siblings("textarea").val());
});


//Setting Current time to Day Planner

let plannerHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentTime = moment().hour();
console.log(currentTime); //current computer is 1-hr behind
// console.log($(".textBox"))
//Change Textarea Color Based on current time

$(".textBox").each(function(index){
    console.log($(this).parent().attr("id"));
    let color = $(this).parent().attr("id");
   // currenttime = 5
   // current is less than the id (div) we want to make green 
   // current is equal the id (div) we want to make red 
   // current is greater than the id (div) we want to make grey 
    console.log(currentTime, "COLOR",color)
    if (currentTime < color){
        console.log("HITTING GREEN")
        $(this).css("background-color" , "green")
    } else if (currentTime > color){
        console.log("HITTING GREY")
        $(this).css("background-color" , "lightgrey")
    } else {
        console.log("HITTING RED")
        $(this).css("background-color" , "red")
    }
});
// for (i=0; i < plannerHours.length; i++) {

// //Append current time to textBox Row
// // currentTime.append($(".textBox")).innerHTML;
//     if (plannerHours[0] < currentTime){
//         $(".textBox").css("background-color" , "lightgrey")
//     } else if (plannerHours[0] > currentTime){
//         $(".textBox").css("background-color" , "red")
//     } else{
//         $(".textBox").css("background-color" , "green");
//     }
// };


