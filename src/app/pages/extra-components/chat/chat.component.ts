import { Component } from '@angular/core';

import { ChatService } from './chat.service';
import { NgFor } from '@angular/common';
import { NbCardModule, NbChatModule } from '@nebular/theme';

@Component({
    selector: 'ngx-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.scss'],
    providers: [ChatService],
    standalone: true,
    imports: [NbCardModule, NbChatModule, NgFor]
})
export class ChatComponent {

  messages: any[];

  constructor(protected chatService: ChatService) {
    this.messages = this.chatService.loadMessages();
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply); }, 500);
    }
  }
}
