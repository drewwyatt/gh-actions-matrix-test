#! /usr/bin/env node

const INPUTS_AS_JSON = process.env.INPUTS_AS_JSON;
const { project, config } = JSON.parse(INPUTS_AS_JSON);

console.log('project', project);
console.log('config', config);
console.log('env.SOME_KEY:', process.env.SOME_KEY);
