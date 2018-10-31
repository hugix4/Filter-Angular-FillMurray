import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressBarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

import { DataService } from './services/data.service';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TransferFormComponent,
    TransactionsComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [MatCardModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
