import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material Libraries */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

/*********************** */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibMainComponent } from './lib-main/lib-main.component';
import { LibDetailComponent } from './lib-main/lib-detail/lib-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaintainUserComponent } from './lib-main/maintain-user/maintain-user.component';
import { MaintainBookComponent } from './lib-main/maintain-book/maintain-book.component';
import { BookEditDialogComponent } from './lib-main/maintain-book/book-edit-dialog/book-edit-dialog.component';
import { UserEditDialogComponent } from './lib-main/maintain-user/user-edit-dialog/user-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LibMainComponent,
    LibDetailComponent,
    MaintainUserComponent,
    MaintainBookComponent,
    BookEditDialogComponent,
    UserEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
