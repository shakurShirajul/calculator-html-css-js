function clr(){
    document.getElementById("scrn").value = "";
}


function display(value){
    if(value == 'Backspace'){
        
        let str = document.getElementById("scrn").value;
        str = str.toString();
        str = str.slice(0, -1);
        console.log(str);
        document.getElementById("scrn").value = str;
    }
    else{
        document.getElementById("scrn").value += value;
    }
}

function calculate(){
    let p = document.getElementById("scrn").value;
    p = eval(p);
    document.getElementById("scrn").value = p;
}


window.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if((e.key>=0 && e.key<=9) || e.key == 'Backspace' || e.key =='+' || e.key =='-' || e.key =='*' || e.key =='/' || e.key =='.' ){
        display(e.key);
    }
    else if(e.key == '='){
        calculate();
    }
    else if(e.key == 'Escape'){
        document.getElementById("scrn").value = "";
    }
})