import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { HomeComponent } from './home/home.component';
import { AtracaoComponent } from './atracao/atracao.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { EstacaoService } from './service/estacao.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    HomeComponent,
    AtracaoComponent,
  ],
  imports: [
    ZXingScannerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EstacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
