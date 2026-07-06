$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left text-white bg-dark"></i>',
            '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items:3
            },
            1200:{
                items: 5
            }
        }
    });
});


let setTime = setTimeout(()=>{
    // console.log('js')
} , 2000)

// console.log(`set time = ${setTime}`)


console.log('html')

if(document.getElementById('counter')){

    let counter = document.getElementById('counter')
    let i = 0
    let set = setInterval(()=>{
        if(i == 100) clearInterval(set)
        // console.log('Javascript')
        i++
        // console.log(i)
        counter.innerText = i
    
        
    } , 100)
}


if(document.getElementById('scroll-div')){
    let scrollDiv = document.getElementById('scroll-div')
    scrollDiv.addEventListener('scroll' , ()=>{
        // console.log('scrolling')
        console.log(scrollDiv.scrollTop)
        if(scrollDiv.scrollTop > 200) scrollDiv.classList.add("border" , "border-primary" , "border-4")
    })

}

// window.document

// DOM ==> document Object Model
// BOM => Browser Object Model


window.addEventListener('scroll' , ()=>{
    // console.log('scrolling')
    if(document.documentElement.scrollTop > 300) console.log('Html')
})



    // <!-- name ==> 3 character -->
    //  <!-- email ==> valid email -->
    //   password ==> lowercase letter , uppercase letter , number , special character (@#$%^&*)

    let nameValidation = (input)=>{
        let inputValue = input.value
        console.log(inputValue.length)
        if(inputValue.length < 3){
            handleError(input , "at least 3 character")
            
        }
        else  handleError(input)
    }
    let emailValidation = (input)=>{
        // nouran_ahmed269@hotmail.com
        let inputValue = input.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        (emailRegex.test(inputValue)) ? handleError(input)
            : handleError(input , "please a valid email")

    }
    let passwordValidation = ()=>{

    }
    let handleError = (ele , msg = "")=>{
        ele.nextElementSibling.innerText = msg
    }

  let userForm = document.getElementById('userForm')  
  userForm.addEventListener('input' , (e)=>{
    // console.log('typing')
    // console.log(e)
    // console.log(e.target.id)
    if(e.target.id == "UserName") nameValidation(e.target)
        else if (e.target.id == "userEmail") emailValidation(e.target)
        else if (e.target.id == "userPassword") passwordValidation()
  })


  
