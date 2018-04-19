import React from 'react';
import {
    render
} from 'react-dom';
import Name from './name';

render( < Name / > , document.getElementById('app'), function () {
    console.log('OK!!!!!!!!');
})