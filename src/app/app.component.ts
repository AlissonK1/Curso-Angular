import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    RouterOutlet, 
    NewComponent, 
    TemplateBindingComponent, 
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    AngularPipesComponent
  ],
  standalone: true,
  template: `
  <h1>Curso de Angular</h1>
  <router-outlet />
  <!-- <app-template-binding /> -->
  <!-- <app-template-variables /> -->
  <!-- <app-template-control-flow /> -->
   <!-- <app-template-deferrable-views /> -->
  <!-- <app-signals /> -->
   <app-angular-pipes />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
