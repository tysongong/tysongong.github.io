function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);
upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
for(j=0;j<=i;j++){

if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
for(j=0;j<i;j++){

if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("downRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=1;i<=pHeight;i++){
rLine +="<p>";
for(x=1; x<=pHeight-i;x++){
    rLine +="<span style=color:white>" + pSymbol +"</span>";
  }
for(j=x;j<=pHeight;j++){

if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
for(x=1; x<=pHeight-i;x++){
    rLine +="<span style=color:white>" + pSymbol +"</span>";
}
for(j=0;j<i;j++){

if (j%2)
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
rLine +="</p>";
}
document.getElementById("downLeft").innerHTML = rLine;
}