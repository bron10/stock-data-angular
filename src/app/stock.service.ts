import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as socketIo from 'socket.io-client';

@Injectable()
export class StockService{
    public globalData;
    //private stockCount = 0;
    private stockLoopLength;
    private emitChangeSource = new Subject();
    constructor(private httpService : HttpClient){}
    
    resetStockLoop(){
        this.stockLoopLength = 10;
    }

    listenToStock(){
        return this.emitChangeSource.asObservable();
    }

    getDummyDatum(){
        let self = this;

        setInterval(()=>{
            if(!self.stockLoopLength || self.stockLoopLength==0){
                self.resetStockLoop();
            }

            let dataToRespond :any[];
            dataToRespond= [];

            let halflength = self.calculateHalf(self.stockLoopLength);
            //console.log("halflength", halflength);
            for (let i = self.stockLoopLength; i >= 0; i--) {
                
                //Dummy next new price
                let newPrice = Math.floor((Math.random() * 100) + 1);
                let newName = `stock-no-${i}`;

                //console.log("halflength < i", halflength < i)
                //Dummy low price
                if(halflength < i){
                    newPrice = newPrice - Math.floor((Math.random() * 100) + 1);;
                }else{
                  newPrice = newPrice*2;  
                }

                dataToRespond.push([newName, newPrice]);
            }
            self.stockLoopLength--;
            
            /**
             * [next Emit new dataset as exprected format]
             */
            self.emitChangeSource.next(dataToRespond)
        }, 3000)
    }

    calculateHalf(data){
        return Math.ceil(data/2)
    }


    getStockdatum(data){
        return this.httpService.get(`ws://stocks.mnet.website`)
    }
}



   