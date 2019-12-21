//Saving the input from Day Planner

$(".saveBtn").on("click" , function(){
    console.log($(this).siblings("textarea").val());
    console.log($(this).parent().attr("id"));
//Saving input to local storage
    localStorage.setItem($(this).parent().attr("id") , $(this).siblings("textarea").val());
});


//Setting Current time to Day Planner

let plannerHours = ["9,10,11,12,1,2,3,4,5"];
let currentTime = moment().hour();
console.log(currentTime); //current computer is 1-hr behind

//Change Textarea Color Based on current time
for (i=0; i < plannerHours.length; i++) {

//Append current time to textBox Row
currentTime.append($("#textBox")).innerHTML;
    if (plannerHours[i] < currentTime){
        $(".textBox").css("background-color" , "lightgrey")
    } else if (plannerHours[i] > currentTime){
        $(".textBox").css("background-color" , "red")
    } else{
        $(".textBox").css("background-color" , "green");
    }
};





