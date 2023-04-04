
var b = Math.round(Math.random() * (Math.random() * 100));
var output = null;
var counter = 1;
var start = Date.now();
var seconds = -1;
var btn1 = document.getElementById("btn");
var startTimer;
var input = document.getElementById("input-div");
var clear;


input.addEventListener("keypress", function (event)
    {
        if (event.key === "Enter")
            {
                event.preventDefault();
                document.getElementById("btn").click();
            }
    });



function timer()    
    {   
        seconds = (Date.now() - start) / 1000;
        startTimer = setInterval(timer,1000);
        document.getElementById("timerBox").innerText = Math.round(seconds);
    };

function reset1()
    {
        document.getElementById("display").innerText = null
    };

/* function reset()
    {
        body.re
    }; */

function random()
    {
        var a  = document.getElementById("input").value;
        var con = document.getElementById("counter");

        if (a == b)
            {
                var output = "You Win!"
                con.innerText = "It Took You " + counter + " Guesses To Get The Number And " + Math.round(seconds) + " Seconds";
                clear = clearTimeout(timer)
            }

        else if (a < b)
            {
                var output = "Too Low"
            }

        else if (a > b)
            {
                var output = "Too High"
            }

        var dis = document.getElementById("display");
        
        counter++
        dis.innerText = output;
    };
