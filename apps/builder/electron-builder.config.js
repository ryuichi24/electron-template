/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: "com.juniordevmind",
  productName: "Electron Template",
  copyright: "Copyright © 2023 ${author}",
  // Whether to package the application’s source code into an archive
  asar: true,
  directories: {
    output: "release/${version}",
  },
  extraMetadata: {
    main: "dist/main/index.js",
  },
  files: [
    {
      from: "dist",
      filter: ["dist/main/assets/**/*"],
    },
  ],
  extraResources: [
    {
      from: "dist/main/assets",
      to: "assets",
      filter: ["**/*"],
    },
  ],
  publish: [
    {
      provider: "github",
      owner: "ryuichi24",
      repo: "electron-template",
      // to use private repository
      private: true,
      // to publish it to private repository and make it auto updater work as well
      token: process.env.GH_TOKEN,
    },
  ],
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64"],
      },
    ],
    artifactName: "${productName}-Windows-${version}-Setup.${ext}",
    icon: "dist/main/assets/icons/logo/windows/logo.ico",
  },
  mac: {
    target: [
      {
        // "default" produces zip a file along with dmg
        // should be "default" for auto updater
        target: "default",
        arch: ["arm64", "x64"],
      },
    ],
    artifactName: "${productName}-Mac-${version}-Installer.${ext}",
    icon: "dist/main/assets/icons/logo/mac/logo.icns",
    // name of the certificate to sign the electron app
    // without this, the application cannot be launched in a mac machine
    // and "arm64" and "x64" mac app build will fail
    identity: process.env.CERT_NAME,
  },
  linux: {
    target: ["AppImage", "deb"],
    artifactName: "${productName}-Linux-${version}.${ext}",
  },
  icon: "dist/main/assets/icons/logo/linux/logo.png",
};

module.exports = config;
