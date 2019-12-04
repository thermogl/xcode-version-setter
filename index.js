const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs')

try {
  const style = core.getInput('style');
  console.log(`Using style: ${style}`);
  const time = Math.round((new Date()).getTime() / 1000);
  core.setOutput("build-number", time);
  shell.exec(`xcrun agvtool new-version -all ${time}`);
} catch (error) {
  core.setFailed(error.message);
}
