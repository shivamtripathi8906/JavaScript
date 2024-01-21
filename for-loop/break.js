var i = 0;
for( ; ; )
{
  if(i < 4)
  {
    console.log(`Inside Loop ${i} `);
    i++;
  }
  else
  {
    console.log("Inside else and breaking.");
    break;
  }
}

//If you want to break the code just comment out the break; statement and you will see and infinite loop occuring.