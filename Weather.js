import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Weather extends Component {
    render(){
        return(
            <LinearGradient
                colors={["#00C6F8","#005BEA"]}
                style={styles.container}
            >
                <view style={styles.upper}>
                    <text>Icon here!</text>
                    <text>Temp here!</text>
                </view>
                <view style={styles.lower}>
                    <text style={styles.title}>Raining like a MF</text>
                    <text style={styles.subtitle}>For more info look outside</text>
                </view>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    contatiner: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    title: {},
    subtitle: {}

})