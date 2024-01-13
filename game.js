var buttonColor = ["red", "blue", "green", "yellow"];
var gamePatten = [];
var userClickedPattern = [];
var level = 0;
alert("HI");

$(".btn").on("click",function(){
        var userChossenColor = $(this).attr("id");
        userClickedPattern.push(userChossenColor);

        playSound(userChossenColor);
        animatePress(userChossenColor);

        checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currLevel){
    if(userClickedPattern[currLevel] == gamePatten[currLevel]){
        console.log("Success");

        if(userClickedPattern.length == gamePatten.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    checkKey = false;
  }



function nextSequence(){
    userClickedPattern = [];

    level++;
    $("h1").text("Level "+level);


    var randomNumber = Math.floor(Math.random()*4);
    var randomChooseColor = buttonColor[randomNumber];
    gamePatten.push(randomChooseColor);

    var $selectedButton = $('#' + randomChooseColor);
    $selectedButton.fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChooseColor);

}


function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}


function animatePress(currentColor){
    $("#"+currentColor).addClass('pressed');
    setTimeout(function (){
        $("#"+currentColor).removeClass('pressed');
    },100);
}

var checkKey = false;

$(document).keypress(function(){
    if(!checkKey){
        $("#level-title").text("Level " + level);
        nextSequence();
        checkKey = true;
    }
});

