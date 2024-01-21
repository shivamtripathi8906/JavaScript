for (var batteryCharge = 10; batteryCharge >= 0; batteryCharge--)
{
  if(batteryCharge === 0)
  {
    console.log("Battery needs to be replaced.");
  }
  else if(batteryCharge > 0)
   console.log("Battery Percentage is : " +batteryCharge);
}