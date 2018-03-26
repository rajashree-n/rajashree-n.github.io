// After Print button displays
function myFunction()
{        
    document.getElementById("after").style.display="block";
    document.getElementById("before").style.display="none";
    document.getElementById("Aprint").style.display="block";
    document.getElementById("Bprint").style.display="none";    
}
function myFunction1()
{        
    document.getElementById("before1").style.display="block";
    document.getElementById("before").style.display="none";
    document.getElementById("after1").style.display="block";
    document.getElementById("before11").style.display="none";
    document.getElementById("Aprint").style.display="block";
    document.getElementById("Bprint").style.display="none";    
}
function myFunction2()
{        
    document.getElementById("before").style.display="none";
    document.getElementById("after").style.display="block";
    document.getElementById("before11").style.display="none";
    document.getElementById("before111").style.display="block";
    document.getElementById("Aprint").style.display="block";
    document.getElementById("Bprint").style.display="none";    
}
function myFunction3()
{        
    document.getElementById("before11").style.display="block";
    document.getElementById("before111").style.display="none";
    document.getElementById("after1").style.display="none";
    document.getElementById("before").style.display="block";
    document.getElementById("before1").style.display="none";
    document.getElementById("after").style.display="none";
    document.getElementById("Aprint").style.display="none";
    document.getElementById("Bprint").style.display="block";    
}
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },3000);
  }
}

function display() {
 var text = $("#number1").val();
 var text2 = $("#number2").val();
 var text3 = $("#number3").val();
 $("#message").append(+text+ '-<i class="material-icons md-36">face</i>    ' +text2+ '-<i class="material-icons md-36">child_care</i>    ' +text3+ '-<i class="material-icons md-36">card_travel</i>  <p>Confirm Tickets</p> <p><a href="print.html"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><i class="material-icons">keyboard_return</i> </button></a><a href="print.html"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><i class="material-icons">home</i> </button></a> <a href="print.html"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">PROCEED  <i class="material-icons">trending_flat</i> </button></a></p>');
 $("#number1").val('');
 $("#number2").val('');
 $("#number3").val('');
}

$(function() {
	$("#book").on('click',display);
});
function myFunctionBook()
{
 document.getElementById("booked").style.display="block";          
        }






