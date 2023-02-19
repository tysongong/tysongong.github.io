var validFirstname=false;

function firstName(){
	
   //1) Create variable
   //2) read value from HTML
   var firstname = document.getElementById("FirstName").value;
   var errorMessages = "";
   //3) Do validation
   if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
       errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
       } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
           errorMessages += "<p>First name has invalid characters</p>";
       } else {
               validFirstname = true;
       };
   //4) Send error message to HTML
   document.getElementById("errorMessage").innerHTML = errorMessages;
   //5) return status of each field
   return (validFirstname);
}

function lastName(){
//1) Create variable
var validlastName=false;
//2) read value from HTML
var Lastname = document.getElementById("LastName").value;
var errorMessages = "";
//3) Do validation
if (Lastname==="null" || Lastname==="" || Lastname.length > 50 ) {
       errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
       } else if (Lastname.match("^[a-zA-Z ,.'-]+$")===null) {
           errorMessages += "<p>Last name has invalid characters</p>";
       } else {
               validlastName = true;
       };
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
//5) return status of each field
return (validFirstname && validlastName);
}

function Email(){
//1) creat var.
var validUsername=false;
 //2) read html value
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
//3 validations
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
   errorMessages += "<p>Invalid email</p>";
} else
   return true;
//4 error
 document.getElementById("errorMessage").innerHTML = errorMessages;
 }


function Phone(){
//1) create var
 var validPhone=false;
 //2)
var phone = document.getElementById("Phone").value;
var errorMessages = "";
 //3
if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
errorMessages += "<p>Invalid phone number</p>";
else
 return true;
 //4
 document.getElementById("errorMessage").innerHTML = errorMessages;
//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
errorMessages += "<p>Invalid phone number</p>";
else
 return true
//...
 }

function Username(){
//1) Create variable
var validUsername=false;
//2) read value from HTML
var username = document.getElementById("Username").value;
var errorMessages = "";
//3) Do validation
if (username==="null" || username==="" || username.length > 12 ) {
       errorMessages += "<p>Invalid username</p>";
             } 
  else
      return true
             
       
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;

}

function Password(){
//1) Create variable
var validpassword=false;
//2) read value from HTML
var password = document.getElementById("Password").value;
var errorMessages = "";
//3) Do validation
if (password==="null" || password==="" || password.length > 7 ) {
       errorMessages += "<p>Invalid password</p>";
        } 
    else {
      return true
	}         
       
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}

function Address(){
//1) Create variable
var validaddress=false;
//2) read value from HTML
var address = document.getElementById("Address").value;
var errorMessages = "";
//3) Do validation
if (address==="null" || address==="") {
       errorMessages += "<p>Address is required</p>";
        }
		else {
               return true
               
       }
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}

function City(){
//1) Create variable
var validcity=false;
//2) read value from HTML
var city = document.getElementById("City").value;
var errorMessages = "";
//3) Do validation
if (city==="null" || city==="") {
       errorMessages += "<p>City is required</p>";
        }
		else {
               return true
       }
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}

function Zip(){
    //1) Create variable
    var validzip = false;
	var country = document.getElementById("Country").value;
    var zip = document.getElementById("Zip").value;
    var errorMessages = "";
    //3) Do validation
    if (zip === "null" || zip === "" || country === "USA" || zip.length > 5) {
	errorMessages += "<p>Zipcode is required and needs 5 digits</p>";
	}
    else {
             validzip = true
       }
   //4) Send error message to HTML
   document.getElementById("errorMessage").innerHTML = errorMessages;
}

function State(){
//1) Create variable
var validstate=false;
//2) read value from HTML
var State = document.getElementById("State").value;
var errorMessages = "";
//3) Do validation
if (state==="null" || state==="") {
       errorMessages += "<p>State is required</p>";
        }
		else {
               return true
       }
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}

function country(){
//1) Create variable
var validCountry=false;
//2) read value from HTML
var country = document.getElementById("Country").value;
var errorMessages = "";
//3) Do validation
if (country==="null" || country==="") {
       errorMessages += "<p>Country is required</p>";
        }
		else {
               return true
       }
//4) Send error message to HMTL
document.getElementById("errorMessage").innerHTML = errorMessages;
}


function validateForm() {
 if (!firstName() || !lastName() || !Email() || !Phone() || !Username() || !Password() || !Address() || !City() || !State() || !Country() || !Zip() ) 
 {
   return errorMessages.length === 0;
 }
 else
   return false;
}