import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtbPage } from './atb.page';
import { Ionic4DatepickerModule } from 'projects/ionic4-datepicker/src/public_api';

const routes: Routes = [
  {
    path: '',
    component: AtbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ionic4DatepickerModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AtbPage]
})
export class AtbPageModule {}
