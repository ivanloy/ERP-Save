import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './service/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './components/register/register.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatProgressBarModule, MatFormFieldModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    HomeComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ClientsListComponent,
    ProductsListComponent,
    PageNotFoundComponent,
    
    
   
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
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    CdkTableModule,
    NgxPaginationModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbModule
    
  ],
  providers: [AuthService, OrderService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
