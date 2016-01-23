module.exports = function(config) {
  config.set({

    basePath: './',
    frameworks: ['jasmine', 'sinon'],

    files: [
      'angular-class.coffee',
      'angular-class-test.coffee',
    ],

    exclude: [],

    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: true,
      },

      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js')
      }
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
