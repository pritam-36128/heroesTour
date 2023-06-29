import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  //The messageService property must be public because we are going to bind to it in the template.
  constructor(public messageService: MessageService) {}
}
