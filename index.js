const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs')

try {
  const style = core.getInput('style');
  console.log(`Using style: ${style}`);

  const workingDir = core.getInput('working-directory');
  console.log(`Using directory: ${workingDir}`);

  const time = Math.round((new Date()).getTime() / 1000);
  var output = time
  
  if (style == "hextime") {
    output = time.toString(16)
  }

  core.setOutput("build-number", output);
  shell.exec(`cd ${workingDir} && xcrun agvtool new-version -all ${output}`);
} catch (error) {
  core.setFailed(error.message);
}
