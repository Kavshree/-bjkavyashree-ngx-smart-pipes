
import { Pipe, PipeTransform } from '@angular/core';
type Unit = 'y'|'mo'|'w'|'d'|'h'|'m'|'s';
const UNITS: [Unit, number][] = [
  ['y', 365*24*3600],
  ['mo', 30*24*3600],
  ['w', 7*24*3600],
  ['d', 24*3600],
  ['h', 3600],
  ['m', 60],
  ['s', 1],
];
@Pipe({ name: 'dateDiff', standalone: true, pure: true })
export class DateDiffPipe implements PipeTransform {
  transform(from: Date | string | number, to: Date | string | number = Date.now()): string {
    const a = new Date(from).getTime();
    const b = new Date(to).getTime();
    if (isNaN(a) || isNaN(b)) return '';
    let secs = Math.abs(Math.floor((b - a) / 1000));
    for (const [u, size] of UNITS) {
      const v = Math.floor(secs / size);
      if (v >= 1) return `${v}${u}`;
    }
    return '0s';
  }
}
