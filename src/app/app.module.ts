import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ApplicationComponent} from './application/application.component';
import {CreateApplicationComponent} from './application/create-application/create-application.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ApplicationComponent,
    CreateApplicationComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
