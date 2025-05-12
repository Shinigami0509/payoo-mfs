document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault()
    const cashOutInput = document.getElementById('input-cash-out').value
    const cashOutPin = document.getElementById('cash-out-pin').value
    if (cashOutPin === '123') {
        const availableBalance = document.getElementById('available-balance').innerText
        console.log(cashOutInput, cashOutPin, availableBalance)
        const updatedBalance = parseFloat(availableBalance) - parseFloat(cashOutInput)
        console.log(updatedBalance)
        document.getElementById('available-balance').innerText = updatedBalance
    }
    else{
        alert('Failed to Cash Out')
    }
})