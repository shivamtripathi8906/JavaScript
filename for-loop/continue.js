for (i=0; i < 5; i++)
{
  // console.log(i); break;
  console.log("Outer iteration " +i);
  if( i < 3)
  {
    continue;
  }
  else
  {
    console.log("This is " + i + " loop.")
  }
}