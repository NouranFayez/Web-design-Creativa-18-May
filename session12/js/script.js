
// var let const 

var firstName = "Sara"
var firstName = "zein"

firstName = "Ahmed"

let lastName = "Ahmed"
 lastName = "Mohamed"

 const familyName = "Mohamed"
//   familyName = 20



// console.log(firstName)
// console.log(lastName)
// console.log(familyName)


// var ==> function & global Scope
// let , const ==> block scope


// let test = "dfghjk"

// function testFun (){
//     console.log(test)
//     if(true){
//         var x = "test"
//         let y = "test"

//     }
//     console.log(x)
//     console.log(y)

// }
// testFun()




let obj = {
    name : "Sara",
    age : 20
}
// console.log(obj.name)
// console.log(obj['age'])

for(let item in obj){
    // console.log(obj[item])
}


function test(name , age){
    return {
        name  ,
        age 
    }
}

let newObj = test("zein" , 50)

// destructuring
// let name = newObj.name
// let age = newObj.age
// let {name , age} = newObj

// console.log(name)
// console.log(age)


// console.log(newObj)

// spread operator
let userData = {
    address : "October",
    ...newObj
}

// console.log(userData)



//// string Methods 

let str = "     Lorem ipsum dolor, sit Lorem consectetur adipisicing elit    "

// console.log(str.length)
// console.log(str.includes('ipsum'))
// console.log(str.replace("Lorem" , "Html"))
// console.log(str.replaceAll("Lorem" , "Html"))
// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str.trim()[0])

// let newStr = str.trim()
// console.log(newStr.slice(0 , 10))

let testStr = "Html , Css , Js"
let testStr2 = "Html Css Js"

// console.log(testStr.split(","))
// console.log(testStr2.split(" "))

// console.log(testStr.indexOf("Css"))

/// Number Methods 

// let p = prompt("number")

// let x = "50.45fghj"
// console.log(p)
// console.log(Number(x))
// console.log(parseInt(x))
// console.log(parseFloat(x))

// var y = 20
// var y = true
// var y = "345sdfgh"

// console.log(isNaN(y))


/// Date Methods 

let date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getDay()) // 0 - 6
console.log(date.getMonth()) // 0 - 11
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


let days = ['SunDay' , 'Monday' , "tuesday" , "wednesday"]
console.log(days[date.getDay()])

// console.log(date.toLocaleDateString("en-US" , {
//     weekday : "short",
//     month:"long",
//     year:"2-digit"
// }))
// console.log(date.toLocaleDateString("ar-EG" , {
//     weekday : "short",
//     month:"long",
//     year:"2-digit"
// }))


// date.setFullYear(2020)
// console.log(date)

// console.log(new Date())

/// Math Functions 

console.log(Math.random()*100)

console.log(Math.round(3.6))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.abs(-40))
console.log(Math.max(20 , 0 , 100))
console.log(Math.min(20 , 0 , 100 , -2))

console.log(Math.round(Math.random()*100))



