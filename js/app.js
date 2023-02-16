console.log('Connected');
// Utilities

function getId(id) {
  return  document.getElementById(id);
}
function getInputNumValue(id) {
    const input = getId(id);
    const inputValue = input.value;
    const numValue = parseFloat(inputValue)
    return numValue;
}

function totalCost() {
    const travelCost = getInputNumValue('travel-cost');
    const foodCost = getInputNumValue('food-cost');
    const extraCost = getInputNumValue('extra-cost');
    const totalCost = travelCost + foodCost + extraCost;
    return totalCost;
}
function balance1() {
    const income = getInputNumValue('income');
    const total = totalCost()

    const balance = income - total;
    return balance;
}


getId('calculate-btn').addEventListener('click', function () {
    const total = totalCost();
    const balance = balance1();
    if (balance >= 0) {
        getId('total-cost').innerText = total;
        getId('balance').innerText = balance;
    }
    else {
        alert('Please Cut your coat according to your cloth')
    }
})

getId('save-btn').addEventListener('click', function ()
{
    const income = getInputNumValue('income');
    const save = getInputNumValue('save');
    const balance = balance1();
    const savingAmount = income * (save / 100);
    if (balance >= savingAmount) {
    getId('saving-amount').innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    getId('ramaining-balance').innerText = remainingBalance;
    }
    else {
        alert('Please Cut your coat according to your cloth')

    }

})