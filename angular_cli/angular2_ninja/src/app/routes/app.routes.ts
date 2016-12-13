/**
 * Created by nik on 12.12.16.
 */

import {Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {PoniesComponent} from "../ponies/ponies.component";
import {RegisterFormComponent_C} from "../forms/code/register-form.component";
import {RegisterFormComponent_T} from "../forms/template/register-form.component";

export const ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'races', component: PoniesComponent},
  {path: 'code', component: RegisterFormComponent_C},
  {path: 'template', component: RegisterFormComponent_T}
];
