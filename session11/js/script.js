
// function sum(){
//     // console.log(10 + 20)

//     return 20 + 10
// }


// var s = sum()

// var result = sum() + 10

// console.log(result)

// var p = prompt()


// function sumNumbers(num1 , num2 , num3 = "50"){
//     console.log(num1)
//     return num1 + num2 + num3
// }

// var result1 = sumNumbers(200 , 100 )

// console.log(result1)


// function test(endNum){
//     for(var i = 1 ; i<=endNum ; i++){
//         console.log(i)
//     }
// }


// var p = prompt("start or not")


// if(p == "start"){
//     test(15)
// }



// var result 
// function getName(){
//     var firstName = prompt('enter first Name')
//     var lastName = prompt('enter last name')

//     result = `${firstName} ${lastName}`
// }


// getName()


// console.log(result)


// function statment
// function test(){
//     return "js"
// }

// var result = test()

// function expression 
// var result = function(){
//     return "Js"
// }

// console.log(result())


// arrow Function 
// var res = (num)=>{
//     return num > 30 && typeof num == "string"
// }

// var res = num => num > 30 && typeof num == "string"




// console.log(res(20))




// function looping (startNum , endNum , breakNum , contNum)


// looping(1 , 10 , 8 , 3)
// looping(1 , 10)



//////// Array 

// var firstName = "Nouran"
// var middleName = "Ahmed"
// var lastName = "Fayez"
// var isGraduated = true
// var Nationality = "Egyptian"
// var age = 32

// var userInfo = ["Nouran" , "Ahmed" , "Fayez" , true , "Egyptian" , 32 ]


// get item 
// console.log(userInfo[3])
// set item
// userInfo[6] = "Developer"

// console.log(userInfo.length)
// userInfo[userInfo.length] = "fgyuio"

// console.log(userInfo)

// console.log(userInfo[10])


//// Array Methods 

// var courses = ["html" , "css" , "Js"]

// courses.push("bootstrap" , true , 30)

// courses.pop()
// courses.pop()

// courses.shift()
// courses.unshift('Angular' , "Ts")

// // splice(index , deletedCount , item/s) ==> remove / add
// console.log(courses)
// courses.splice(2 , 2) // remove item/s
// courses.splice(1 , 0 , "Node" , "express")

// courses.splice(2 , 1 , "Mongo")

// console.log(courses)




// console.log(courses.includes('Node'))
// console.log(courses.includes('dfghjklkjhgfd'))
// console.log(courses.indexOf('Node'))



var courses = ['html', 'css', 'js', "Bootstrap", "TS", "Angular"]

// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])


// for(var i = 0 ; i < courses.length ; i++){
//     // console.log(courses[i])
// }

// courses.forEach((item , ind , array)=>{
//     // console.log(item)
//     // console.log(ind)
//     console.log(array)
// })



var ids = [10, 5, 4, 20]

ids.forEach((ele, i) => {
    // if(ele > 10) console.log(ele)
    if (ele > 10) console.log(i)
})


var element = ids.find((ele) => ele > 10)
var element = ids.find((ele) => ele > 5)
var element = ids.find((ele) => ele > 30) // undefined

var index = ids.findIndex(ele => ele > 10)
var index = ids.findIndex(ele => ele > 5)
var index = ids.findIndex(ele => ele > 30) // -1



// var newArray = ids.filter(ele => ele > 5) 
// var newArray = ids.filter(ele => ele > 30) // empty array

// map() ==> search

// console.log(newArray)



var userInfo = ["Nouran", "Ahmed", "Fayez", true, "Egyptian", 32, "Nasr city"]

var userBio = {
    firstName: "Nouran",
    lastName: "Fayez",
    address: "Nasr city",
    age: 32
}

// console.log(userBio.address)
userBio.isGraduated = true


userBio.address = "October"


// console.log(userBio)



// var userBio2 = {
//     firstName: "Zein",
//     lastName: "Fayez",
//     address: "Maadi",
//     age: 10
// }

// var userBio3 = {
//     firstName: "Marwa",
//     lastName: "Fayez",
//     address: "October",
//     age: 20
// }

// array of objects

// var users = [{
//     firstName: "Nouran",
//     lastName: "Fayez",
//     address: "Nasr city",
//     age: 32
// },
// {
//     firstName: "Zein",
//     lastName: "Fayez",
//     address: "Maadi",
//     age: 10
// },
// {
//     firstName: "Marwa",
//     lastName: "Fayez",
//     address: "October",
//     age: 20
// }
// ]


// users.forEach(ele =>{
//     console.log(ele)
// })

// var obj = users.find(ele => ele.age == 20)

// console.log(obj)

// console.log(userBio.address)
// console.log(userBio['address'])


var firstName = "zein"
var lastName = "tamer"

var user = {
    firstName : "Ahmed",
    lastName : "Mohamed",
    fullName : function(){
        console.log(this)
        return `${this.firstName} ${user.lastName}`
    },
    testFun : ()=>{
        console.log(this)
        return this.lastName
    },
    homeAddress:"Maadi",
    addressList :{
        homeAddress:"Nasr city",
        addressFun : function (){
            return this.homeAddress
        }
    }

}

console.log(user.fullName())
console.log(user.testFun())

console.log(user.addressList.addressFun())





