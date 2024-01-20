import loadPkg from 'js-yaml';
import { readFileSync } from 'fs';
import { env } from 'process';
import pkg from 'lodash';
const { load } = loadPkg;
const { get } = pkg;

/**
 * Used to read and parse YAML files.
 * So that it can be used to put Locator, Element, Test Data and others
 * @param {string} path1 path to folder yml file
 * @param {string} path2 path to yml file
 */
function loadYaml (path1, path2) {
  const path = readFileSync('./resources/' + path1 + '/' + path2 + '.YAML');
  try {
    return load(path);
  } catch (e) {
    throw new Error(`Failed to read config file, your path! ${path}`);
  }
}

/**
 * Used to map Element paths
 * @param {string} locator path element
 */
function parseElement (locator) {
  const path1 = 'selector';
  const getkey = locator.split(':');
  const yamlData = loadYaml(path1, getkey[0]);
  let key;
  if (env.platformType === 'ios') {
    key = getkey[1] + '.ios';
  } else if (env.platformType === 'android') {
    key = getkey[1] + '.android';
  }
  try {
    return get(yamlData, key);
  } catch (e) {
    throw new Error('element not found');
  }
}

/**
 * Used to map Test Data or Local Data paths
 * @param {string} testData path data
 */
function keyData (testData) {
  const path1 = 'test_data';
  const getkey = testData.split(':');
  const yamlData = loadYaml(path1, getkey[0]);
  let key;
  try {
    key = getkey[1];
    return get(yamlData, key);
  } catch (e) {
    throw new Error('Test data not found');
  }
}
/**
 * Used to map Element paths
 * @param {string} locator path element
 */
function keyElement (locator) {
  const parseKey = parseElement(locator).split(' => ');
  const cond = parseKey[0];
  const key = parseKey[1];
  let keyCond;

  switch (cond) {
    case 'By.xpath':
      return key;
    case 'By.id':
      keyCond = 'id=' + key;
      return keyCond;
    case 'By.accessibility_id':
      keyCond = '~' + key;
      return keyCond;
    default:
      throw new Error('Unknown selector!');
  }
}

export { keyElement, keyData };
