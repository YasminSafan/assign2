import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // تأكد من إضافة هذه السطر

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // تأكد من إضافة HttpClientModule هنا
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

