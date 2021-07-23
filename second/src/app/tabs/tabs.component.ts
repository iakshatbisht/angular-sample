import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarsService]
})
export class TabsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
        
  }
  
  
  
  
}
