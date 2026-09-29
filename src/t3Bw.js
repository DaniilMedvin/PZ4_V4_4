exports.析 = (文) =>
  JSON.parse(文).disciplines.map((项) => ({
    名: String(项.name),
    时: Number(项.hours),
    学: Number(项.credits),
    师: String(项.teacher),
  }));
