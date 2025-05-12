// console.log('button clicking file added')
//form submit reloading the page
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault() //prevent default behavior
    const phoneNumber = document.getElementById('phone-number').value
    console.log(phoneNumber)
})