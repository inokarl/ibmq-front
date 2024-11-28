import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Page } from '../../common/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8080/messages/all';  

  constructor(private http: HttpClient) {}

  getMessages(page: number, orderByOldest: boolean): Observable<Page<Message>> {
    return this.http.get<Page<Message>>(`${this.apiUrl}?page=${page}&orderByOldest=${orderByOldest}`);
  }
}