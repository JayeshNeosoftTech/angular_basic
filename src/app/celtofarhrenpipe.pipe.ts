import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celtofarhrenpipe'
})
export class CeltofarhrenpipePipe implements PipeTransform {
  fahren_val: number | undefined;
  transform(value: number, ...args: unknown[]): unknown {
    this.fahren_val= (value*(9/5)) + 32;
    return this.fahren_val;
  }

}
