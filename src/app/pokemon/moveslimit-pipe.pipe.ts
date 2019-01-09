import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moveslimitPipe'
})
export class MoveslimitPipePipe implements PipeTransform {
  transform(moves: Array<any>, stateArrayMove: any): Array<any> {
  return moves.map(
      (move, index: number) => {
        return index + 1 >= stateArrayMove.currentArray.start &&
        index + 1 <= stateArrayMove.currentArray.end ? move : null;
      }
    );
  }
}
