import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { EmailService } from './../../services/email.service';

@Component({
  selector: 'friends',
  styleUrls: ['./friends.css'],
  templateUrl: './friends.html',
  providers: [EmailService]
})
export class Friends {

  constructor(private emailService: EmailService) {}

  emails: String[] = [];

  add(email: string) {
    this.emails.push(email);
  }

  sendAll(){
    for(let email in this.emails){
        this.emailService.sendEmail(email, "te toca enviarle el este a falete");
    }
  }

                   
}
