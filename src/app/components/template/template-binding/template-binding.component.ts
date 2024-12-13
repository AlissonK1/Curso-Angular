import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [ CommonModule,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Alisson Kauan';
  public age = 21;
  public isDisabled = true;
  public isTextDecoration = this.age >= 21 ? 'underline' : 'none';


  public sum(){
    return this.age++;
  }

  public sub(){
    return this.age--;
  }

  public onkeyDown(event : Event){
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clientX : event.clientX,
      clientY : event.clientY,
    });
  }
}
