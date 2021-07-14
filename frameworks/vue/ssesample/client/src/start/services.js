import injector from 'vue-inject';
import DefaultMessageBuilder from './DefaultMessageBuilder';
import HtmlMessageBuilder from './HtmlMessageBuilder';

injector.service('messageBuilder', HtmlMessageBuilder);