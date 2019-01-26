import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseInvoiceComponent } from './parse-invoice.component';
import { NumberParserService } from '../services/number-parser.service';

class MockNumberParserService {
  
};


describe('ParseInvoiceComponent', () => {
  let component: ParseInvoiceComponent;
  let fixture: ComponentFixture<ParseInvoiceComponent>;
  let NumberParserService;



 /* beforeEach(() => {
    fixture = TestBed.createComponent(ParseInvoiceComponent);
    component = fixture.componentInstance;
  });*/

  

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        ParseInvoiceComponent,
        { provide: NumberParserService, useClass: MockNumberParserService }
      ]
    });
    // inject both the component and the dependent service.
    component = TestBed.get(ParseInvoiceComponent);
    NumberParserService = TestBed.get(NumberParserService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
/* it('convert digits into its 7 segment binary form and  return an array of string', () => {
    component.selectedFile = "    _  _  _  _  _  _  _  _\n"+ 
    "||_||_||_|| ||_|| ||_|| |\n"+
    "||_||_||_||_| _||_| _||_|";
    component.ngOnInit();
    expect(comp.welcome).not.toContain(userService.user.name);
    expect(comp.welcome).toContain('log in');
  });*/
});
