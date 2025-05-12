document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()
    const addMoneyInput = document.getElementById('input-add-money').value
    const pinInput = document.getElementById('input-pin').value
    const availableBalance = document.getElementById('available-balance').innerText
    console.log(addMoneyInput, pinInput, availableBalance)
    if(pinInput === '123'){
        const newBalance = parseFloat(availableBalance) + parseFloat(addMoneyInput)
        console.log(newBalance)
        document.getElementById('available-balance').innerText = newBalance
    }

})