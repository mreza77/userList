import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import colors from '../../config/colors';

const CustomLoading = () => {
    return (
        <View style={styles.indicator}>
            <ActivityIndicator size="large" color={colors.white} />
        </View>
    )
}

export default CustomLoading

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});