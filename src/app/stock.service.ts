import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';
import * as _ from "lodash";

@Injectable()
export class StockService{
    public globalData;
    //private stockCount = 0;
    private stockLoopLength;
    private emitChangeSource = new Subject();
    private url = 'ws://stocks.mnet.website';
    //public stockDataSet = 
    constructor(private httpService : HttpClient){
        //{'transports':['websocket'], "forceJSONP":true, "jsonp" : true}
        const socketConnection = io.connect(this.url, {
            //"forceJSONP":true,
            extraHeaders : {
                "content-type" : 'application/json'
            }
        });

        socketConnection.on('connection', (data) => {
          console.log("data", data);
          // ...
        });
        /**
         * Implementation incomplete due to cors
         */
        
        // this.jsonp(this.url, function(data) {
        //    console.log("data- - >", data);
        // });
    }
    jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}


    
    getStockDataSet(){
        return _.cloneDeep([["stock-no-8",15],["stock-no-7",12],["stock-no-6",1],["stock-no-5",5],["stock-no-4",6],["stock-no-3",122],["stock-no-2",45],["stock-no-1",65],["stock-no-0",23]])
        //return this.stockDataSet;
    }

    resetStockLoop(){
        this.stockLoopLength = 10;
    }

    listenToStock(){
        return this.emitChangeSource.asObservable();
    }


    calculateRandomStockData(){
        const self = this;
        let setRandom = Math.floor((Math.random() * 10) + 1);
        return self.getStockDataSet().map((stockDatum : any, key)=>{
            //console.log("setRandom < key", setRandom < key);
            let price = stockDatum[1];
            if(setRandom < key){
                price=price-Math.random();
            }else{
                price=price+Math.random();
            }
            stockDatum[1] = self.getNumberFormated(price, 2);
            return stockDatum;
        })
    }

    getNumberFormated(data, placementUnit) {
        return (parseFloat(data)).toFixed(placementUnit || 2) || 0;
    }

    dataGenerator(){
        const self = this;
        //
        //let reduceToRandom = .splice(0, Math.floor((Math.random() * 5) + 1));;
        self.emitChangeSource.next(this.calculateRandomStockData())
    }

    calculateHalf(data){
        return Math.ceil(data/2)
    }
}



   