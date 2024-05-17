//! Object create
var personProto ={
    calculateAge:function()
    {
        console.log(2016-yearofBirth);
    }
}


var john =Object.create(personProto);
john.name = 'Aniket',
john.yearofBirth =20,
john.job = 'teacher'


var jane =Object.create(personProto,
    {
        name:{value:'jane'},
        yearofBirth:{value:1999},
        job:{value:'developer'}

    }
)


//!primitive vs Objects
var a =20;
console.log(`Before change ${a}`);
var b = a;
a = 46;
console.log(`After Change ${a}`);
console.log(`Value of b ${b}`);

//*Object
var value =
{
    name :'aniket',
    age:20
}
var obj1 = value;
console.log(obj1.age);
value.age =24;
console.log(obj1.age);
console.log(value.age);


//!first Class Function
var years = [1996,1998,1999,2004,2006];

function calage(arr, fn)
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

var years = calage(years,calculateAge);
console.log(years);


var resp = [
{
    "Status":"0",
    "OperatorCode":"JIO",
    "CircleCode":"5"
}
]

var obj = JSON.parse(resp);
console.log(obj);