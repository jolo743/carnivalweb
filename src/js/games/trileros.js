let ballPosition = 1;

let isShuffling = false;

let isGameStarted = false;

let hasSelected = false;

let selectedCup = null;


function startShuffle(){


    if(isShuffling) return;



    isShuffling = true;

    isGameStarted = true;

    hasSelected = false;



    // bajar vasos si estaban levantados
    document.querySelectorAll(".cup-inner").forEach(cup=>{

        cup.style.transform = "translateY(0)";

    });



    let ball = document.getElementById("ball");

    ball.style.opacity = 0;

    ball.style.transform = "translate(-50%,0)";



    document.getElementById("status-text").innerText = "MEZCLANDO...";

    document.getElementById("shuffle-btn").disabled = true;



    let count = 0;



    let interval = setInterval(()=>{


        shuffleAnimation();


        count++;



        if(count >= 10){


            clearInterval(interval);


            finalizeShuffle();


        }



    },350);



}




function shuffleAnimation(){


    let a = Math.floor(Math.random()*3);

    let b = Math.floor(Math.random()*3);



    if(a === b) return;



    let cupA = document.getElementById(`cup-${a}`);

    let cupB = document.getElementById(`cup-${b}`);




    cupA.style.transform = "translateX(120px)";

    cupB.style.transform = "translateX(-120px)";





    setTimeout(()=>{


        cupA.style.transform = "";

        cupB.style.transform = "";



        if(ballPosition === a){

            ballPosition = b;

        }


        else if(ballPosition === b){

            ballPosition = a;

        }



    },300);



}





function finalizeShuffle(){


    isShuffling = false;


    document.getElementById("status-text").innerText = "¡ELIGE UN VASO!";


    document.getElementById("shuffle-btn").disabled = false;



}







function selectCup(index){


    if(isShuffling || !isGameStarted || hasSelected)

        return;



    hasSelected = true;

    selectedCup = index;



    let cup = document.querySelector(`#cup-${index} .cup-inner`);



    cup.style.transform = "translateY(-150px)";





    setTimeout(()=>{


        if(index === ballPosition){


            showBall(index);


            document.getElementById("status-text").innerText = "¡GANASTE! 🎉";



            setTimeout(()=>{


                cup.style.transform = "translateY(0)";


                let ball = document.getElementById("ball");


                ball.style.opacity = 0;

                ball.style.transform = "translate(-50%,0)";



            },1500);



        }


        else{


            document.getElementById("status-text").innerText = "VASO VACÍO";



            setTimeout(()=>{


                revealCorrect();



            },500);



        }



    },500);



}








function showBall(index){


    let ball = document.getElementById("ball");


    let cup = document.getElementById(`cup-${index}`);


    let table = document.querySelector(".table");



    let cupRect = cup.getBoundingClientRect();


    let tableRect = table.getBoundingClientRect();



    let positionX = cupRect.left + (cupRect.width / 2) - tableRect.left;



    ball.style.left = positionX + "px";


    ball.style.opacity = 1;


    ball.style.transform = "translate(-50%,-40px)";



}


function revealCorrect(){


    let correctCup = document.querySelector(`#cup-${ballPosition} .cup-inner`);


    correctCup.style.transform = "translateY(-150px)";


    showBall(ballPosition);



    setTimeout(()=>{


        // bajar vaso correcto
        correctCup.style.transform = "translateY(0)";


        // bajar vaso elegido si era diferente
        if(selectedCup !== ballPosition){


            let wrongCup = document.querySelector(`#cup-${selectedCup} .cup-inner`);


            wrongCup.style.transform = "translateY(0)";


        }



        let ball = document.getElementById("ball");


        ball.style.opacity = 0;

        ball.style.transform = "translate(-50%,0)";



    },1500);



}