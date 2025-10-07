
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bytes', standalone: true, pure: true })
export class BytesPipe implements PipeTransform {
  private units = ['B','KB','MB','GB','TB','PB'];
  transform(val: number | string | null | undefined, decimals = 1): string {
    let n = Number(val);
    if (!isFinite(n)) return '';
    if (n === 0) return '0 B';
    const i = Math.floor(Math.log(n) / Math.log(1024));
    const v = n / Math.pow(1024, i);
    return `${v.toFixed(decimals)} ${this.units[i] ?? 'B'}`;
  }
}
