import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {CommonService} from './common.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SearchPicsComponent } from './search-pics/search-pics.component';
import { ResultComponent } from './result/result.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { UserService } from './shared/user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'profile', component: ProfileComponent},
    {path:'result', component: ResultComponent},
    {path: 'searchPics', component: SearchPicsComponent}
]

@NgModule({
  entryComponents: [
    UpdateUserComponent
  ],
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    SearchPicsComponent,
    ResultComponent,
    ConfirmEqualValidatorDirective,
    HeaderComponent,
    FooterComponent,
    CompareValidatorDirective,
    UpdateUserComponent,
    // NgbModalBackdrop
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgbModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    UserService,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
