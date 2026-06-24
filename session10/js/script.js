console.log('JS')

// var / let / const

var userName = "Nouran"
var lastName = "Fayez"

var fullName = userName + " " + lastName
// template string
var fullName = `first name = ${userName} 
 last name ${lastName}`

var age = 32

var isGraduated = false

var p = null

var r


// console.log(p)
// console.log(r)


var x = "Mazen"
var y = 30

// console.log(x + y)
// console.log(x / y)

// ++ increment

var t = 20
// console.log(t++) // 20
// console.log(t) // 21 
// console.log(++t) // 22

// // -- Decrement
// console.log(t--) // 22
// console.log(t) // 21 
// console.log(--t) // 20

// var k = 10
// k = k + 5
// console.log(k) // 15
// console.log(k-=10) // 5
// k = "sdfghjk"
// console.log(k)

var k = 5
var v = 20
var t = 5

// console.log(k > v)
// console.log(k <= t)

var name = "5"
var num = 5

// console.log(name == num) // value
// console.log(name === num) // value , type

// console.log(name != num) // value false
// console.log(name !== num) // value , type true

// typeof

// console.log(typeof(name))
// console.log(typeof num )

// // console.log(Name)
// console.log(typeof name == "String")

// ternary Operator ==> (condition) ? true : false


// var p = prompt("enter your name" , "Amr")
// console.log(p);
// (p == "Amr") ? console.log('welcome Amr ') : console.log('invalid user')


// var job = prompt('enter your Job')
// var job = "" // empty string (ok)
// var job = null //  (cancel)

// console.log(job);


// -- (name)
// empty string
// cancel ==> null

// console.log(job == "")
// console.log(job == null)

// && 
// console.log(job == "" &&  job== null && typeof job == "object")
// console.log(job == "" ||   job== null || typeof job == "xfghjk")


// falsy values
// var job = null;
// var job = 0;
// var job = -0;
// var job ;
// var job = "";
// var job = false ;
// // truthy values 
// var job = 20 ;
// var job = " ";
// var job = true;
// var job = "Developer" ;
// (!job) ? console.log('correct') : console.log('wrong')


// var job = "Developer"
// var result ;
// (job == "Developer") ? result = "correct" 

// if condition 
// if(condition){
//     true ..
// }
// else {
//     false 
// }

// if(job == "Developer") {
//     result = "correct"
//     console.log(result)
// }
// else {
//     result = "wrong"
//     console.log(result)
// }


// developer , engineer

// var job = prompt('enter your job')

// if(job == "developer" || job == "enginner") console.log('valid user')
//     else console.log('invalid User')


// if (job == "developer") console.log(`welcome developer`)
// else if (job == "engineer") console.log(`welcome engineer`)
// else if (job == "Accountant") console.log('welcome Accountant')
// else console.log('invalid');


// var result = (job == "developer") ? "correct" : "wrong";

// var result 
// if(job == "developer") result = 'correct'
// else result = 'wrong'

// if(job == ""  || job == null) console.log('enter a job')
//     else{
//         if(job == "developer") console.log('dev')
//         else if(job == "accountant") console.log('accountant')
//     }



// switch(variable){
//     case 1: code 
//     case 2: code 
//     case 3: code 
//     case 4: code 
//     default : code
// }


//  strict mode ===
// switch (job) {
//     case "dev":
//     case 'DEV':
//         console.log('developer')
//         break
//     case 'eng':
//         console.log('engineer')
//         break
//     case 'doc':
//         console.log('doctor')
//         break
//     case "50": 
//      console.log('number')
//         break
        
//     default: console.log('invalid user')
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)


// for(variable ; condition ; increment/decrement){
//     code 
// }


for(var i = 1 ; i <= 10 ; i++ ){
    if(i == 3) continue
    else if (i == 8) break
    console.log(i)
}



