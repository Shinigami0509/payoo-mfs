//add money to the account

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()
   
    const addMoneyInput = document.getElementById('input-add-money').value
    const pinInput = document.getElementById('input-pin').value
    const availableBalance = document.getElementById('available-balance').value
    console.log(addMoneyInput, pinInput, availableBalance)
    if(pinInput === '123'){

    }
    
})