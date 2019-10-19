import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactProfessionalPage } from './contact-professional.page';

const routes: Routes = [
  {
    path: '',
    component: ContactProfessionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactProfessionalPage]
})
export class ContactProfessionalPageModule {}
