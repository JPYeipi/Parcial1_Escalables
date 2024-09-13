import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent {

  @Input()
  public show?: Show; 

  @Input()
  public isEdit: boolean = false; 

  @Output()
  public createElement: EventEmitter<Show> = new EventEmitter();

  @Output()
  public updateElement: EventEmitter<Show> = new EventEmitter(); 

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const updatedShow: Show = {
        description: form.value.description,
        episodes: 0,
        genre: "",
        image: form.value.image,
        likes: [],
        name: form.value.name,
        year: 0
      };

      if (this.isEdit) {
        this.updateElement.emit(updatedShow);
      } else {
        this.createElement.emit(updatedShow);
      }

      form.resetForm();
    } else {
      console.log("Faltan datos");
    }
  }
}



// Actualizado