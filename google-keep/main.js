function addItem() {
var text = $("#form").val();
$("#todo").append('<div class="box one"><div id="shade"><div class="header" id="header">' +text+ '</div><div class="container"><center><button class="delete mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">delete</i> </button> <button class="strike mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">done</i> </button></center> </div></div></div>');
$("#form").val('');
}
function addItem1() {
var text = $("#form").val();
$("#todo").append('<div class="box one"><div id="shade"><div class="header">' +text+ '</div><div class="container"><ul id="list"></ul><input type="text" id="listval" placeholder="Add a ToDo"><button id="addtodo2" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" > ADD</button><div class="container"><button class="delete mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">delete</i> </button><button class="strike mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">done</i> </button></div></div></div>');
$("#form").val('');
}
function addIteml1() {
var text = $("#listval").val();
$("#list").append('<li><input type="checkbox" class="strike">' +text+ '<button class="deletel"><i class="material-icons">done</i> </button></li>');
$("#listval").val('');
}
function deleteItem() {
$(this).closest(".box").fadeOut(300);
}
function deleteIteml() {
$(this).parent().remove();
}
function strikeOut() {
if ($(this).closest(".box").css('textDecoration') == 'line-through') {
$(this).closest(".box").css('textDecoration','none');
$(this).closest(".box").css('background-color','white');
}
else {
$(this).closest(".box").css('textDecoration','line-through');
$(this).closest(".box").css('background-color','#ffa500');
}
}

$(function() {
$("#addtodo").on('click',addItem);
$("#addtodo1").on('click',addItem1);
$("#addtodo2").on('click',addIteml1);
$(document).on('click','.delete',deleteItem);
$(document).on('click','.deletel',deleteIteml);
$(document).on('click', '.strike', strikeOut);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#pic')
        .attr('src', e.target.result)
        .width(500)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
$("#form1").val('');
}


//Change from grid view to list view
function myFunction()
{        
    document.getElementById("Menuitems").style.display="block";
    document.getElementById("holder").style.display="none";
    document.getElementById("icn").style.display="block";
    document.getElementById("change").style.display="none";
    document.getElementById("myButton1").style.display="none";
    document.getElementById("myButton").style.display="block";
    
}

function myFunction1()
{        
    document.getElementById("Menuitems").style.display="none";
    document.getElementById("holder").style.display="block";
    document.getElementById("icn").style.display="none";
    document.getElementById("change").style.display="block";
    document.getElementById("myButton1").style.display="block";
    document.getElementById("myButton").style.display="none";
    
}

// Adding Quick Notes
function myFunctionAddnote()
{        
    document.getElementById("show").style.display="none";
    document.getElementById("hidden").style.display="block";
    
}

function functionhide()
{        
    document.getElementById("form").style.display="none";
    document.getElementById("form1").style.display="block";
    document.getElementById("pic").style.display="block";
    
}


// Get the modal
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var del = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on (X), close the modal
function myFunctionclose(){
    document.getElementById("myModal").style.display="none";
    document.getElementById("myModal1").style.display="none";
    document.getElementById("myModal2").style.display="none";
}



// Change background color of div for list
function blue()
{
document.getElementById('header').style.backgroundColor='#20b2aa'
}
function orange()
{
document.getElementById('header').style.backgroundColor="#ff8c00"
}

function green()
{
document.getElementById('header').style.backgroundColor="green"
}

function pink()
{
document.getElementById('header').style.backgroundColor="pink"
}

