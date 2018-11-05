#!/usr/bin/env node

const program = require('commander')
const moment = require('moment')

program
.option('-d, --date [timestamp]', 'Convert to date')
.parse(process.argv)

let { date } = program
if (date) {
  if (date.length === 13) {
    console.log('Assuming Miliseconds timestamp')
    date = date / 1000
  } else if (date.length === 10) {
    console.log('Assuming second timestamp')
  } else {
    console.error('Invalid timestamp')
    process.exit(1)
  }
  console.log('[GMT/UTC] ' + moment.unix(parseInt(date)).utc().toString())
  console.log('[Local] ' + moment.unix(parseInt(date)).toString())
} else {
  console.log('Invalid args specified')
  process.exit(1)
}
