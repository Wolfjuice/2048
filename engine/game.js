export default class Game {
    constructor(size) {
      this.size = size;  
      this.grid = makegrid(size);
      this.score = 0;
      this.won = false;
      this.over = false;
      this.callBacksOnMove = [];
      this.callBacksOnWin = [];
      this.callBacksOnLose = [];
    }

    setupNewGame = function(){ 
      this.grid = makegrid(this.size);
      this.score = 0;
      this.won = false;
      this.over = false;
      this.callBacksOnMove = [];
      this.callBacksOnWin = [];
      this.callBacksOnLose = [];
    }
    loadGame = function(gameState){
        this.size = Math.sqrt(gameState.board.length);
        this.grid = gameState.board;
        this.score = gameState.score;
        this.won = gameState.won;
        this.over = gameState.over;
        
    }

    getGameState = function(){
        let gameState = {
            board: this.grid,
            score: this.score,
            won: this.won,
            over: this.over
        }
        return gameState;
    }
    toString = function(){
        return JSON.stringify(this.getGameState());
    }
    move = function(direction){

        let bosq = false;
        if(direction == 'right'){
            for(let i = 0; i < this.grid.length; i += this.size){
                for(let j = i + this.size-1; j > i; j--){
                    if(this.grid[j] == 0){
                        for(let k = j-1; k >= i; k--){
                            if(this.grid[k] != 0){
                                this.grid[j] = this.grid[k];
                                this.grid[k] = 0; 
                                break;
                            }
                        }
                    }
                }
            }
            
            for(let i = 0; i < this.grid.length; i += this.size){
                for(let j = i + this.size-1; j > i; j--){
                    if(this.grid[j] == this.grid[j-1] && this.grid[j] != 0){
                        this.grid[j] = this.grid[j] + this.grid[j-1];
                        this.score += this.grid[j];
                        for(let k = j-1; k >= i; k--){
                            if(k == i){
                                this.grid[k] = 0;
                            } else{
                                this.grid[k] = this.grid[k - 1]
                            }
                            
                            
                        }
                    }
                }
            }
            

            // this.callBacksOnWin.forEach(moveCallBacks => {
            //     moveCallBacks(this.getGameState());
            // })
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            if(bosq == true){
                let newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                while(this.grid[newdex] != 0){
                    newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                }
                let c = Math.floor(Math.random() * Math.floor(10));
                if(c < 9){
                    this.grid[newdex] = 2;
                } else{
                    this.grid[newdex] = 4;
                }
            }
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            this.callBacksOnMove.forEach(moveCallBacks => {
                moveCallBacks(this.getGameState());
            })
        }
        else if(direction == 'left'){
            for(let i = 0; i < this.grid.length; i += this.size){
                for(let j = i; j < i + this.size-1; j++){
                    if(this.grid[j] == 0){
                        for(let k = j + 1; k <= i + this.size - 1; k++){
                            if(this.grid[k] != 0){
                                this.grid[j] = this.grid[k];
                                this.grid[k] = 0; 
                                break;
                            }
                        }
                    }
                }
            }
            
            for(let i = 0; i < this.grid.length; i += this.size){
                for(let j = i; j < i + this.size-1; j++){
                    if(this.grid[j] == this.grid[j+1] && this.grid[j] != 0){
                        this.grid[j] = this.grid[j] + this.grid[j+1];
                        this.score += this.grid[j];
                        for(let k = j + 1; k <= i + this.size - 1; k++){
                            if(k == i + this.size - 1){
                                this.grid[k] = 0;
                            } else{
                                this.grid[k] = this.grid[k + 1]
                            }
                        }
                    }
                }
            }
            
            // this.callBacksOnWin.forEach(moveCallBacks => {
            //     moveCallBacks(this.getGameState());
            // })
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            if(bosq == true){
                let newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                while(this.grid[newdex] != 0){
                    newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                }
                let c = Math.floor(Math.random() * Math.floor(10));
                if(c < 9){
                    this.grid[newdex] = 2;
                } else{
                    this.grid[newdex] = 4;
                }
            }   
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            this.callBacksOnMove.forEach(moveCallBacks => {
                moveCallBacks(this.getGameState());
            })
        } 
        else if (direction == 'up'){
            for(let i = 0; i < this.size; i++){
                for(let j = i; j < this.grid.length - this.size; j+= this.size){
                    if(this.grid[j] == 0){
                        for(let k = j+this.size; k < this.grid.length; k+= this.size){
                            if(this.grid[k] != 0){
                                this.grid[j] = this.grid[k];
                                this.grid[k] = 0; 
                                break;
                            }
                        }
                    }
                }
            }
            
            for(let i = 0; i < this.size; i++){
                for(let j = i; j < this.grid.length - this.size; j+= this.size){
                    if(this.grid[j] == this.grid[j + this.size] && this.grid[j] != 0){
                        this.grid[j] = this.grid[j] + this.grid[j + this.size];
                        this.score += this.grid[j];
                        for(let k = j+this.size; k < this.grid.length; k+= this.size){
                            if(k >= this.grid.length - this.size){
                                this.grid[k] = 0;
                            } else{
                                this.grid[k] = this.grid[k + this.size];
                            }
                        }
                    }
                }
            }
            
            // this.callBacksOnWin.forEach(moveCallBacks => {
            //     moveCallBacks(this.getGameState());
            // })
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            if(bosq == true){
                let newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                while(this.grid[newdex] != 0){
                    newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                }
                let c = Math.floor(Math.random() * Math.floor(10));
                if(c < 9){
                    this.grid[newdex] = 2;
                } else{
                    this.grid[newdex] = 4;
                }
            }
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            this.callBacksOnMove.forEach(moveCallBacks => {
                moveCallBacks(this.getGameState());
            })
        }
        else if (direction == 'down'){
            for(let i = 0; i < this.size; i++){
                for(let j = i + this.size*(this.size-1); j > i; j-= this.size){
                    if(this.grid[j] == 0){
                        for(let k = j-this.size; k >= i; k-= this.size){
                            if(this.grid[k] != 0){
                                this.grid[j] = this.grid[k];
                                this.grid[k] = 0; 
                                break;
                            }
                        }
                    }
                }
            }
            
            for(let i = 0; i < this.size; i++){
                for(let j = i + this.size*(this.size-1); j > i; j-= this.size){
                    if(this.grid[j] == this.grid[j-this.size] && this.grid[j] != 0){
                        this.grid[j] = this.grid[j]+this.grid[j-this.size]
                        this.score += this.grid[j]
                        for(let k = j-this.size; k >= i; k-= this.size){
                            if(k == i){
                                this.grid[k] = 0;
                            } 
                            else{
                                this.grid[k] = this.grid[k - this.size] 
                            }
                        }
                    }
                }
            }

            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }

            if(bosq == true){
                let newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                while(this.grid[newdex] != 0){
                    newdex = Math.floor(Math.random() * Math.floor(this.size**2));
                }
                let c = Math.floor(Math.random() * Math.floor(10));
                if(c < 9){
                    this.grid[newdex] = 2;
                } else{
                    this.grid[newdex] = 4;
                }
            }
            // this.callBacksOnWin.forEach(moveCallBacks => {
            //     moveCallBacks(this.getGameState());
            // })
            bosq = false;
            for(let gup = 0; gup < this.grid.length; gup++){
                if(this.grid[gup] == 0){
                    bosq = true;
                    break;
                }
            }
            this.callBacksOnMove.forEach(moveCallBacks => {
                moveCallBacks(this.getGameState());
            })
        }
       
        
        
        for(let gup = 0; gup < this.grid.length; gup++){
            if(this.grid[gup] >= 2048){
                this.won = true;

                this.callBacksOnWin.forEach(moveCallBacks => {
                 moveCallBacks(this.getGameState());})

                break;
            }
        }

        
        
        if(bosq == false){
            let ggc = false; 
            for(let i = 0; i < this.grid.length; i += this.size){
                for(let j = i; j < i + this.size-1; j++){
                    if(this.grid[j] == this.grid[j+1]){
                        ggc = true;
                        break;
                    }
                }   
            }
            for(let i = 0; i < this.size; i++){
                for(let j = i; j < this.grid.length - this.size; j+= this.size){
                    if(this.grid[j] == this.grid[j + this.size]){
                        ggc = true;
                        break;
                    }

                }
            }

            if(ggc == false){
                this.over = true;
            
                 this.callBacksOnLose.forEach(moveCallBacks => {
                    moveCallBacks(this.getGameState());})
                    console.log(this.toString());
            }
            
        }
    }

    onMove = function(callback) {
        this.callBacksOnMove.push(callback);
    }

    onWin = function(callback) {
        this.callBacksOnWin.push(callback);
    }
    onLose = function(callback) {
        this.callBacksOnLose.push(callback);
    }
    


}

let makegrid = function(size){
    let grid = [];
    let a = Math.floor(Math.random() * Math.floor(size**2));
    let b = Math.floor(Math.random() * Math.floor(size**2));
    while(a == b){
        b = Math.floor(Math.random() * Math.floor(size**2));
    }
    for(let i = 0; i < size**2; i++){
        grid[i] = 0; 
    }
    let c = Math.floor(Math.random() * Math.floor(10));
    if(c < 9){
        grid[a] = 2;
    }else{
        grid[a] = 4;
    }
    c = Math.floor(Math.random() * Math.floor(10));
    if(c < 9){
        grid[b] = 2;
    }else{
        grid[b] = 4;
    }
    return grid;
}

//export default Game;