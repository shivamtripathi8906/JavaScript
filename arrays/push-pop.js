var studentName = ["Nikhil", "Sanjay", "Rahul", "Akansha", "Javed"];

console.log("Orignal Array");
console.log(studentName);
studentName.push("Sneha");
console.log("Array after pushing new name Sneha");
console.log(studentName);
studentName.pop();
console.log("Array after pop Sneha");
console.log(studentName);

console.log("Array removing 2nd element Sanjay. ");
studentName.splice(1, 1);  //Using Index to remove element and 1 is how many to remove.
console.log(studentName); 
studentName.splice(1, 0, "Suman");
console.log("Array after inserting Suman in 2nd position ");
console.log(studentName);
