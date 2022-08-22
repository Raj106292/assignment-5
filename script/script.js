function getPlayersNameById(inputId) {
    const player = document.getElementById(inputId);
    const playerName = player.innerText;

    return playerName;
}

function selectedPlayerList(inputId, value) {
    const playersList = document.getElementById(inputId);
    const li = document.createElement('li');
    li.innerText = value;

    const allli = document.querySelectorAll('li');

    if (allli.length < 5) {
        playersList.appendChild(li);
    }
    else {
        alert("you can't select more than 5 players");
    }
}

function getValueofInputField(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputAmount = parseFloat(inputString);
    
    if(isNaN(inputString) === true){
        input.value = '';
        return;
    }

    return inputAmount;
}

function setValuetoInputField(inputID, value) {
    const inputField = document.getElementById(inputID);
    inputField.value = value;
}

document.getElementById('select-messi').addEventListener('click', function () {
    const messi = getPlayersNameById('messi');
    console.log(messi);
    selectedPlayerList('players-container', messi);
    document.getElementById('select-messi').setAttribute('disabled', true);
})
document.getElementById('select-neymar').addEventListener('click', function () {
    const neymar = getPlayersNameById('neymar');
    console.log(neymar);
    selectedPlayerList('players-container', neymar);
    document.getElementById('select-neymar').setAttribute('disabled', true);
})
document.getElementById('select-mbappe').addEventListener('click', function () {
    const mbappe = getPlayersNameById('mbappe');
    console.log(mbappe);
    selectedPlayerList('players-container', mbappe);
    document.getElementById('select-mbappe').setAttribute('disabled', true);
})
document.getElementById('select-navas').addEventListener('click', function () {
    const navas = getPlayersNameById('navas');
    console.log(navas);
    selectedPlayerList('players-container', navas);
    document.getElementById('select-navas').setAttribute('disabled', true);
})
document.getElementById('select-julian').addEventListener('click', function () {
    const julian = getPlayersNameById('julian');
    console.log(julian);
    selectedPlayerList('players-container', julian);
    document.getElementById('select-julian').setAttribute('disabled', true);
})
document.getElementById('select-marco').addEventListener('click', function () {
    const marco = getPlayersNameById('marco');
    console.log(marco);
    selectedPlayerList('players-container', marco);
    document.getElementById('select-marco').setAttribute('disabled', true);
})
document.getElementById('select-ramos').addEventListener('click', function () {
    const ramos = getPlayersNameById('ramos');
    console.log(ramos);
    selectedPlayerList('players-container', ramos);
    document.getElementById('select-ramos').setAttribute('disabled', true);
})
document.getElementById('select-marq').addEventListener('click', function () {
    const marq = getPlayersNameById('marq');
    console.log(marq);
    selectedPlayerList('players-container', marq);
    document.getElementById('select-marq').setAttribute('disabled', true);
})

document.getElementById('calculate').addEventListener('click', function () {
    const allList = document.querySelectorAll('li');
    const listLength = allList.length;
    const listLengthAmount = parseFloat(listLength);
    console.log(listLengthAmount);

    const perHeadCost = getValueofInputField('per-player-cost');
    console.log(perHeadCost);

    if (listLengthAmount === 0 || isNaN(perHeadCost) === true) {
        alert('Please select minimum one player or enter correct amount');
        return;
    }
    else {
        const expenses = listLengthAmount * perHeadCost;
        console.log(expenses);

        const playersCost = document.getElementById('cost-for-players');
        playersCost.innerText = expenses;
    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const expenses = document.getElementById('cost-for-players');
    const expensesString = expenses.innerText;
    const expensesAmount = parseFloat(expensesString);
    if(isNaN(expensesAmount) === true){
        alert('Check the selected player list or player per cost');
        return;
    }

    const manager = document.getElementById('manager-cost');
    const managerString = manager.value;
    const managerAmount = parseFloat(managerString);
    if(isNaN(managerAmount) === true){
        alert('Please enter proper amount in Manager field')
        manager.value = '';
        return ;
    }

    const coach = document.getElementById('coach-cost');
    const coachString = coach.value;
    const coachAmount = parseFloat(coachString);
    if(isNaN(coachAmount) === true){
        alert('Please enter proper amount in Coach field')
        coach.value = '';
        return ;
    }

    const totalAmount = expensesAmount + managerAmount + coachAmount;

    const totalCost = document.getElementById('total-cost');
    totalCost.value = totalAmount;
})