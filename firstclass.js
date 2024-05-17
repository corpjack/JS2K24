var years = [1995,1996,1937,2005,1998];
function arraycalc(arr,fn)
{
    var arrRes = [];
    for(var i=0; i<arr.length; i++)
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;

}


function calculateAge(el)
{
  return 2024-el;
}


var ages=arraycalc(years,calculateAge);
console.log(ages);