// console.log('button clicking file added')
//form submit reloading the page
// document.getElementById('btn-login').addEventListener('click', function (event) {
//     event.preventDefault() //prevent default behavior
//     const phoneNumber = document.getElementById('phone-number').value
//     const pinNumber = document.getElementById('pin').value
//     console.log(phoneNumber, pinNumber)

//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('You are logged in')
//     }
//     else {
//         alert('Wrong Phone number or Pin Number')
//     }

// })

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber  = document.getElementById('phone-number').value
    console.log(phoneNumber)
    const pinNumber = document.getElementById('pin').value
    console.log(pinNumber)
    if(phoneNumber === '018' && pinNumber === '123'){
        console.log('You are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('Phone Number or Pin is Wrong')
    }
})