function readPkgJson(inPkgPath) {
  const pkgPath = inPkgPath ? require.resolve(inPkgPath) : require.resolve('package.json');
  return require(pkgPath);
}

module.exports = readPkgJson;
