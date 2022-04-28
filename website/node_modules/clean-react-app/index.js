#!/usr/bin/env node

const ncp = require('ncp');
ncp.limit = 16;

(async () => {
  const cwd = process.cwd();
  const currentDIR = __dirname;
  const frame = 'clean-react-app';
  const msg = `Successfully installed ${frame} ✅`;
  const dirToGo = `${cwd}/`;
  ncp(`${currentDIR}/template/`, dirToGo, err => {
    if (err) return console.error(err);
    console.log(msg);
  });
})();
