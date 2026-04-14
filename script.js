var x = 40
var y = 70
document.getElementById("number_result").innerHTML = x + y;
document.getElementById("string_result").innerHTML = String(x) + String(y) + "<hr>";

try
{
    var a;
    document.getElementById("err").innerHTML=a;
}
catch(err)
{
    document.getElementById("err").innerHTML=err.message;
}

const add = (a,b,c) => a + b+c;
document.getElementById("arrow_answer").innerHTML = add(4,6,7);