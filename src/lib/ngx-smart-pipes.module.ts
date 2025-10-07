
import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { DateDiffPipe } from './date-diff.pipe';
import { CurrencyCompactPipe } from './currency-compact.pipe';
import { BytesPipe } from './bytes.pipe';
import { PhoneMaskPipe } from './phone-mask.pipe';

const PIPES = [TruncatePipe, DateDiffPipe, CurrencyCompactPipe, BytesPipe, PhoneMaskPipe];

@NgModule({ imports: [...PIPES], exports: [...PIPES] })
export class NgxSmartPipesModule {}
