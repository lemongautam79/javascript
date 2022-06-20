// Functions in javascript
function msg0()
{
    alert("Hello javascipt");
} 

//JS Variables   
var x = 10;//global variables
var y = 20;
var z = x + y;
document.writeln(z);


function msg()
{
    var z = 10;//local variable
    document.writeln(z);
    document.writeln(x);
    document.writeln(window.value)
}

//Declaring JavaScript global variable within function
function msg2()
{
    var value = 8;
}


//!Object creation using object literal
var lemon = {name:"Lemon Gautam",salary:100000}
document.writeln(lemon.name+" "+lemon.salary);

//!Object creation by creating an instance of object
var lemon1 = new Object();
lemon.name = "Lemon Gautam";
lemon.salary = "50000";
document.writeln(lemon.name+lemon.salary);

//!arrays in js
var names = ["Lemon", "Azul","Aazin"];
for(var i = 0; i<names.length;i++)
{
    document.writeln(names[i]+"<br>")
}

//! js dates
var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
document.writeln(day+" "+month+" "+year);
document.writeln(Math.random());