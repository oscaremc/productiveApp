/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
require('./database');

AppRegistry.registerComponent(appName, () => App);
