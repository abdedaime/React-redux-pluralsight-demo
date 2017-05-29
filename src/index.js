/**
 * Created by habdedaime on 24/05/2017.
 */
import 'babel-polyfill';
import  React from 'react';
import  {render} from 'react-dom';
import {Router,browserHistory} from  'react-router';
import routes from './routes'
import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Router history={browserHistory} routes={routes}/>,
  document.getElementById('app'));

