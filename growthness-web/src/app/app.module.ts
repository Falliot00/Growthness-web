import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DolorComponent } from './components/dolor/dolor.component';
import { VideoComponent } from './components/video/video.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ObjesionesComponent } from './components/objesiones/objesiones.component';
import { MetodoComponent } from './components/metodo/metodo.component';
import { FaqComponent } from './components/faq/faq.component';
import { AspiracionesComponent } from './components/aspiraciones/aspiraciones.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { CaminosComponent } from './components/caminos/caminos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DolorComponent,
    VideoComponent,
    TestimoniosComponent,
    ObjesionesComponent,
    MetodoComponent,
    FaqComponent,
    AspiracionesComponent,
    HomeComponent,
    FooterComponent,
    BonusComponent,
    CaminosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
