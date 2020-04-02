module.exports = {
  name: 'apps-sig-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/apps/sig-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
