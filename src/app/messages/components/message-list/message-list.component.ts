import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Page } from '../../../common/page';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];
  headers: string[] = [];
  focusedMessage: Message | undefined = undefined;
  page: number = 0;
  orderByOldest: boolean = false;


  constructor(private messageService: MessageService) {
  }

  openMessageDetails(message: Message): void {
    this.focusedMessage = message;
  }
  
  closeModal(): void {
    this.focusedMessage = undefined;
  }
  
  ngOnInit(): void {
    this.messageService.getMessages(this.page, this.orderByOldest).subscribe({
      next: (page: Page<Message>) => {
        this.messages = page.content;
        if(this.messages.length != 0) {
          this.headers = Object.keys(this.messages[0]).slice(1);
        }
      },
      error: (error) => {}
    });
  }
}