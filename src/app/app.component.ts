import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public defaultTemplateData :any;
  public updatedTemplateData : any;
  constructor(private _stockService : StockService){
    let self = this;
    //self.defaultTemplateData;
    //console.log("self.defaultTemplateData", self.defaultTemplateData);
  	_stockService.listenToStock()
  	.subscribe((data)=>{
      console.log("Listening realtime");
      self.updatedTemplateData = data;
  		//console.log("data-->" ,data, typeof data)
      //console.log("defaultTemplateData-->" ,self.defaultTemplateData, typeof self.defaultTemplateData)
  	})
  }

  ngOnInit(){
    this.defaultTemplateData = [["stock-no-8",1524067656796],["stock-no-7",1524067656796],["stock-no-6",1524067656796],["stock-no-5",1524067656796],["stock-no-4",1524067656796],["stock-no-3",1524067656796],["stock-no-2",1524067656796],["stock-no-1",1524067656796],["stock-no-0",1524067656796]];
  }

  private getStockData(e){
    this._stockService.getDummyDatum()
  }
}
