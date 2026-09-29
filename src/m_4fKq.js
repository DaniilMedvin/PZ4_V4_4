const 甲 = require('fs');
const 乙 = require('path');
const 丙 = (丁) => 乙.join(__dirname, '..', 丁);
exports.读 = (丁) => 甲.readFileSync(丙(丁), 'utf8');
exports.写 = (丁, 戊) => {
  甲.mkdirSync(乙.dirname(丙(丁)), { recursive: true });
  甲.writeFileSync(丙(丁), 戊);
};
exports.逃 = (己) =>
  String(己).replace(/[&<>"]/g, (庚) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[庚]));
