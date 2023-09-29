import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : "" , redirectTo : "home",pathMatch:'full'},
  {path : "home" , component :HomeComponent},
  {path : "about" , component : AboutComponent},
  {path : "contacts" , component : ContactComponent},
  {path : "portofolio" , component : PortofolioComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
