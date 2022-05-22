'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.whiteBright('               Victor Almeida'),
  handle: chalk.whiteBright('iamvitu'),
  whoiam: chalk.white.bold.inverse(' Backend developer and data analytics enthusiast '),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyanBright('Vitu_Py'),
  telegram: chalk.gray('https://t.me/') + chalk.magentaBright('DevVitu'),
  npm: chalk.gray('https://npmjs.com/') + chalk.redBright('~odevitu'),
  github: chalk.gray('https://github.com/') + chalk.greenBright('vitucomment'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blueBright('devitu-py'),
  email: chalk.rgb(18, 122, 127).underline.bold('victorpy.1999@gmail.com'),
  npx: chalk.white.bold.inverse(' npx iamvitu '),

  labelwhoiam: chalk.white.bold("   Who iam:"),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labeltelegram: chalk.white.bold('   Telegram:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelnpm: chalk.white.bold('        Npm:'),
  labelCard: chalk.white.bold('       Card:'),
  labelemail: chalk.white.bold('      Email:')
}

const newline = "\n"
const heading = `${data.name} / ${data.handle}`
const whoiamhere = `${data.labelwhoiam}  ${data.whoiam}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const telegraming = `${data.labeltelegram}  ${data.telegram}` 
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`
const npming = `${data.labelnpm}  ${data.npm}`
const emailing = `${data.labelemail}  ${data.email}`

const output = heading + newline +
               newline +
               whoiamhere + newline +
               newline+
               linkedining + newline +
               twittering + newline +
               githubing + newline +
               telegraming + newline+
               npming + newline +
               emailing + newline+
               newline + 
               carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.greenBright.bold(boxen(output, options)))

console.log(output)