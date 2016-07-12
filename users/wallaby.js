module.exports = function (wallaby) {
  //noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction
  return {
    //bootstrap: function () {
     // require('expectations');
    //},

    localProjectDir: "users",

    files: [
     // {pattern: 'test/**'},
      {pattern: 'src/**/*.ts'},
      {pattern: 'src/**/*.json'},
      {pattern: '**/*.yml'},
      {pattern: 'src/**/*.spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/tests/**/*.spec.ts'}
    ],

  //  compilers: {
  //    '**/*.ts': wallaby.compilers.typeScript({module: 1, target: 2})
  //  },

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};