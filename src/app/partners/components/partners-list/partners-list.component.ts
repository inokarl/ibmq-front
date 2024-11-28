import { Component } from '@angular/core';
import { PartnerService } from '../../services/partner.service';
import { CommonModule } from '@angular/common';
import { Partner } from '../../models/partner';
import { KeysPipe } from '../../../common/keys.pipe';
import { SavePartnerComponent } from '../save-partner/save-partner.component';

@Component({
  selector: 'app-partners-list',
  standalone: true,
  imports: [CommonModule, KeysPipe, SavePartnerComponent],
  templateUrl: './partners-list.component.html',
  styleUrl: './partners-list.component.css'
})
export class PartnersListComponent {

  partners: Partner[] = [];
  headers: string[] = [];
  insertionMode: boolean = false;

  constructor(private partnerService: PartnerService) {
  }

  public ngOnInit(): void {
    this.partnerService.getPartnerEmitter().subscribe({
      next: (value: Partner[]) => {
        console.log(value);
        this.partners = value;
        if (this.partners.length != 0) {
          this.headers = [...Object.keys(this.partners[0]), 'Action'];
        }
      },
    });
    this.partnerService.getPartners();
  }

  deletePartner(id: string) {
    this.partnerService.deletePartner(id);
  }

}
