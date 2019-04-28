import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlnPage } from './pln.page';
import { Ionic4DatepickerModule } from 'projects/ionic4-datepicker/src/public_api';

const routes: Routes = [
  {
    path: '',
    component: PlnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    Ionic4DatepickerModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlnPage]
})
export class PlnPageModule {}
