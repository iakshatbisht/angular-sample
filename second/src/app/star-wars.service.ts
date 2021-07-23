import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()
export class StarWarsService{
    private characters = [
        {name: 'Luke Skywalker',side: ''},
        {name: 'Darth Vader',side: ''}
    ];
    private logService: LogService;
    characterChanged = new Subject<void>();
    http: HttpClient;
    constructor(logService: LogService, http: HttpClient){
        this.logService = logService;
        this.http = http;
    }

    fetchCharacters() {
        console.log(this.characters);
        this.http.get<any>("http://swapi.dev/api/people/").map((response) => {
            const results = response.results;
            const chars = results.map((char:any) => {
                return {name: char.name, side: ''};
            });
            return chars;
        }).subscribe((data) => {
            console.log(data);
           this.characters = data;
           this.characterChanged.next();
        });
           
    }

    addCharacter(name: string, side: string){
        const pos = this.characters.findIndex((char) => {
            return char.name === name;
        })
        if(pos !== -1)
        return;

        const newChar = {name: name, side: side};
        this.characters.push(newChar);
        console.log(this.characters);
    }

    getChars(chosenList: string){
        if(chosenList === 'all'){
          return this.characters.slice();
        }
        return this.characters.filter((char) => {return char.side === chosenList});
    }

    onSideChosen(charInfo: any){
        const pos = this.characters.findIndex((char) => {
          return char.name === charInfo.name;
        });
        this.characters[pos].side = charInfo.side;
        this.characterChanged.next();
        this.logService.writeLog('Changed side of'+charInfo.name+', new side: '+charInfo.side);
    }
    
    

}