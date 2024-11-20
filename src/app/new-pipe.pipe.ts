import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe',
  standalone: true
})
export class NewPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
