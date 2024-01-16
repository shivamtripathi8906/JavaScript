var x = 500;
var y = 80

var choice = "Mult"

switch(choice){
  case "Add":
    console.log(x+y);
    break;
  case "Sub":
    console.log(x-y);
    break;
  case "Mult":
    console.log(x*y);
    break;
  case "Div":
    console.log(x/y)
  default:
    console.log("Select correct choice");
}