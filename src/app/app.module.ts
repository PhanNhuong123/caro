import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayHeaderInfoComponent } from './components/play-header-info/play-header-info.component';
import { SiderBarComponent } from './components/sider-bar/sider-bar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { DialogComponent } from './share/dialog/dialog.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    PlayHeaderInfoComponent,
    SiderBarComponent,
    SvgIconComponent,
    SanitizeHtmlPipe,
    DialogComponent,
    SettingsComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [
    SquareComponent,
    PlayHeaderInfoComponent,
    DialogComponent,
    MatButtonModule,
    MatDialogModule,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
