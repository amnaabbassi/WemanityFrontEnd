import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './routes/authentication/authentication/authentication.component';
import { VoteComponent } from './routes/vote/vote/vote.component';
import { ResultComponent } from './routes/result/result/result.component';
import { CountryService } from 'src/shared/service/country.service';
import { UserService } from 'src/shared/service/user.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/shared/service/dataservice';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    VoteComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountryService, DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
