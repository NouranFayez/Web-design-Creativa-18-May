

let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category = 'category1']")
    let category2 = document.querySelectorAll("[data-category= 'category2']")
    let divs = document.querySelectorAll("[data-category]")
    console.log(category1)
    console.log(category2)
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('d-none')
    }

    if (type == 'category1') {
        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.add('d-block')
            category1[i].classList.remove('d-none')
        }
    }
    else {
        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.add('d-block')
            category2[i].classList.remove('d-none')
        }
    }
}



// let arr = [2 ,3, 4, 5, 10]

// arr.forEach((ele , i , arr)=>{

// })




let myFunc = (val , callBack)=>{
    setTimeout(()=>{
        if(typeof val == "number")
            callBack(val*2 , true)
        else callBack('invalid number' , false)
    }, 2000)
}

// myFunc("test" , (res , flag)=>{
//     console.log(res)
//     console.log(flag)
// })


// let date = new Date()

// promise ==> pending  
            // fulfilled
            // reject

let myPromise = (val)=>{
    return new Promise((resolve , reject)=>{
        if(typeof val == "number")
            resolve(val*2 , true)
        else reject('invalid number' , false)
    })
}

// console.log(myPromise("sdfghjk"))

// then catch 
myPromise("dfghjkl").then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})


fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(json => console.log(json))
      .catch(err=>console.log(err))



//  callBack 
//  promise ==> then catch ||  async await


// advanced js
// typescript 
//  angular - react



