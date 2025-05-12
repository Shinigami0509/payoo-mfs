//add money to the account

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault()

    const addMoneyInput = document.getElementById('input-add-money').value
    const pinInput = document.getElementById('input-pin').value

    if (pinInput === '123') {
        const availableBalance = document.getElementById('available-balance').innerText
        console.log('adding money to your account')
        const newBalance = parseFloat(availableBalance) + parseFloat(addMoneyInput);
        console.log(newBalance)
        document.getElementById('available-balance').innerText = newBalance
    }
    else {
        alert('Failed to add money')
    }

})