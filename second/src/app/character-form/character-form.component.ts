import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  availableSides = [{display: 'None', value: ''},{display: 'Light', value: 'light'},{display: 'Dark', value: 'dark'}]; 
  signUpForm: FormGroup = new FormGroup({});
  swService: StarWarsService;
  defaultName='Luke Skywalker';
  ngOnInit(){
    
  this.signUpForm = new FormGroup({
    'name':new FormControl('', Validators.required),
    'side': new FormControl('all'),
  });
} 
  
  constructor(swService: StarWarsService) { 
    this.swService = swService;
  }
  
  onSubmit(){
    console.log(this.signUpForm.value);
    this.swService.addCharacter(this.signUpForm.value.name, this.signUpForm.value.side);
  }
}
