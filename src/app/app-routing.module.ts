import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoComponent } from './seo/seo.component';
import { SmmComponent } from './smm/smm.component';
import { CcComponent } from './cc/cc.component';
import { MainComponent } from './main/main.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'seo-component', component: SeoComponent },
  { path: 'smm-component', component: SmmComponent },
  { path: 'cc-component', component: CcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
