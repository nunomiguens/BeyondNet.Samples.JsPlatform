import injector from 'vue-inject';
import axios from 'axios';

injector.constant('apiRoot', 'http://www.fake.com/api');
injector.constant('axios', axios);