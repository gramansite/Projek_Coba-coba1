$(window).scroll(function(){
    var y = $(window).scrollTop()
    if (y >=100){
        $('nav .container').css('background-color','green');
    }else if(y >=0){
        $('nav .container').css('background-color','#26d0c9');
    }else{
        $('nav .container').css('background-color','#26d0c9');
    }
});