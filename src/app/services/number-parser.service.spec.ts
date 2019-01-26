
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseInvoiceComponent } from '../parse-invoice/parse-invoice.component';
import { NumberParserService } from '../services/number-parser.service';

class MockNumberParserService {
  
};

describe('NumberParserService', () => {
  let component: ParseInvoiceComponent;
  let fixture: ComponentFixture<ParseInvoiceComponent>;
  let numberParserService;

  beforeEach(() => { numberParserService = new NumberParserService(); });
  
 
  it('convert digits into its 7 segment binary form and  return an array of string', () => {
    numberParserService.data = "    _  _  _  _  _  _  _  _ \n"+ 
                               "  ||_||_||_|| ||_|| ||_|| |\n"+
                               "  ||_||_||_||_| _||_| _||_|\n"+
                               " ";
  
  
    let result = numberParserService.processFileData(numberParserService.data);
 //   expect(component.welcome).not.toContain(userService.user.name);
 console.log("result ............. "+result[0]);
    expect(result[0]).toContain('188809090');
  });
});
