import os from 'os';
import fn from '../src';

const homedir = os.homedir();

describe('api.basic', () => {
  test('not cwd path', () => {
    const pkg = fn();
    expect(pkg).toBeTruthy();
    expect(pkg.name).toBe('@jswork/read-pkg-json');
  });

  test('special cwd path', () => {
    const pkg = fn(`${homedir}/github/mac-settings`);
    expect(pkg).toBeTruthy();
    expect(pkg.name).toBe('mac-settings');
  });

  test('error cwd path should throw err', () => {
    // error should include [readPkgJson] package.json not found
    expect(() => {
      fn(`${homedir}/github/mac-settings-xxx`);
    }).toThrow();
  });
});
