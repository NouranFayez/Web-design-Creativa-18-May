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


let btn = document.getElementsByTagName('button')
console.log(btn)


let imageChange = ()=>{
    console.log('sdfghjk')
    let img = document.getElementById('myImg')
    console.log(img.src)
    img.src = "image/2.jpg"
    // file:///C:/Users/Nouran%20Ahmed/Desktop/Web-design-Creativa-18-may/session13/image/1.jpg
}

