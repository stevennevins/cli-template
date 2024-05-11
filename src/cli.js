#!/usr/bin/env node
const { program } = require('commander');
const config = require('config');

program
  .command('hello')
  .description('console log hello')
  .action(async () => {
    const { hello } = require('./commands/hello');
    await hello();
  });

program.parse(process.argv);