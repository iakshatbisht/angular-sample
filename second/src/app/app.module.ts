import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CharacterFormComponent } from './character-form/character-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: 'characters', component: TabsComponent, children: [
      {path:'', redirectTo:'all', pathMatch: 'full'},
      {path: ':side', component: ListComponent},
  
    ]},
  {
    path: 'character',component: CharacterFormComponent
  },{
    path: '**', redirectTo: '/characters'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CharacterFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
  swService: StarWarsService;
  constructor(swService: StarWarsService){
    this.swService = swService;
  }
  ngOnInit(){
    console.log("app-root initialized");
    this.swService.fetchCharacters();
  }
}
