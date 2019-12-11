import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Main from './src/Components/Main';

export default class App extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return(
            <Main />
        );
    }
}
