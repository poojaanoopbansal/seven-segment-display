import { Component, OnInit } from '@angular/core';
import { NumberParserService } from '../services/number-parser.service';

@Component({
  selector: 'app-parse-invoice',
  templateUrl: './parse-invoice.component.html',
  styleUrls: ['./parse-invoice.component.scss']
})
export class ParseInvoiceComponent implements OnInit {

  invoiceNumbers:string[];
  loading:boolean = false;
  selectedFile;

  constructor(private numberParserService:NumberParserService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];    
    }
  }

  onSubmit(){
    let reader = new FileReader();
    let data: any;

    if(this.selectedFile){
      reader.readAsText(this.selectedFile);
      this.loading = true;
      reader.onloadend = (e) => {
        data = reader.result;
        this.invoiceNumbers = this.numberParserService.processFileData(data);
        this.loading = false;
     };
    }

  }


}
