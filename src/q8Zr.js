exports.析 = (文) =>
  [...文.matchAll(/<discipline>([\s\S]*?)<\/discipline>/g)].map((段) => {
    const 取 = (签) => (段[1].match(new RegExp(`<${签}>([^<]*)</${签}>`)) || [, ''])[1].trim();
    return { 名: 取('name'), 时: Number(取('hours')), 学: Number(取('credits')), 师: 取('teacher') };
  });
