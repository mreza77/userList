import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';
import CustomText from './CustomText';

interface buttonProps {
    onPress: () => void,
    text: string,
    style?: any
}

const CustomButton = ({ onPress, text, style }: buttonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style ? style : null]}
        >
            <CustomText>{text}</CustomText>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        borderRadius: wp(2),
        borderColor: colors.light,
        borderWidth: wp(0.2),
        width: wp(22),
        height: hp(3.8),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp(0.8),
        marginHorizontal: wp(2)
    }
});