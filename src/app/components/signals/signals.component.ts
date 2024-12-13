import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Alisson ');
  public lastName = signal('Kauan');

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  })

  public array = signal([1]);

  constructor(){
    effect( () => {
      console.log(this.firstName());
    })
  }

  public updateName(){
    return this.firstName.set('Dener ')
  }

  public updateArray(){
    this.array.update( (oldValue : Array<number>) => {
      console.log(oldValue);
      return [...oldValue, oldValue.length + 1];
    })
  }
}
