import {EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class heartBeat{
    public timeInit:number =0;
    constructor(public pulse: number = 0 ){
        this.timerStart();

    }

    timerStart(){
        var date = new Date();
        this.timeInit = date.getTime();
        
    }
    
    timeTick(){
        this.pulse++;
        console.log(this.getPulse());
    }

    getPulse(){
        return this.pulse;
    }

    setPulse(pulse:number){
        this.pulse = pulse;
    }

    resetPulse(){
        this.pulse = 0;
    }


}