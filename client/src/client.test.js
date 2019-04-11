import React from 'react';
import { shallow, mount, render } from 'enzyme';
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

// import Index from './Index.jsx';
import App from './App.jsx'
