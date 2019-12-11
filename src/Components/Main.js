import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/Main.Style';

export default class Main extends Component {
    render() {
        return (
            <View style = {styles.verticalContainer}>
                <View style = {styles.horizontalContainer}>
                    <Text style = {styles.headerText}>Nolava</Text>
                </View>
                <View style = {styles.mainContainer}>
                    <View style = {styles.horizontalContainer}>
                        <Text style = {styles.content}>Press Start to Play</Text>
                    </View>
                </View>
            </View>
        );
    }
}