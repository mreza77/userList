import React, { CSSProperties } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

interface screenProps {
    children: React.ReactNode
}
const Screen = ({ children }: screenProps) => {
    return (
        <>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor={colors.bgColor}
            ></StatusBar>
            <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
        </>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
        backgroundColor: colors.bgColor,
        flex: 1,
    }
});