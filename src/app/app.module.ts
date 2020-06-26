import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { UsersService } from './users/users.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent  }
    ]
  },
  { path: 'servers', 
  component: ServersComponent,
  children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServersService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
