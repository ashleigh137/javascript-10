function checkeligble()
{
    var donarage=document.getElementById("age").value;
    if(donarage<18)
    {
        document.getElementById("result").innerHTML="You are not Eligible to donate blood"
    }
}