function getNum(inp){
    var result = document.getElementById("screen");
    result.value +=inp;
}

function clearVal(){
    var result = document.getElementById("screen");
    result.value= "";
}

function Ans(){
    var result = document.getElementById("screen");
    result.value = eval(result.value);
}