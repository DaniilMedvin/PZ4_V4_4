const { 逃 } = require('./m_4fKq');

exports.画 = (题, 录) => `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>${逃(题)}</title>
<style>
body { font-family: sans-serif; margin: 40px; }
table { border-collapse: collapse; }
td, th { border: 1px solid #999; padding: 6px 12px; text-align: left; }
</style>
</head>
<body>
<h1>${逃(题)}</h1>
<p>Дисципліна з найбільшою кількістю годин</p>
<table>
<tr><th>Назва</th><td>${逃(录.名)}</td></tr>
<tr><th>Годин</th><td>${逃(录.时)}</td></tr>
<tr><th>Викладач</th><td>${逃(录.师)}</td></tr>
</table>
</body>
</html>
`;
