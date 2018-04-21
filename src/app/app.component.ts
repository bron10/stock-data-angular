import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public defaultTemplateData :any;
  //public updatedTemplateData : any;
  constructor(private _stockService : StockService){
    let self = this;
    //self.defaultTemplateData;
    //console.log("self.defaultTemplateData", self.defaultTemplateData);
  	_stockService.listenToStock()
  	.subscribe((data)=>{
      //console.log("Listening realtime");
      self.defaultTemplateData = data;
  		//console.log("data-->" ,data, typeof data)
      //console.log("defaultTemplateData-->" ,self.defaultTemplateData, typeof self.defaultTemplateData)
  	})
  }

  ngOnInit(){
    this.defaultTemplateData = this._stockService.getStockDataSet();
  }

  private getStockData(e){
    this._stockService.dataGenerator()
  }
}
