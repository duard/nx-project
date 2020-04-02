module.exports = {
  name: 'ng-ui-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/ui-material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
