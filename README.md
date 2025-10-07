# ngx-smart-pipes

**ngx-smart-pipes** is a lightweight, tree-shakeable collection of **standalone Angular pipes** designed for real-world use cases.  
Each pipe is small, pure, and optimized for performance — perfect for dashboards, BFF-driven apps, and modern Angular 17–19 projects.

---

### Features
- Built as **standalone pipes** (no heavy module imports)
- AOT & Ivy compatible, works with Angular 17–19
- Fully tree-shakeable — import only what you use
- Pure and side-effect free for predictable change detection
- Tiny package (<6 KB compressed)

---

### Available Pipes

| Pipe | Purpose | Example Input | Output |
|------|----------|---------------|---------|
| `truncate` | Shorten long text safely with ellipsis | `"This is a long sentence"` | `This is a long…` |
| `currencyCompact` | Compact currency format | `1234567.89` | `$1.2M` |
| `bytes` | Human-readable file size | `3145728` | `3.00 MB` |
| `dateDiff` | Relative time difference | `Date.now() - 36h` | `1d` |
| `phoneMask` | Customizable phone masking | `4165551234` | `(416) 555-1234` |

---

### Quick Start

```bash
npm i ngx-smart-pipes

### Example
import { Component } from '@angular/core';
import {
  TruncatePipe,
  DateDiffPipe,
  CurrencyCompactPipe,
  BytesPipe,
  PhoneMaskPipe,
} from 'ngx-smart-pipes';

@Component({
  selector: 'demo-root',
  standalone: true,
  imports: [TruncatePipe, DateDiffPipe, CurrencyCompactPipe, BytesPipe, PhoneMaskPipe],
  template: `
    <p>{{ message | truncate:30 }}</p>
    <p>{{ amount | currencyCompact:'CAD':'en-CA':1 }}</p>
    <p>{{ from | dateDiff }} ago</p>
    <p>{{ fileSize | bytes:2 }}</p>
    <p>{{ phone | phoneMask:'(XXX) XXX-XXXX' }}</p>
  `,
})
export class DemoComponent {
  message = 'This is a long text that gets truncated.';
  amount = 1234567.89;
  from = new Date(Date.now() - 36 * 3600 * 1000);
  fileSize = 3145728; // 3 MB
  phone = '4165551234';
}

