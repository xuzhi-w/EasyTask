import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!:string;
  @Input() id!:string;
  @Input({required: true}) selected: boolean | undefined;
  @Output() select = new EventEmitter();
  
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

   onSelectUser(){
      this.select.emit(this.id);
  
   }
}
