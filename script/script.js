function getPlayersNameById(inputId){
    const player = document.getElementById(inputId);
    const playerName = player.innerText;

    return playerName;
}

function selectedPlayerList(inputId, value){
    const playersList = document.getElementById(inputId);
    const li = document.createElement('li');
    li.innerText = value;

    const allli = document.querySelectorAll('li');

    if(allli.length < 5){
        playersList.appendChild(li);
    }
    else{
        alert("you can't select more than 5 players");
    }
}

document.getElementById('select-messi').addEventListener('click', function(){
    const messi = getPlayersNameById('messi');
    console.log(messi);
    selectedPlayerList('players-container', messi);
})
document.getElementById('select-neymar').addEventListener('click', function(){
    const neymar = getPlayersNameById('neymar');
    console.log(neymar);
    selectedPlayerList('players-container', neymar);
})
document.getElementById('select-mbappe').addEventListener('click', function(){
    const mbappe = getPlayersNameById('mbappe');
    console.log(mbappe);
    selectedPlayerList('players-container', mbappe);
})
document.getElementById('select-presnel').addEventListener('click', function(){
    const presnel = getPlayersNameById('presnel');
    console.log(presnel);
    selectedPlayerList('players-container', presnel);
})
document.getElementById('select-navas').addEventListener('click', function(){
    const navas = getPlayersNameById('navas');
    console.log(navas);
    selectedPlayerList('players-container', navas);
})
document.getElementById('select-julian').addEventListener('click', function(){
    const julian = getPlayersNameById('julian');
    console.log(julian);
    selectedPlayerList('players-container', julian);
})