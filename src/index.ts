import fs from 'fs';

const readPkgJson = (inCwdPath?: string) => {
  const cwd = inCwdPath || process.cwd();
  const pkgPath = `${cwd}/package.json`;
  const isExist = fs.existsSync(pkgPath);
  if (!isExist) throw new Error(`[readPkgJson] package.json not found at ${pkgPath}`);
  return JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
};

export default readPkgJson;
