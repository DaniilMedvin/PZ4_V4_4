const { 读, 写 } = require('./src/m_4fKq');
const 析甲 = require('./src/q8Zr').析;
const 析乙 = require('./src/t3Bw').析;
const { 极 } = require('./src/n6Yc');
const { 画 } = require('./src/x1Hd');

[
  ['data/disciplines.xml', 析甲, 'out/xml.html', 'XML'],
  ['data/disciplines.json', 析乙, 'out/json.html', 'JSON'],
].forEach(([入, 法, 出, 题]) => 写(出, 画(题, 极(法(读(入))))));
