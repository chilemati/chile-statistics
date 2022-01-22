//    alert('hello');


$(document).ready(function() {
    var t= 0;
    var t1=0;
    var tpx=50;

$(".footercon").hide();

 $("#accordion").accordion();

$("p").click(function() {
$(".footercon").css('display', 'none');

$('.showMenu').css('display', 'none');
//alert("f");

});

    $('p').css("background-color","white");
    $('.click').click(function() {
        // alert(t);
        if(t % 2 == 0){
            $('p.lorem').hide();
        }
        else{
            $('p.lorem').show();
        }
        t++;
       
    });

$('.menu').click(function () {
    if(t1 % 2 == 0){
        $('.showMenu').slideDown();
        $('.showMenu').css('display', 'block');
        
    }
    else{
        $('.showMenu').css('display', 'none');
    }
    t1++;

    $('[class ^=status').css('display','none');
});


$('.soon1').click(function (){
    $('.status1').css({'display':'block', 'color':'red', 'margin-top':'0.3rem', 'text-align':'center'});
    
});

$('.soon2').click(function (){
    $('.status2').css({'display':'block', 'color':'red', 'margin-top':'0.3rem', 'text-align':'center'});
});

$('.soon3').click(function (){
    $('.status3').css({'display':'block', 'color':'red', 'margin-top':'0.3rem', 'text-align':'center'});
});

$('.soon4').click(function (){
    $('.status4').css({'display':'block', 'color':'red', 'margin-top':'0.3rem', 'text-align':'center'});
});

$('.scrolleft').click(function () {

// alert($('.showcase').scrollLeft(1000) + ' px');
$('.showcase').scrollLeft(tpx);
tpx=tpx + 50;
// tim();
});
$('.timer').click(function (){
    $('.timer').animate({left: 2000}).css('background-color','red');

});


// function timing () {

 
// }

$(".showcontact").click(function() {
$(".footercon").show();

});


});


var count=0;  var s=0; var stop=0;
tim();
function showtime () {
    $('.timer').html(count);
    $('.showcase').scrollLeft(count);
    $('.box').click(function (){
        stim();
    });
   
    if((count <=3000) && (s==0)){
        count=count + 50;
        if(count==3000){
            s=1;
        }
    }
    else if((count !=0) && (s==1)){
        count=count - 50;
        if(count==0){
            s=0;
        }
    }
   stop= setTimeout('tim()', 1000);
    // alert(count);
}


function tim(){
showtime();
// alert('me');
}

function stim () {
   clearTimeout(stop);
   stop= setTimeout('tim()', 10000);
}

$(document).ready(function () {   

 $("#dialog").dialog({ 
autoOpen: false,   
draggable: true,  
resizable: true

});


         
$('#opener').on('click', function() {                  $("#dialog").dialog("open");  
load_home1();
       });  
//

$("#dialog" ).dialog({

dialogClass: "no-close",

buttons: [

{

text: "OK",

click: function() {

$( this ).dialog( "close" );

}

}

]

});

//


$('#dialog').dialog({        
buttons:{             

"Cancel": function() {          
$(this).dialog("close");            
 }         }  
//end buttons option
});

//

// Getter

var closeText = $( "#dialog" ).dialog( "option", "closeText" );

// Setter

$( "#dialog" ).dialog( "option", "closeText", "hide" );

//

/*$("#dialog").position({
my: "#dialog", 
at: "#dialog", 
of: "#dialog"

});*/

/*$("#dialog").show({
 effect: "blind", 
duration: 800 ,
delay: 500
});  */

//$(document).ready(function () {

/*var active = $( "#accordion" ).accordion( "option", "active" );

//alert("active");

$( "#accordion" ).accordion( "option", "active", 1 );

var animate = $( "#accordion" ).accordion( "option", "animate" );

//alert("active");

$( "#accordion" ).accordion( "option", "animate", 2000 );

$( "#accordion" ).accordion({

classes: {

"ui-accordion": "highlight"

}

});


var collapsible= $( "#accordion" ).accordion( "option", "collapsible" );

$( "#accordion" ).accordion( "option", "collapsible", true );*/


var disabled= $( "#accordion" ).accordion( {
disabled:false,
collapsible:true,
active:2,
animate:1000,
classes: {

"ui-accordion": "highlight"

},
heightStyle: "content",

icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }



});

//$( "#accordion" ).accordion( "option", "disabled", false );

$("#menu").menu({
classes: {

"ui-menu": "highlight"

},

disabled:false,

icons: { submenu: "ui-icon-circle-triangle-e" },

menus: "ul",

position: { 
my: "left top", 
at: "right-5 top+5" 

}

});


//$("#self button").css("display","none");

$("#topbar a").click(function() {
//alert("d");
$(".se").css("display","block");

});



  
$(".ad1").click(function() {
//alert("5");
$("#dialog").dialog("open");

$("div[title]").attr("title","come");
$(".dyn").html(' <img src="img/images-6.webp" alt=" ADS-IMG" class="diag-img">');

});


$(".ad2").click(function() {
//alert("5");

$("#dialog").dialog("open");

$(".dyn").html('<img src="img/images-7.webp" alt=" ADS-IMG" class="diag-img"> ');

});




});



  



