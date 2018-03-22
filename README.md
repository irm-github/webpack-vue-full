# webpack-vue-full
> A template is constructed by webpack, supporting vue and dll.

## Usage
Download or clone this repo to your local directory.

Enter your local repo directory.

### Install dependencies
Install the dependencies of the repo:
```bash
$ npm install
```

### Start developing the project
Launch the devServer and start the project:
```bash
$ npm run dllDev:start
```

> Attention: the npm script named 'dllDev' should just run for one time which can save the webpack's packing time during the developing. So you can run `npm start` directly behind.

### Build the project to production
Build the project after development:
```bash
$ npm run dllProd:build
```

> Attention: the npm script named 'dllProd' should just run for one time which can save the webpack's packing time during the building. So you can run `npm run build` directly behind.

### Build the project to development for analyze
When you wanna analyze the project so as to improve the quality of the production code:
```bash
$ npm run dllProd:analyze
```

> Attention: the npm script named 'dllProd' should just run for one time which can save the webpack's packing time during the building for analyze. So you can run `npm run analyze` directly behind.

### Attention!
When you modified the 'webpack.common.config.js' or 'weboack.dll.config.js', you should run `npm run dllDev` or `npm run dllProd` to generate new dll file.
