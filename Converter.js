function Converter(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }
 
  return number.toString(16).toUpperCase();
}
 
console.log(Converter(27));
console.log(Converter(48.6));