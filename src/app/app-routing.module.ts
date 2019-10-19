import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'cabinet', loadChildren: './cabinet/cabinet.module#CabinetPageModule' },
  { path: 'add-meds', loadChildren: './add-meds/add-meds.module#AddMedsPageModule' },
  { path: 'contact-professional', loadChildren: './contact-professional/contact-professional.module#ContactProfessionalPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },  { path: 'medicine-form', loadChildren: './medicine-form/medicine-form.module#MedicineFormPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
