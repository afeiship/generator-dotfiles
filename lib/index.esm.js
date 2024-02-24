import { createRequire } from 'module';
import path from 'path';

export default function requirePkg(inPkgPath) {
  const __dirname = inPkgPath ? path.dirname(inPkgPath) : process.cwd();
  const require = createRequire(__dirname);
  return require(path.join(__dirname, 'package.json'));
}
