/// DOM ==> Document object model

// let h1Elements = document.getElementsByTagName("h1") // HTmlCollection ==> special object

// console.log(h1Elements)

// h1Elements.test = "test text"


// let elementClass = document.getElementsByClassName('text-success')
// console.log(elementClass)

// elementClass.innerText = "dfghiop"


// for (let i = 0; i < elementClass.length; i++) {
//     elementClass[i].innerText = "Javscript JS"
// }
// elementClass.forEach((ele)=>{
//     console.log(ele)
// })

// let h1 = document.getElementById('h1_id')

// console.log(h1.id)

// h1.innerText = "JAvascript"


// let element = document.querySelector('h1 .text-success')
// let elements = document.querySelectorAll('h1 .text-success') // return nodeList 

// elements.test = "JS"
// elements.forEach((ele)=>{
//     console.log(ele)
// })


// console.log(elements)



// let h1 = document.getElementById('h1_id')

// // h1.style.color = "red"
// // h1.style.backgroundColor = "lightgray"

// // h1.className = "card border"

// h1.classList.add('card' , "text-success")

// h1.classList.remove('border')

// h1.classList.toggle('margin')


///////////// Events
// https://www.w3schools.com/tags/ref_eventattributes.asp


// let btn = document.getElementsByTagName('button')
// console.log(btn)


// let imageChange = () => {
//     console.log('sdfghjk')
//     let img = document.getElementById('myImg')
//     console.log(img.src)
//         // img.src = "image/2.jpg"
//         (img.src.endsWith('1.jpg')) ?
//         img.src = "image/2.jpg" :
//         img.src = "image/1.jpg"


//     // file:///C:/Users/Nouran%20Ahmed/Desktop/Web-design-Creativa-18-may/session13/image/1.jpg
// }


/// all events ==> https://www.w3schools.com/jsref/dom_obj_event.asp


let mouseEnter = () => {
    let div = document.getElementById('div-element')
    div.style.background = "lightgray"
}

// let mouseLeave  = ()=>{
//    let div = document.getElementById('div-element')
// div.style.background = "teal" 
// }

// let handleMouseEvent = (type , element)=>{
//     console.log(element)

// // let div = document.getElementById('div-element')
// if(type == 'enter') element.style.background = "lightgray"
// else element.style.background = "teal"
// }


let input = document.getElementById('userName')
let users = []

input.addEventListener("input", (e) => {
    // console.log('typing')
    // console.log(input.nextElementSibling)
    // console.log(input.value)
    input.nextElementSibling.innerText = input.value
    console.log(e)


    // let user = {
    //     name : e.target.elements.userName.value,
    //     email : e.target.elements.userEmail.value,
    // }



})

let myForm = document.getElementById('myForm')
let divContainer = document.getElementById('divContainer')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submitting')
    console.log(e)
    let user = {
        name: e.target[0].value,
        email: e.target[1].value,
    }
    users.push(user)

    console.table(users)

    showUser()

})


let showUser = () => {
    divContainer.innerText = ""

    users.forEach((item , i) => {

        let div = document.createElement('div')
        div.classList.add('border')
        let h2 = document.createElement('h2')
        h2.innerText = item.name
        console.log(h2)
        let h3 = document.createElement('h3')
        h3.innerText = item.email
        console.log(h3)
        let btn = document.createElement('button')
        btn.innerText = "Delete user"
        btn.addEventListener("click" , function(){
        deleteUser(i)   
        })
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(btn)
        console.log(div)
        divContainer.appendChild(div)
    })

}

let deleteUser = (ind)=>{
    users.splice(ind , 1)
    showUser()
}



