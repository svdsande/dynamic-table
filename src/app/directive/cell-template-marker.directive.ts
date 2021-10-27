import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cellTemplateMarker]'
})
export class CellTemplateMarkerDirective {

  @Input() column: string | undefined;

  constructor(public template: TemplateRef<any>) { }

}
