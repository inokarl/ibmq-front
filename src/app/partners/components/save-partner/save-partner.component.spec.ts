import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePartnerComponent } from './save-partner.component';

describe('SavePartnerComponent', () => {
  let component: SavePartnerComponent;
  let fixture: ComponentFixture<SavePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
