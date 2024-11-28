import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];
  page: number = 0;
  orderByOldest: boolean = false;

  displayedColumns: string[] = ['content'];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getMessages(this.page, this.orderByOldest).subscribe((page) => {
      this.messages = page.content;
    })
  }

}