import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';
import CustomText from './CustomText';

interface inputProps {
    inputName?: string,
    value?: string,
    onChangeText?: (text: string) => void
}

const CustomTextInput = ({ onChangeText, inputName, value }: inputProps) => {
    return (
        <>
            <CustomText style={styles.text}>{inputName}</CustomText>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.container}
                    onChangeText={onChangeText}
                    value={value}
                ></TextInput>
            </View>
        </>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        height: hp(5),
        borderColor: colors.light,
        borderWidth: wp(0.1),
        borderRadius: wp(2),
        marginTop: hp(1),
        paddingHorizontal: wp(3),
        color: colors.white
    },
    inputContainer: {
        alignItems: "center"
    },
    text: {
        marginLeft: wp(5),
        marginTop: hp(1.5)
    }
});