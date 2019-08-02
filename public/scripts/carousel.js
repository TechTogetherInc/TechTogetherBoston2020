$(document).ready(function(){
   flag=1;
    $("#aft").click(function(){
       if(flag==0)
        {
            $("#slide-1").css("z-index","999");
            $("#slide-2").css("z-index","9");
            $("#slide-3").css("z-index","9");
            $("#slide-1").css("transform","translateX(0px) scale(1.5)");
            $("#slide-2").css("transform","translateX(-150px) scale(1)");
            $("#slide-3").css("transform","translateX(150px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#slide-3").css("z-index","999");
            $("#slide-2").css("z-index","9");
            $("#slide-1").css("z-index","9");
            $("#slide-3").css("transform","translateX(0px) scale(1.5)");
            $("#slide-1").css("transform","translateX(-150px) scale(1)");
            $("#slide-2").css("transform","translateX(150px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#slide-2").css("z-index","999");
            $("#slide-3").css("z-index","9");
            $("#slide-1").css("z-index","9");
            $("#slide-2").css("transform","translateX(0px) scale(1.5)");
            $("#slide-3").css("transform","translateX(-150px) scale(1)");
            $("#slide-1").css("transform","translateX(150px)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==0)
        {
            $("#slide-3").css("z-index","999");
            $("#slide-2").css("z-index","9");
            $("#slide-1").css("z-index","9");
            $("#slide-3").css("transform","translateX(0px) scale(1.5)");
            $("#slide-1").css("transform","translateX(-150px) scale(1)");
            $("#slide-2").css("transform","translateX(150px)");
            flag=2;
        }
        else if(flag==1)
        {
            $("#slide-2").css("z-index","999");
            $("#slide-3").css("z-index","9");
            $("#slide-1").css("z-index","9");
            $("#slide-2").css("transform","translateX(0px) scale(1.5)");
            $("#slide-3").css("transform","translateX(-150px) scale(1)");
            $("#slide-1").css("transform","translateX(150px)");
            flag=0;
        }
        else if(flag==2)
        {
            $("#slide-1").css("z-index","999");
            $("#slide-2").css("z-index","9");
            $("#slide-3").css("z-index","9");
            $("#slide-1").css("transform","translateX(0px) scale(1.5)");
            $("#slide-2").css("transform","translateX(-150px) scale(1)");
            $("#slide-3").css("transform","translateX(150px)");
            flag=1;
        }
    });
});
