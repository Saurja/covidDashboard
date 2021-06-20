import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CasesComponent } from "./content/cases/cases.component";
import { NotificationsComponent } from "./content/notifications/notifications.component";
import { HelplinesComponent } from "./content/helplines/helplines.component";

const routes: Routes = [
  { path: "", redirectTo: "/cases", pathMatch: "full" },
  { path: "cases", component: CasesComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "helpline-numbers", component: HelplinesComponent },
  { path: "**", redirectTo: "/cases" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
