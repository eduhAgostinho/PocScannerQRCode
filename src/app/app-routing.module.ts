import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScannerComponent } from './scanner/scanner.component';
import { AtracaoComponent } from './atracao/atracao.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'estacao/:nome', component: AtracaoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
