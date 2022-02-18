import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../config/colors';
import CustomModal from '../common/CustomModal';
import CustomText from '../common/CustomText';
import nouns from '../../enums/nouns.json';
import CustomButton from '../common/CustomButton';

interface modalProps {
    isVisible: boolean,
    onClose: () => void,
    onChange: () => void,
}

const DeleteModal = ({ isVisible, onClose, onChange }: modalProps) => {

    return (
        <>
            <CustomModal
                isVisible={isVisible}
                overlayStyle={styles.container}
                onHide={() => onClose()}
                animationType={"slide"}
            >
                <View style={styles.modal}>
                    <CustomText style={styles.headerText}>{nouns["LAYOUT.MODAL.DELETE.TEXT"]}</CustomText>
                    <View style={styles.buttonContiner}>
                        <CustomButton
                            text={nouns["DEFAULT.YES"]}
                            onPress={() => {
                                onChange()
                                onClose()
                            }}
                        ></CustomButton>
                        <CustomButton
                            text={nouns["DEFAULT.NO"]}
                            onPress={() => onClose()}
                        ></CustomButton>
                    </View>
                </View>

            </CustomModal>
        </>
    )
}

export default DeleteModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: wp(65),
        borderRadius: wp(2),
        backgroundColor: colors.bgModalColor,
        alignItems: "center"
    },
    headerText: {
        marginTop: hp(2),
        fontWeight: "bold",
        fontSize: wp(4.5)
    },
    buttonContiner: {
        flexDirection: "row-reverse",
        marginTop: hp(3.5),
        marginBottom: hp(2)
    }
});