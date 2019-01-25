import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseInvoiceComponent } from './parse-invoice.component';
import { NumberParserService } from '../services/number-parser.service';

class MockNumberParserService {
  
};


describe('ParseInvoiceComponent', () => {
  let component: ParseInvoiceComponent;
  let fixture: ComponentFixture<ParseInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseInvoiceComponent ],
      providers: [
        { provide: NumberParserService, useClass: MockNumberParserService }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseInvoiceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
