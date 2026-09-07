/*

车票票：https://apps.apple.com/app/id6446212291

[URL Rewrite]
^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) https://rc-backup.lovebabyforever.workers.dev header
^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) https://reven.lovebabyforever.workers.dev header

[MITM]
hostname = api.revenuecat.com, api.rc-backup.com

*/
