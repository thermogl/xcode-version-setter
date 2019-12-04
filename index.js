const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs')

try {
  const style = core.getInput('style');
  console.log(`Using style ${style}!`);
  const time = (new Date()).getTime();
  core.setOutput("build-number", time);
  shell.exec(`xcrun agvtool new-version -all ${time}`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
