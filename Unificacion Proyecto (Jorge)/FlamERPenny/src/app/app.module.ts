import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyAqWRRTytavXvhAgq_pgVvoBrU0ulIozI8",
      authDomain: "loginfirebaseangular.firebaseapp.com",
      databaseURL: "https://loginfirebaseangular.firebaseio.com/",
      projectId: "loginfirebaseangular",
      storageBucket: "loginfirebaseangular.appspot.com",
      messagingSenderId: "228627189034"

    }),
    AngularFireAuthModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
