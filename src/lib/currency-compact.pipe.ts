import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyCompact', standalone: true, pure: true })
export class CurrencyCompactPipe implements PipeTransform {
  transform(
    value: number | string | null | undefined,
    currency = 'USD',
    locale = 'en',
    maximumFractionDigits = 1
  ): string {
    const n = Number(value);
    if (!isFinite(n)) return '';

    // Keep types strict, then add 'notation' via a safe cast for older TS lib dom defs
    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency,
      maximumFractionDigits
    };

    // Add compact notation if supported (compile-safe via cast)
    (options as any).notation = 'compact';

    const fmt = new Intl.NumberFormat(locale, options);
    return fmt.format(n);
  }
}
