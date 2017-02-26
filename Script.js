$(function()
 {
    
    $('title').text('Dougs Design');
    
    score = 0;
    TimerTrip = 0;
    gradClr1 = 0;
    gradClr2 = 0;    
    gradClr2 = 0;    
    var id;
    startUp = 1;
    
//    $('#CurScore').prepend(score);
    
    colors = Array('red','green','blue','pink','lime','cyan','purple','amber','teal');
    colorsDupe = Array('red','green','blue','pink','lime','cyan','purple','amber','teal');
    clr1 = colors[Math.floor(Math.random()*colors.length)];
    clrIndex = colors.indexOf(clr1);
    colorsDupe.splice(clrIndex, 1);
    clr2 = colorsDupe[Math.floor(Math.random()*colorsDupe.length)];
    
    LoadGame();
    colorTimer();
    
    function colorTimer(){
        setTimeout(function(){
            if(startUp == 1){
                LoadGame()
            }
            colorTimer();
        }, 2000);
    }
    
    $('#box').on('mousedown', 'div', function(){
//        console.log('test');
        if (startUp == 1){
            startUp = 0
        }
        if($(this).hasClass(clr1)){
           $(this).removeClass(clr1);
           $(this).addClass(clr2);
        }
        else{
            $(this).removeClass(clr2);
            $(this).addClass(clr1);
        }
    });
    $('body').on('click', '#Restart', function(){
        ResetGame(); 
    });

//    $('button').click(function(){
//        ResetGame();
//    });
    
    $('#box').on('mouseup', 'div', function(){
        if(
             ($('#A1').hasClass(clr1)) &&
             ($('#A2').hasClass(clr1)) &&
             ($('#A3').hasClass(clr1)) &&
             ($('#B1').hasClass(clr1)) &&
             ($('#B2').hasClass(clr1)) &&
             ($('#B3').hasClass(clr1)) &&
             ($('#C1').hasClass(clr1)) &&
             ($('#C2').hasClass(clr1)) &&
             ($('#C3').hasClass(clr1)) 
             ||
             ($('#A1').hasClass(clr2)) &&
             ($('#A2').hasClass(clr2)) &&
             ($('#A3').hasClass(clr2)) &&
             ($('#B1').hasClass(clr2)) &&
             ($('#B2').hasClass(clr2)) &&
             ($('#B3').hasClass(clr2)) &&
             ($('#C1').hasClass(clr2)) &&
             ($('#C2').hasClass(clr2)) &&
             ($('#C3').hasClass(clr2))
            )
            {
                clearInterval(id);
                score = score+1;
                LoadGame();
                move();
                $('#Timer').fadeIn(300);
            }
    });
    
    function LoadGame()
    {
        colors = Array('red','green','blue','pink','lime','cyan','purple','amber','teal');
        colorsDupe = Array('red','green','blue','pink','lime','cyan','purple','amber','teal');
        clr1 = colors[Math.floor(Math.random()*colors.length)];
        clrIndex = colors.indexOf(clr1);
        colorsDupe.splice(clrIndex, 1);
        clr2 = colorsDupe[Math.floor(Math.random()*colorsDupe.length)];
        
        $('#Bar').remove();
        
        $('#Score').after('<div id="Bar"><div id="Timer"></div></div>');
/*  $('body').prepend('<div id="box"></div>');
    $('#box').prepend('<div id="A1"></div>');
    $('#box').prepend('<div id="A2"></div>');
    $('#box').prepend('<div id="A3"></div>');
    $('#box').prepend('<div id="B1"></div>');
    $('#box').prepend('<div id="B2"></div>');
    $('#box').prepend('<div id="B3"></div>');
    $('#box').prepend('<div id="C1"></div>');
    $('#box').prepend('<div id="C2"></div>');
    $('#box').prepend('<div id="C3"></div>');  */ 
        
        $('#Timer').removeClass();
        
        $('#Timer').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        
        $('#CurScore').text(score);
        
        $('#CurScore').removeClass();
        $('#CurScore').addClass('txt'+(window['clr'+Math.floor((Math.random()*2)+1)]));
        
        $('#3_1').removeClass();
        $('#3_2').removeClass();
        
        $('#3_1').addClass('txt'+clr1);
        $('#3_2').addClass('txt'+clr2);
        
//        gradClr1 = $('#3_1').css('color');
//        gradClr2 = $('#3_2').css('color');
//        
//        $('#Timer').css('background', 'linear-gradient(to right,'+gradClr1+','+gradClr2+')');
        
        $('#A1').removeClass();
        $('#A2').removeClass();
        $('#A3').removeClass();
        $('#B1').removeClass();
        $('#B2').removeClass();
        $('#B3').removeClass();
        $('#C1').removeClass();
        $('#C2').removeClass();
        $('#C3').removeClass();
    

        $('#A1').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#A2').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#A3').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#B1').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#B2').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#B3').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#C1').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#C2').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
        $('#C3').addClass(window['clr'+Math.floor((Math.random()*2)+1)]);
    }  
    
    function move() {
        var elem = document.getElementById("Timer"); 
        var width = 0;
        if(score >= 50){
            id = setInterval(frame, 10);
        }
        else if(score >= 40){
            id = setInterval(frame, 15);
        }
        else if(score >= 30){
            id = setInterval(frame, 20);
        }
        else if(score >= 20){
            id = setInterval(frame, 25);
        }
        else if(score >= 10){
            id = setInterval(frame, 27);
        }
        else{
            id = setInterval(frame, 30);
        }
        
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            GameOver();
        } 
            else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
    
    function GameOver() {
        $('#Bar').after('<div id="Cover"></div>'); 
        $('#Bar').after('<div id="GameOver"><h3>GAME OVER</h3></div>');
        $('#Bar').after('<div id="Restart">restart<div>')
        $('#GameOver').addClass('txt'+clr2);
        $('#Restart').addClass(clr1);
        $('#Score').animate({top: '-250px'}, 600);
        
        $('#A1').animate({right:'0px'}, 200);
        $('#A3').animate({right:'0px'}, 200);
        $('#B1').animate({right:'0px'}, 200);
        $('#B3').animate({right:'0px'}, 200);
        $('#C1').animate({right:'0px'}, 200);
        $('#C3').animate({right:'0px'}, 200);
        $('#A1,#A3,#B1,#B3,#C1,#C3').delay(200).fadeOut(100);
        $('#A2').delay(400).animate({bottom:'0px'}, 200);
        $('#C2').delay(400).animate({bottom:'0px'}, 200);
        $('#A2,#C2').delay(400).fadeOut(100);
        $('#B2').delay(1000).animate({height:'-=100', width:'-=100',right: '50px', bottom: '50px'}, 200);
        $('#Timer').fadeOut(300);
    }
    
    function ResetGame() {
        $('#Restart').fadeOut(300).remove();
        $('#Score').animate({top: '0px'}, 200);
        $('#GameOver').fadeOut(300).remove();
        $('#Cover').fadeOut(100).delay(100).remove();
        $('#B2').delay(200).animate({height:'+100', width:'+100',right: '0px', bottom: '0px'}, 200);
        $('#A2,#C2').delay(600).fadeIn(100);
        $('#A2').delay(200).animate({top:'0px'}, 200);
        $('#C2').delay(200).animate({top:'0px'}, 200);
        $('#A1,#A3,#B1,#B3,#C1,#C3').delay(1700).fadeIn(100);
        $('#A1').animate({left:'0px'}, 200);
        $('#A3').animate({left:'0px'}, 200);
        $('#B1').animate({left:'0px'}, 200);
        $('#B3').animate({left:'0px'}, 200);
        $('#C1').animate({left:'0px'}, 200);
        $('#C3').animate({left:'0px'}, 200);
        score = 0;
        $('#CurScore').text(0);
        LoadGame();
        
    }
});



























