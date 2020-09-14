import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeadingComponent } from './app-heading/app-heading.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { RootComponent } from './root/root.component';
import { ScrollContentComponent } from './scroll-content/scroll-content.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeadingComponent,
    AppIntroComponent,
    TechStackComponent,
    RootComponent,
    ScrollContentComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
