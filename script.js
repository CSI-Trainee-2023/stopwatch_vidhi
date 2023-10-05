let hr=0;
let min=0;
let sec=0;
let count=0;
let timer=false;
let arr=[];

var laps = document.querySelector(".laps")
var playButton = document.getElementById("play");
playButton.innerHTML='Start';
var resetbutton=document.getElementById("reset");
resetbutton.innerHTML='Reset';

function play(){
    if(!timer){
        timer=true;
        stopwatch();
        playButton.innerHTML='Stop'
    }else{
        timer=false;
        playButton.innerHTML='Start'
    }
}
// function stop(){
//     timer=false;
    
// }
function getTimer(){
    return (hr<10 ? "0" + hr: hr) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10 ? "0" + sec : sec) + " : " + (count<10 ? "0" + count : count); 
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("milesec").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    // resetbutton.innerHTML='Laps';
    laps.innerHTML = "";
    arr=[];
    localStorage.removeItem('laps');
     }
   
    


function lap() {
    if(timer==true) {   
        var Li = document.createElement("li")  ; 
        Li.innerHTML = getTimer();
        laps.appendChild(Li) ;
        arr.push(getTimer());
        localStorage.setItem('laps',JSON.stringify(arr));
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
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="s" && e.ctrlKey){play()}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="x" && e.ctrlKey){timer=false}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="r" && e.ctrlKey){reset()}});
document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="l" && e.ctrlKey){lap()}});

