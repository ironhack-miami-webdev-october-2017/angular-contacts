import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { CounterService } from './services/counter.service';
import { ContactService } from './services/contact.service';


import { AppComponent } from './app.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { ContactFormComponent } from './contact-list/contact-form/contact-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


const myRoutes: Routes = [
    // localhost:4200
    { path: '',                    component: LandingPageComponent },

    // localhost:4200/contacts
    { path: 'contacts',            component: ContactListComponent },

    // localhost:4200/counter
    { path: 'counter',             component: CounterUiComponent },

    // localhost:4200/contacts/999
    { path: 'contacts/:id', component: ContactDetailsComponent },

    // Any other URL (NEEDS to be last)
    { path: '**',                  component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CounterUiComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactFormComponent,
    LandingPageComponent,
    NotFoundComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [
    CounterService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
