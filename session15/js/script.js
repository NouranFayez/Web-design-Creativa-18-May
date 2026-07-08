

let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category = 'category1']")
    let category2 = document.querySelectorAll("[data-category= 'category2']")
    let divs = document.querySelectorAll("[data-category]")
    console.log(category1)
    console.log(category2)
    // for (let i = 0; i < divs.length; i++) {
    //     divs[i].classList.add('d-none')
    // }

    if (type == 'category1') {
        for (let i = 0; i < category1.length; i++) {
            // category1[i].classList.add('d-block')
            category1[i].classList.add('d-block')
            category2[i].classList.add('d-none')
        }
    }
    else {
        for (let i = 0; i < category2.length; i++) {
            category1[i].classList.remove('d-none')
            category2[i].classList.add('d-block')
        }
    }
}

