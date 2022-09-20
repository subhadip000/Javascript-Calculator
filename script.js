function display(val){
    document.getElementById("textarea").value += val
}

function calculate(){
    var v = document.getElementById("textarea").value
    var ans = eval(v)
    document.getElementById("textarea").value = ans
}

function clr(){
    document.getElementById("textarea").value = ""
}