import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public itens = [{ name: 'Alisson Kauan'}];

  public loadingData : Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number){
    return index;
  }

  public addnewName(value: string){
    return this.itens.push({name : value});
  }

  public exclude(){
    return this.itens.pop();
  }

  public switchCondition = 'C';
}
