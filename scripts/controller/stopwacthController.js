class StopwatchController{

    constructor(){

        this._hr = 0;
        this._mm = 0;
        this._ss = 0;
        this._spaceTimer = 1000;
        this._stopWacth;
        this._format;
        this._display = document.querySelector("#number");
        this._btnStart = document.querySelector("#btnStart");
        this._btnStop = document.querySelector("#btnStop");
        this._btnReset = document.querySelector("#btnRestart");


        this.incicialization();
        


    }

    incicialization(){

    
        this.timerStart();
        this.timerStop();
        this.timerReset();


        


    }


    timerStart(){
        
        this._btnStart.addEventListener('click', ()=>{

            this._stopWacth = setInterval(()=>{

                this.timer();

            }, this._spaceTimer);

        });


    }

    timerStop(){
        
        this._btnStop.addEventListener('click', ()=>{

            clearInterval(this._stopWacth);

            
        });


    }

    timerReset(){
        
        this._btnReset.addEventListener('click', ()=>{

            clearInterval(this._stopWacth);

            this._hr = 0;
            this._mm = 0;
            this._ss = 0;

            this._display.innerHTML = "00:00:00";


        });


    }


    
    timer(){

        this._ss++;

        if(this._ss == 60){

            this._ss = 0;
            this._mm++;

            if(this._mm == 60){

                this._mm = 0;
                this._hr++;

            }

        }

        this._format = (this._hr < 10 ? "0" + this._hr : this._hr) + ":" + (this._mm < 10 ? "0" + this._mm : this._mm) + ":" + (this._ss < 10 ? "0" + this._ss : this._ss);
        this._display.innerHTML = this._format;


    }


}