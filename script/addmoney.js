document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault()
    const addMoney = document.getElementById('amount-number').value;
    const convertedAddMoney = parseFloat(addMoney);

    const mainBalance = document.getElementById('main-balance').innerText
    const convertedMainBalance = parseFloat(mainBalance);

    const pinNumber =document.getElementById('pin').value
    const convertedPin = parseInt(pinNumber);

    const accountNumber = document.getElementById('account-number').value;
    // const convertedaccountNumber = parseInt(accountNumber);

    if(accountNumber.length === 11){
        if( convertedPin === 1234){
            const newBalance = convertedAddMoney + convertedMainBalance;
            document.getElementById('main-balance').innerText = newBalance;
        }
        else{
            alert('enter your valid pin')
        }
    }
    else{
        alert('Plese enter your valid account number')
    }
})