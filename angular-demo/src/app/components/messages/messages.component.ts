import { Component } from "@angular/core";
import { MessageService } from "@app/services";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
