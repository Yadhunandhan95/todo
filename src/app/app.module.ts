import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatCardModule, MatListModule, MatButtonModule, MatInputModule, MatExpansionModule, MatToolbarModule, MatIconModule, MatSnackBarModule, MatSlideToggleModule, MatChipsModule
// } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatInputModule} from '@angular/material/input';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
