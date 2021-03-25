# easy-date-time
A small tool for date &amp; time operations.

## Install
* npm i @youmaole/easy-date-time
* yarn add @youmaole/easy-date-time
## Import
import { now, format, toUtc, toLocal, addDays, addMonths } from '@youmaole/easy-date-time';
## Usage
**Methods for getting now:**
```now(option?)```
- Format 1: now() // 2021-03-20 20:22:09
- Format 2: now('-') // 2021-03-20 20:22:09
- Format 3: now('/') // 2021/03/20 20:22:09
- Format 4: now('ts') // 1616242929298
- Format 5: now('timestamp') // 1616242929298
- Format 6: now('time') // 20:22:09
- Format 7: now('t') // 20:22:09

**Methods for date/time format:**
```format(date_input, option?)```
- Format 1: format('2021-03-20') // 2021-03-20 08:00:00
- Format 2: format('2021-03-20', 'yyyy-mm-dd') // 2021-03-20
- Format 3: format('2021-03-20', 'yyyy-mm-dd hh:mm:ss') // 2021-03-20 08:00:00
- Format 4: format('2021-03-20', 'yyyy-mm-dd h:m:s') // 2021-03-20 08:00:00
- Format 5: format('2021-03-20', 'yyyy/mm/dd') // 2021/03/20
- Format 6: format('2021-03-20', 'yyyy/mm/dd hh:mm:ss') // 2021/03/20 08:00:00
- Format 7: format('2021-03-20', 'yyyy/mm/dd h:m:s') // 2021/03/20 08:00:00
- Format 8: format('2021-03-20', 'yy-mm-dd') // 21-03-20
- Format 9: format('2021-03-20', 'yy/mm/dd') // 21/03/20
- Format 10: format('2021-03-20', 'yyyymmdd') // 20210320
- Format 11: format('2021-03-20', 'yymmdd') // 210320
- Format 12: format('2021-03-20', 'hh:mm:ss') // 08:00:00
- Format 13: format('2021-03-20', 'h:m:s') // 08:00:00
- Format 14: format('2021-03-20', 'time') // 08:00:00
- Format 15: format('2021-03-20', 't') // 08:00:00
- Format 16: format('2021-03-20', 'hh:mm') // 08:00
- Format 17: format('2021-03-20', 'h:m') // 08:00
- Format 18: format('2021-03-20', 'mm:ss') // 00:00
- Format 19: format('2021-03-20', 'm:s') // 00:00
- Format 20: format('2021-03-20', 'ts') // 1616198400000
- Format 21: format('2021-03-20', 'timestamp') // 1616198400000

**Methods for UTC format:**
```toUtc(local_date_input)```
- Local to UTC: toUtc('2021-03-20') // 2021-03-20 00:00:00
```toLocal(utc_date_input)```
- UTC to local: toLocal('2021-03-20 00:00:00') // 2021-03-20 08:00:00

**Methods for adding days:**
```addDays(date_input, days?)```
- Default add 0 day: addDays('2021-03-20') // 2021-03-20 08:00:00
- Other days: addDays('2021-03-20', 5) // 2021-03-25 08:00:00

**Methods for adding months:**
```addMonths(date_input, months?)```
- Default add 0 month: addMonths('2021-03-20') // 2021-03-20 08:00:00
- In this year: addMonths('2021-03-20', 5) // 2021-08-20 08:00:00
- Out of this year: addMonths('2021-03-20', 15) // 2022-06-20 08:00:00

**Methods for adding years:**
```addYears(date_input, years?)```
- Default add 0 year: addYears('2021-03-20') // 2021-03-20 08:00:00
- addYears('2021-03-20', 5) // 2026-08-20 08:00:00

**Valid input:**
- date object: new Date()
- date string: '2021-03-20', '2021/03/20'
- date string: '2021-03-20 08:00:00'
- timestamp: 1616245217168
