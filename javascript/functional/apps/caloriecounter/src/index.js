import initiModel from './Model';
import update from './Update';
import view from './View';
import app from './App';
import initModel from './Model';

const node = document.getElementById('app');

app(initModel, update, view, node);
