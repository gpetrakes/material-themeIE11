import { ToolbarComponent } from './example/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatButtonModule, MatToolbarModule, MatIconModule,
        MatCardModule, MatInputModule, MatTreeModule, MatTree   } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';         
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './example/parent/parent.component';
import { ChildComponent } from './example/child/child.component';
import { FormPrebuildComponent } from './example/form-prebuild/form-prebuild.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FormPrebuildComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,  
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
