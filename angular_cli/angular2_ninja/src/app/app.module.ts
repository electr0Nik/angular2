import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

// custom components
import { AppComponent } from './app.component';
import { PonyComponent } from './pony/pony.component';
import { PoniesComponent } from './ponies/ponies.component';
import { SelectablePonyComponent } from "./ponies/selectable.pony.component"

// custom services
import { ApiService } from './service/api.service'
import { RaceService } from './service/race.service'
import { RaceServiceMock } from './service/mocks/race.service.mock'

// custom pipes
import { FromNowPipe } from './pipes/from.now.pipe'

// custom directives
import { SimpleTextDirective } from './directives/simple.text.directive'
import { OnInitDirective } from './directives/on.init.directive';
import { RaceComponent } from './race/race.component';
import { RegisterFormComponent_T } from './forms/template/register-form.component';
import { RegisterFormComponent_C } from './forms/code/register-form.component'
import {FormValidator} from "./forms/validator/form.validator";

import {ROUTES} from "./routes/app.routes";


@NgModule({
  declarations: [
    AppComponent,
    PonyComponent,
    PoniesComponent,
    SelectablePonyComponent,
    FromNowPipe,
    SimpleTextDirective,
    OnInitDirective,
    RaceComponent,
    RegisterFormComponent_T,
    RegisterFormComponent_C
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ApiService,
    { provide: 'IS_PROD', useValue: false },
    // RaceService,
    // provide mock service
    {
      provide: RaceService,
      useFactory: (IS_PROD, apiService) => IS_PROD ? new RaceService(apiService) : new RaceServiceMock(),
      deps: ['IS_PROD', ApiService]
    },
    FormValidator,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
