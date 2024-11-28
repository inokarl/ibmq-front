import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BASE_URL } from '../../common/network.config';
import { Partner } from '../models/partner';
import { Page } from '../../common/page';
import { Observable } from 'rxjs';
import { Message } from '../../messages/models/message';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private apiUrl: string = `${BASE_URL}/partners`;
  private partnerListEmitter = new EventEmitter<Partner[]>();
  private partnerEmitter = new EventEmitter<Partner>();

  constructor(private httpClient: HttpClient) {
  }

  public fetchPartners(): Observable<Page<Partner>> {
    return this.httpClient.get<Page<Partner>>(`${this.apiUrl}/all`);
  }

  public getPartners(): void {
    this.httpClient.get<Page<Partner>>(`${this.apiUrl}/all`).subscribe({
      next: (partners: Page<Partner>) => {
        console.log(partners.content);
        this.partnerListEmitter.emit(partners.content);
      },
      error: (error) => {},
    });
  }
    
  public savePartner(newPartner: Partner): void {
    this.httpClient.post<Partner>(`${this.apiUrl}/add`, newPartner).subscribe({
      next: (partner: Partner) => {
        this.partnerEmitter.emit(partner);
      },
      error: (error) => {},
    });
  }

  public deletePartner(id: string): void {
    this.httpClient.delete(`${this.apiUrl}/delete/${id}`).subscribe({
      next: () => {
        this.getPartners();
      },
      error: (error) => {},
    });
  }

  public getPartnerEmitter(): EventEmitter<Partner[]> {
    return this.partnerListEmitter;
  }
}
