import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
})

export class ListComponent {
    
    @Input()
    public characterList: Character[] = [
        //lo del interior se ejecuta en caso
        //de no recibir nada. De no determinar
        //estos datos seria undefined
        {
            name: 'Trunks',
            power: 10
        }
    ];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(index: number): void {

        const id = this.characterList[index].id;

        console.log({index});  

        
        this.onDelete.emit(id);

    }
}