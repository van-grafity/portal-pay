import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  clientList: any;

  constructor(public clientService: ClientService) {

    this.isAccountClient();
  }

  isAccountClient() {
    this.clientService.getAccountClient().subscribe((response: Response) => {
      let data = response.json();
      console.log('CekData' + data);
      this.clientList = data;
    })
  }
}
