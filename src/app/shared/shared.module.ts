import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CheckboxDirective } from './directives';

const COMPONENTS = [CheckboxDirective];
const MODULES = [CommonModule, RouterModule, RouterOutlet];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, AngularSvgIconModule.forRoot()],
  exports: [...MODULES, ...COMPONENTS, AngularSvgIconModule],
})
export class SharedModule {}
