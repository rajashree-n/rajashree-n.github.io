
function login(){
//taking i/p
var username = document.getElementById("usernameid").value;
var password = document.getElementById("passwordid").value;

//checking for null values
if(username === "" || password === ""){
document.getElementById("loginfail").style.display="block";
return false;
}

//request-xml
var xmlReq = new XMLHttpRequest();

xmlReq.open("POST", "//add link here//", true); 
xmlReq.setRequestHeader("Access-Control-Allow-Origin", "*"); 
xmlReq.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlReq.send("username="+username+"&password="+password); 

//result of req
xmlReq.onreadystatechange = function(){
if(xmlReq.readyState == 4 && xmlReq.status == 202){ 
document.getElementById("loginresult").style.display="block";
}
else if(xmlReq.readyState == 4 && xmlReq.status == 401){ 
document.getElementById("loginfail").style.display="block";
document.getElementById("passwordid").value = "";
}
};

}
