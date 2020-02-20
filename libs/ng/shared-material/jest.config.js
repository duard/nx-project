module.exports = {
  name: 'ng-shared-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/shared-material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
