
import { Pipe, PipeTransform } from '@angular/core';

/** Example: {{ '4165551234' | phoneMask:'(XXX) XXX-XXXX' }} -> (416) 555-1234 */
@Pipe({ name: 'phoneMask', standalone: true, pure: true })
export class PhoneMaskPipe implements PipeTransform {
  transform(value: string | number | null | undefined, pattern = '(XXX) XXX-XXXX'): string {
    const digits = String(value ?? '').replace(/\D+/g, '');
    let i = 0;
    return pattern.replace(/X/g, () => digits[i++] ?? '');
  }
}
