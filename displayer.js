// import keypress from 'keypress';
import Game from "./engine/game.js";
// keypress(process.stdin);




/**
 * The code in this file is used to run your game in the console. Use it
 * to help develop your game engine.
 *
 */

var game;

export const showme = function() {
    
    game = new Game(4);
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    $root.empty();
    let guck = '<table id = "board">'
    for(let a = 0; a < game.grid.length; a += game.size){
       guck += '<tr>';
       for(let i = a; i < a+game.size; i++){
           guck += `<th><h1>${game.grid[i]}<h1></th>`
       }
       guck += '</tr>';
    }
    guck += '</table>';
    $root.append(guck);
    $root.append(`<div id = "qack"><h1>Score: ${game.score}</h1></div>`);

    $root.append(`<div id = "tooth" style = "color: gray">
              <button class = "newGame" type = "button" > New Game </button>

          </div>`)

    
    const $tooth = $('#tooth');
    $tooth.on('click', ".newGame", myNewgame);
    


};

let presskey = function(e) {
        e = e || window.event;

        if(e.which == "39") {
        game.move("right")

        change();
        }
        else if(e.which == "37") {
        game.move("left");
        change();
        }
        else if(e.which == "38") {
        game.move("up");
        change();
        }
        else if(e.which == "40") {
        game.move("down");
        change();
        }
}

document.onkeydown = presskey;

export const change = function() {
    
    const $root = $('#root');
    $root.empty();
    let guck = '<table id = "board">'
    for(let a = 0; a < game.grid.length; a += game.size){
       guck += '<tr>';
       for(let i = a; i < a+game.size; i++){
           guck += `<th><h1>${game.grid[i]}<h1></th>`
       }
       guck += '</tr>';
    }
    guck += '</table>';
    $root.append(guck);
    $root.append(`<div id = "qack"><h1>Score: ${game.score}</h1></div>`);

    if(game.over == true && game.won == false){
        $root.append(`<div id = "mess"><h1>You Lose!</h1></div>`);
    }
    if(game.won == true){
        $root.append(`<div id = "mess"><h1>You Win!</h1></div>`);
    }

    $root.append(`<div id = "tooth" style = "color: gray">
              <button class = "newGame" type = "button" > New Game </button>

          </div>`)


          
          
    const $tooth = $('#tooth');
        $tooth.on('click', ".newGame", myNewgame);
        

};

export const myNewgame = function(){
    showme();
}

 export const loadgameintodom = function(){
     const $root = $('#root');
     
     $root.append(showme());
 }


$(function() {
    loadgameintodom();
});