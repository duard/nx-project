module.exports = {
  name: 'ng-pages',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/pages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
