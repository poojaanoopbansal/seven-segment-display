import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberParserService {

  constructor() { }

  processFileData(data:string){
    let binaryData =[];
    binaryData = this.getBinaryData(data);
    return this.binaryDataToDigits(binaryData);
  }

  private getBinaryData(data:string){
    let segmentDisplay = [];
    let arrayOfData = data.split("\n");
    let binaryInvoice ="";
    let currentInvoice="";
    let invoiceLineNumber=0;
    let firstLineCount = 1;
    let lastTwoLines = 0;
    let count = 0;
    let tempInvoice ;
    let removalOfLines =arrayOfData.length%4;
    for(var invoice=0;invoice < arrayOfData.length-removalOfLines; invoice++){
     count = 0;
      
     firstLineCount = 1;
      for(var characters=0; characters <27; characters = characters+3){
        currentInvoice ="";
        lastTwoLines = 0;
        if(invoice%4 == 0){
          if(arrayOfData[invoice].charAt(firstLineCount) === "_"){
            currentInvoice = currentInvoice +  "1";
          }
          else{
            currentInvoice = currentInvoice + "0";
          }
          firstLineCount = firstLineCount+3;
          segmentDisplay.push(currentInvoice);
        }
        else if(invoice%4 !== 3){
          while(lastTwoLines <3){
            var index = Math.floor((invoice/4))*9 + count;
            
            if(arrayOfData[invoice].charAt(characters + lastTwoLines)==="|" || arrayOfData[invoice].charAt(characters + lastTwoLines)==="_" ){
              
              tempInvoice = segmentDisplay[index] + "1";
            }
            else{
              tempInvoice = segmentDisplay[index] + "0";
              }
            segmentDisplay[index] = tempInvoice;
            lastTwoLines++;
          }
          count++;
        }
       
      }
      
    }
    
    return segmentDisplay;
  }

  private binaryDataToDigits(binaryData:string[]):string[]{
    let invoiceNumber ="";
    let arrayOfInvoiceNumber = [];
    console.log("binarydata "+binaryData[binaryData.length]);
    for(var i=0; i< binaryData.length;i++){
      switch(binaryData[i]){
        case "1101111":
        invoiceNumber = invoiceNumber +"0";
        break;
        case "0001001":
        invoiceNumber = invoiceNumber +"1";
        break;
        case "1011110":
        invoiceNumber = invoiceNumber +"2";
        break;
        case "1011011":
        invoiceNumber = invoiceNumber +"3";
        break;
        case "0111001":
        invoiceNumber = invoiceNumber +"4";
        break;
        case "1110011":
        invoiceNumber = invoiceNumber +"5";
        break;
        case "1110111":
        invoiceNumber = invoiceNumber +"6";
        break;
        case "1001001":
        invoiceNumber = invoiceNumber +"7";
        break;
        case "1111111":
        invoiceNumber = invoiceNumber +"8";
        break;
        case "1111011":
        invoiceNumber = invoiceNumber +"9";
        break;
        case "000000000":
        break;
       default:
        invoiceNumber = invoiceNumber +"?";
        break;
      }
      if(i%9 === 8){
        arrayOfInvoiceNumber.push(invoiceNumber);
        invoiceNumber ="";
      }
    }
    return arrayOfInvoiceNumber;
  }

}
