import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Direction } from '../../models/direction';
import { ProcessedFlowType } from '../../models/processed-flow-type';
import { Partner } from '../../models/partner';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-save-partner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './save-partner.component.html',
  styleUrl: './save-partner.component.css'
})
export class SavePartnerComponent {
  
  direction = Object.values(Direction);
  processedFlowType = Object.values(ProcessedFlowType);
  isFormActive = false;

  constructor(private partnerService: PartnerService) {
  }
  
  newPartner: Partner = {
    id: '0',
    alias: '',
    type: '',
    direction: '',
    application: '',
    processedFlowType: '',
    description: '',
  };

  openForm(): void {
    this.isFormActive = true;
    this.resetForm();
  }

  closeForm(): void {
    this.isFormActive = false;
  }

  savePartner(): void {
    this.partnerService.savePartner(this.newPartner);
    this.closeForm();
  }

  resetForm(): void {
    this.newPartner = {
      id: '0',
      alias: '',
      type: '',
      direction: '',
      application: '',
      processedFlowType: '',
      description: '',
    };
  }
}
