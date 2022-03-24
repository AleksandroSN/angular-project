import { Injectable } from "@angular/core";
import { MessageService } from "../messages";

@Injectable({
  providedIn: "root",
})
export class LogService {
  constructor(private messageService: MessageService) {}

  log(message: string) {
    this.messageService.add(`HeroServise: ${message}`);
  }
}
