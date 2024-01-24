function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

function calc(a, b, work){
  if(work == "add"){
    console.log(add(a, b))
  }
  else if(work == "sub"){
    console.log(sub(a, b))
  }
  else if(work == "mult")
    console.log(mult(a, b))
  else if(work == "div")
    console.log(div(a, b))
}

calc(2, 3, "add");
calc(2, 3, "sub");
calc(2, 3, "mult");
calc(6, 3, "div");