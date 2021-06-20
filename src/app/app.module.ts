import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CasesComponent } from "./content/cases/cases.component";
import { NotificationsComponent } from "./content/notifications/notifications.component";
import { HelplinesComponent } from "./content/helplines/helplines.component";

import { OrderModule } from "ngx-order-pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CasesComponent,
    NotificationsComponent,
    HelplinesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
