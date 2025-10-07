
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate', standalone: true, pure: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 100, ellipsis = '…'): string {
    const v = (value ?? '').toString();
    if (limit <= 0 || v.length <= limit) return v;
    // avoid cutting in the middle of a word
    const cut = v.slice(0, limit);
    return (cut.replace(/\s+\S*$/, '') || cut) + ellipsis;
  }
}
