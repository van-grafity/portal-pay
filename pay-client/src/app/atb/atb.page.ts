import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ionic4DatepickerModalComponent } from 'projects/ionic4-datepicker/src/public_api';

@Component({
  selector: 'app-atb',
  templateUrl: './atb.page.html',
  styleUrls: ['./atb.page.scss'],
})
export class AtbPage implements OnInit {

  datePickerObj: any = {};
  selectedDate;

  monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weeksList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(
    public modalCtrl: ModalController
  ) {

   }

  ngOnInit() {
    const disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
      new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format
      new Date('12-14-2018'), // Short format
    ];

    this.datePickerObj = {
   
      dateFormat: 'YYYY-MM-DD',
     
      btnProperties: {
        expand: 'block', // "block" | "full"
        fill: '', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
      },

      arrowNextPrev: {
      } // This object supports only SVG files.
    };
  }

  async openDatePicker() {
    const datePickerModal = await this.modalCtrl.create({
      component: Ionic4DatepickerModalComponent,
      cssClass: 'li-ionic4-datePicker',
      componentProps: { 'objConfig': this.datePickerObj }
    });
    await datePickerModal.present();

    datePickerModal.onDidDismiss()
      .then((data) => {
        console.log(data);
        this.selectedDate = data.data.date;
      });
  }

}
