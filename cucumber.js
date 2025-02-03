module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/steps/**/*.ts',
      'src/utils/**/*.ts'
    ],
    paths: ['src/features/'],
    format: [
      'progress-bar',
      'html:cucumber-report.html'
    ],
    timeout: 30000
  }
};
