let t = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let game =  document.getElementById('game');
for (let i = 0; i < 9; i++) {
     game.innerHTML += '<div class = "cell"></div>';
 }     
let allcells = document.getElementsByClassName('cell');
for(i = 0; i < allcells.length; i++) {
    allcells[i].index = i;
    allcells[i].addEventListener('click', function(event) {
    allcells[event.target.index].innerHTML = 'x';
    delete t[(t.indexOf(event.target.index))];
    function compareRandom(a, b) {
    return Math.random() - 0.5;
    }
    t.sort(compareRandom);
    allcells[t[0]].innerHTML = 'o';
    checkWin();
    t.shift();     
    });      
}
function checkWin() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]   
    ];    
    for (let i = 0; i < winningCombinations.length; i++) {
        let wc = winningCombinations[i];
        if (allcells[wc[0]].innerHTML == allcells[wc[1]].innerHTML && allcells[wc[1]].innerHTML == allcells[wc[2]].innerHTML && allcells[wc[0]].innerHTML != '') {
            alert( allcells[wc[0]].innerHTML + ' WON!');
        }
    }
} 
 