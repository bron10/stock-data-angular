import { Component, Input, OnChanges} from '@angular/core';
import { StockService } from './stock.service';
import * as _ from "lodash";



@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./app.component.css']
})
export class RowComponent implements OnChanges{
  @Input() rowData;
  @Input() updatedRowData;
  constructor(private _stockService : StockService){
    //console.log("_.map", _);
    //console.log(this.rowData)
  }

  changeClass(currentValue, previousValue){
    if(currentValue > previousValue){
      return true
    }else
      return false
  }


  ngOnChanges(changes){
    let self = this;

    //console.log("changes", changes);
    if(_.isEmpty(changes.rowData.previousValue))
      return;


    let previousStockValues = _.fromPairs(changes.rowData.previousValue);
    let currentStockValues = _.fromPairs(changes.rowData.currentValue);

    const constantStockData = self._stockService.getStockDataSet();
    this.rowData = this.rowData.map((row)=>{
      let stockName = row[0];
      let currentStockValue = currentStockValues[stockName];
      let previousStockValue = previousStockValues[stockName];
      //console.log("previousStockValue, currentStockValue", previousStockValue, currentStockValue)
      console.log("row", row);
      if(currentStockValue == previousStockValue){
        row[2] = '';
      }
      if(currentStockValue > previousStockValue){
        row[2] = 'incr';
        //row[1] = JSON.parse(currentStockValue);
      }
      if(currentStockValue < previousStockValue){
        row[2] = 'dec';
        //row[1] = JSON.parse(currentStockValue);
      }

      console.log("console.log", row);
      return row;
    })
    // if(_.isEmpty(currentStockValues)){
    //   return;
    // }
    // //console.log("currentValueObject", currentValueObject);
    // this.rowData = _.map(self.rowData, (row)=>{
    //   let stockName = row[0];
    //   let currentStockValue = currentStockValues[stockName];
    //   console.log("currentStockValue", currentStockValue , row[1])
    //   if(currentStockValue > row[1]){
    //     row[2] = 'incr';
    //   }else
    //     row[2] = 'dec';
    //   if(currentStockValue){
    //     row[1] = currentStockValue;  
    //   }
    //   //row.push()
    //   return row;
    // })

    //console.log("rowData", this.rowData);


    // changes.updatedRowData.currentValue.map((val)=>{

    // })
  }
  
}
