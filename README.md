
# ngx-smart-pipes

High-performance, **standalone** Angular pipes:
- `truncate`
- `dateDiff` → `2d`, `3h`, `15m`
- `currencyCompact` → `$1.2K`, `CA$1.2K`
- `bytes` → `3.00 MB`
- `phoneMask` → `(416) 555-1234`

## Build & Publish
```bash
npm ci
npm run build
cd dist
npm publish --access public
```
