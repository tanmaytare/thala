document.querySelector(".sub").addEventListener("click",function()
{
    var k = document.querySelector(".box").value.length;

    if(k ==7)
    {
        //alert("THALA FOR A REASON!!");
        var z = new Audio("./Thala for a reason 😎 shorts funny shortsfeed.mp3");
        z.play();

        document.querySelector(".thala1").classList.add("show");
        document.querySelector(".thala2").classList.add("show");

        setTimeout(function()
        {
            document.querySelector(".thala1").classList.remove("show");
            document.querySelector(".thala2").classList.remove("show");
        },15000);
    }
});