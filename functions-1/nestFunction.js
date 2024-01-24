function temperature(temp) {
  return temp;
}

function greet(temp) {
  const t = temperature(temp);
  if(t <= 5) {
      return "cold"
  }else {
      return "hot"
  }
}

const message = greet(3);
console.log(message);