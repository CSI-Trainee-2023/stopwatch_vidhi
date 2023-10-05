let hr=0;
let min=0;
let sec=0;
let count=0;
let timer=false;
let arr=[];

var laps = document.querySelector(".laps")
var playButton = document.getElementById("play");
playButton.innerHTML='START';
playButton.style.backgroundColor='green'
var resetbutton=document.getElementById("reset");
resetbutton.innerHTML='RESET';
resetbutton.style.backgroundColor='orange'
// if(timer==false){
//     resetbutton.innerHTML='reset'
// }
// else{
// resetbutton.innerHTML='laps';
// }
function play(){
    if(!timer){
        timer=true;
        stopwatch();
        resetbutton.innerHTML='LAPS';
        resetbutton.style.backgroundColor='lightblue'
        playButton.innerHTML='STOP'
        playButton.style.backgroundColor='red'
    }else{
        timer=false;
        playButton.innerHTML='Resume';
        resetbutton.innerHTML='RESET';
        resetbutton.style.backgroundColor='orange'
        playButton.style.backgroundColor='yellow'
    }
}
// function stop(){
//     timer=false;
    
// }
function getTimer(){
    return (hr<10 ? "0" + hr: hr) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10 ? "0" + sec : sec) + " : " + (count<10 ? "0" + count : count); 
}
function reset(){
    if(timer==true){
        lap();
        resetbutton.innerHTML='LAPS'
        resetButton.style.backgroundColor='blue'
     }
    else{
        timer=false;
        hr=0;
        min=0;
        sec=0;
        count=0;
        document.getElementById("milesec").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("hr").innerHTML="00";
        resetbutton.innerHTML='RESET';
        // resetbutton.style.backgroundColor='orange'
        playButton.innerHTML='START';
        playButton.style.backgroundColor='green'
        laps.innerHTML = "";
        arr=[];
        // localStorage.removeItem('laps');
    }}
   
    


function lap() {
    if(timer==true) {   
        var Li = document.createElement("li")  ; 
        Li.innerHTML = getTimer();
        laps.appendChild(Li) ;
        arr.push(getTimer());
        localStorage.setItem('laps',JSON.stringify(arr));
        // resetbutton.style.backgroundColor='blue';
    }
}
function stopwatch(){
    if(timer==true){
        count++;
        setTimeout("stopwatch()",10)
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
            
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
            
              
        }
        var hrstring = hr;
        var minstring=min;
        var secstring =sec;
        var milestring= count;
        if(hr<10){
            hrstring="0"+hr;
        }
        if(min<10){
            minstring="0"+min;
        }
        if(sec<10){
            secstring="0"+sec;
        }
        if(count<10){
            milestring="0"+count;
        }
        document.getElementById("milesec").innerHTML=milestring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("hr").innerHTML=hrstring;
        
    }
   
   
}
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="s" && e.ctrlKey){ e.preventDefault();
    play()}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="x" && e.ctrlKey){ e.preventDefault();
    timer=false}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="r" && e.ctrlKey){ e.preventDefault();
    reset()}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="l" && e.ctrlKey){ e.preventDefault();
    lap()}});
// document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="p" && e.ctrlKey){ e.preventDefault();
//         timer=false;}});

