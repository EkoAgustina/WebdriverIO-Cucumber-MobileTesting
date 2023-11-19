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
function loadYaml(path1, path2) {
  let path = readFileSync('./resources/' + path1 + '/' + path2 + '.YAML');
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
function parse_element(locator) {
  let path1 = 'selector';
  let getkey = locator.split(':');
  let yamlData = loadYaml(path1, getkey[0]);
  let key;
  if (env.platformType === 'ios') {
    key = getkey[1]+'.ios';
  }
  else if(env.platformType === 'android') {
    key = getkey[1]+'.android';
  }
  try {
    return get(yamlData, key);
  } catch (e) {
    throw new Error('element not found');
  }
}

/**
 * Used to map Test Data or Local Data paths
 * @param {string} test_data path data
 */
function key_data(test_data) {
  let path1 = 'test_data';
  let getkey = test_data.split(':');
  let yamlData = loadYaml(path1, getkey[0]);
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
function key_element(locator) {
  let parse_key = parse_element(locator).split(' => ');
  let cond = parse_key[0];
  let key = parse_key[1];
  let key_cond;

  switch (cond) {
    case 'By.xpath':
      return key;
      break;
    case 'By.id':
      key_cond = 'id=' + key;
      return key_cond;
      break;
    case 'By.accessibility_id':
      key_cond = '~' + key;
      return key_cond;
      break;
    default:
      throw new Error('Unknown selector!');
  }
}

export { key_element, key_data };
