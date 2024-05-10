#!/usr/bin/env node
const { program } = require('commander');

program
  .command('hello')
  .description('console log hello')
  .action(async () => {
    const { hello } = require('./commands/hello');
    await hello();
  });

program.parse(process.argv);