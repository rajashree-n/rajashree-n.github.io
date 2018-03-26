function validateFormdonation() {
    var x = document.forms["form"]["fname"].value;
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
	    }
		
	 var x = document.forms["form"]["lname"].value;
    if (x == null || x == "") {
        alert("Last Name must be filled out");
        return false;
	    }	
		
	 var x = document.forms["form"]["addr"].value;
    if (x == null || x == "") {
        alert("Address must be filled out");
        return false;
	    }	
		
	 var x = document.forms["form"]["pin"].value;
    if (x == null || x == "") {
        alert("Pin code must be filled out");
        return false;
	    }	
		
	 var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
        alert("Email id must be filled out");
        return false;
	    }	
		
	 var x = document.forms["form"]["ydon"].value;
    if (x == null || x == "") {
        alert("Cannot be empty");
        return false;
	    }	
}

function validateFormeventreg()
{
	var x = document.forms["form"]["fname"].value;
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
	    }
		
	 var x = document.forms["form"]["lname"].value;
    if (x == null || x == "") {
        alert("Last Name must be filled out");
        return false;
	    }

	var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
        alert("Email id must be filled out");
        return false;
	    }	

    		
}	

function validateFormregistration()
{
 var x = document.forms["form"]["fname"].value;
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
	    }
		
	 var x = document.forms["form"]["lname"].value;
    if (x == null || x == "") {
        alert("Last Name must be filled out");
        return false;
	    }

	var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
        alert("Email id must be filled out");
        return false;
	    }		

	var x = document.forms["form"]["pin"].value;
    if (x == null || x == "") {
        alert("Pin code must be filled out");
        return false;
	    }
		
	 var x = document.forms["form"]["addr"].value;
    if (x == null || x == "") {
        alert("Address must be filled out");
        return false;
	    }

	var x = document.forms["form"]["dat"].value;
    if (x == null || x == "") {
        alert("Date of birth must be filled out");
        return false;
	    }		
}		
		
function validateFormadminlg()
{
	var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
        alert("User Name must be filled out");
        return false;
	    }

	var y = document.forms["form"]["password"].value;
    if (y == null || y == "") {
        alert("Password must be filled out");
        return false;
	    }

    if(x=="admin" && y=="123456")
	{
		location="index1.html";
	}		

	else
	{
		alert("Invalid username and password!!");
	}
	
}	
