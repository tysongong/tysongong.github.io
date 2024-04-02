function name(){
	
   //1) Create variable
   var validName=false;
   //2) read value from HTML
   var name = document.getElementById("Name").value;
   var errorMessages = "";
   //3) Do validation
   if (name==="null" || name==="") {
       errorMessages += "<p>The first name is required.</p>";
       } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
           errorMessages += "<p>First name has invalid characters</p>";
       } else {
               validName = true;
       };
   //4) Send error message to HTML
   document.getElementById("errorMessage").innerHTML = errorMessages;
   //5) return status of each field
   return (validName);
}

function email(){
//1) creat var.
var validUsername=false;
 //2) read html value
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
//3 validations
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
   errorMessages += "<p>Invalid email.</p>";
} else
   return true;
//4 error
 document.getElementById("errorMessage").innerHTML = errorMessages;
 }

function comments(){
//1) Create variable
var validComments=false;
//2) read value from HTML
var comments = document.getElementById("Comments").value;
var errorMessages = "";
//3) Do validation
if (comments==="null" || comments==="") {
       errorMessages += "<p>Comments are required.</p>";
        }
		else {
               return true
       }
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}


function validateForm() {
 if (!name() || !email() || !comments() || !test()) 
 {
   return errorMessages.length === 0;
 }
 else
   return false;
}
