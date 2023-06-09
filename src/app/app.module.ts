import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoopComponent } from './components/loop/loop.component';
import { ItemComponent } from './components/item/item.component';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, LoopComponent, ItemComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
