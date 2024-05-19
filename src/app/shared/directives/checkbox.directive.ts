import { Directive } from '@angular/core';

@Directive({
  selector: '[app-checkbox][type=checkbox]',
  host: {
    class:
      'rounded transition h-8 w-8 duration-300 border-2 cursor-pointer border-gray-200 shadow-inner outline-none !ring-offset-0 !ring-0',
  },
})
export class CheckboxDirective {}
