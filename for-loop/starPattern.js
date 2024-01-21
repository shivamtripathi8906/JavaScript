numberOfRows = 5;

for(var i = 1; i <= numberOfRows; i++)
{
  let starPattern = '';
  for(var j = 1 ; j <= i; j++)
  {
    starPattern += '*';
  }
  console.log(starPattern);
}