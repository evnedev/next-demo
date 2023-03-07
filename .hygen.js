const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const root = fs.readdirSync(path.resolve(__dirname, './'));
const fns = {
  src: () =>`${__dirname}/src`,
  cwd: () =>`${__dirname}`,
  bus: () => `${__dirname}/src/bus`,
  components: () => `${__dirname}/src/components`,
  pages: () => `${__dirname}/src/pages`,
  layouts: () => `${__dirname}/src/layouts`,
  setup: () => `${__dirname}/src/setup`,
  hasDir: (dir) => {
    const domains = isInitialised ? fs.readdirSync(path.resolve(__dirname, './src/bus')): [];
    return domains.some((d) => d === dir);
  },
  hasWorker: (dir) => {
    return fs.readdirSync(`${__dirname}/src/bus/${dir}`)
      .some((d)=>{
        return d === 'saga'
      })
  },
  hasSelectors: (dir) => {
    return fs.readdirSync(`${__dirname}/src/bus/${dir}`)
      .some((d)=>{
        return d === 'selectors.ts'
      })
  }
}
const isInitialised = root.includes('package.json')
let helpers = fns;
if(isInitialised) {
  const _ = require('lodash');
  helpers = {
    ...fns,
    toCapitalize: (str)=>str.split(' ').map((str)=>_.upperFirst(str)).join(''),
    toCamelCase: (str)=>_.camelCase(str.split(' ').join('-')),
    toLowerCase: (str)=>str.toLowerCase(),
  }
}

module.exports = {
  templates: `${__dirname}/.hygen`,
  helpers
}