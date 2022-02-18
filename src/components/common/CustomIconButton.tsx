import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';

interface buttonProps {
    uri: any,
    styleIcon: any,
    onPress: () => void
}

const CustomIconButton = ({ uri, styleIcon, onPress }: buttonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <Image
                source={uri}
                style={styleIcon}
                resizeMode={"contain"}
            ></Image>
        </TouchableOpacity>
    )
}

export default CustomIconButton

const styles = StyleSheet.create({
    container: {
        borderRadius: wp(2),
        borderColor: colors.light,
        borderWidth: wp(0.2),
        width: wp(7.5),
        height: wp(7.5),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp(0.8)
    }
});