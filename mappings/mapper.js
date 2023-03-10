const yaml = require('js-yaml');
const fs = require('fs');
const lodash = require('lodash');

/**
 * Used to read and parse YAML files.
 * So that it can be used to put Locator, Element, Test Data and others
 * @param {string} path1 path to folder yml file
 * @param {string} path2 path to yml file
 */
function loadYaml (path1,path2){
    let path = fs.readFileSync('./'+path1+'/'+path2+'.YAML')
    try{
        return yaml.safeLoad(path);
    } catch(e){
        throw new Error('Failed to read config file, your path!');
    }

}

/**
 * Used to map Element paths
 * @param {string} locator path element
 */
function parse_element (locator) {
    let path1 = 'selector'
    let getkey = locator.split(':')
    yamlData = loadYaml(path1,getkey[0])
    let key
    try{
        key = getkey[1]
        return lodash.get(yamlData,key)
    } catch(e){
        throw new Error('element not found')
    }
}

/**
 * Used to map Test Data or Local Data paths
 * @param {string} test_data path data
 */
function key_data (test_data) {
    let path1 = 'resources'
    let getkey = test_data.split(':')
    yamlData = loadYaml(path1,getkey[0])
    let key
    try{
        key = getkey[1]
        console.log(lodash.get(yamlData,key))
        return lodash.get(yamlData,key)
    } catch(e){
        throw new Error('Test data not found')
    }
}
/**
 * Used to map Element paths
 * @param {string} locator path element
 */
function key_element(locator){
    let parse_key = parse_element(locator).split(' => ')
    let cond = parse_key[0]
    let key = parse_key[1]
    let key_cond

    switch(cond){
        case 'By.xpath':
            console.log('By.xpath: ',key)
            return key
        break
        case 'By.id':
            key_cond = "id="+key
            console.log('By.id: ',key_cond)
            return key_cond
        break
        case 'By.accessibility_id':
            key_cond = "~"+key
            console.log('By.accessibility_id: ',key_cond)
            return key_cond
        break
        default:
            throw new Error('Unknown selector!')
    }
}

module.exports = {
    key_element,
    key_data
}