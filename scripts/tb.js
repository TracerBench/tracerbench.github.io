#!/usr/bin/env node

const path = require('path');
const ora = require('ora');
const {
  spawn
} = require('child_process');

const app = {
  control: `file://${path.join(process.cwd() + '/dist/index.html')}`,
  experiment: `file://${path.join(process.cwd() + '/dist/index.html')}`,
};

// check for tracerbench compare significant results
const spinner = ora().start('TracerBench: Running \n');
const tb = spawn('tracerbench', ['compare', `--controlURL=${app.control}`, `--experimentURL=${app.experiment}`, `--fidelity=test`, `--json`]);
const results = [];

spinner.start(`TracerBench: tracerbench compare --controlURL=${app.control} --experimentURL=${app.experiment} --json`);

tb.stdout.on('data', (data) => {
  results.push(`${data}`);
});

tb.stderr.on('data', (data)=> {
  console.log(`${data}`);
});

tb.on('close', (code) => {
  spinner.succeed();
  tbAnalyze();
});

function tbAnalyze() {
  spinner.start(`TracerBench: analyzing data...\n`);
  
  // query results data and check if any phase is significant
  const data = JSON.parse(results);

  if (data.isSignificant) {
    // significant phases found (regression or improvement)
    spinner.warn(`TracerBench: results are statistically significant.`);
    if (data.isBelowRegressionThreshold) {
      spinner.warn(`TracerBench: regression detected however is below set thresholds`)
    } else {
      spinner.warn(`TracerBench: regression detected and above thresholds limits.`)
    }
  }
  if (!data.isSignificant) {
    spinner.succeed(`TracerBench: results are statistically insignificant.`);
  }

  spinner.stop();
}