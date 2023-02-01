var number = prompt("Please enter a number 1-10");
number = parseInt(number)
var table = number;
var i = 1;
var msg = '<h2>Multiplication Table</h2>';

if (table = number) {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
} 

var el = document.getElementById('blackboard');
el.innerHTML = msg;