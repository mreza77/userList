import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomBottomSheet from '../common/CustomBottomSheet';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import nouns from '../../enums/nouns.json';
import { getSelectedUser, updateUsers } from "../../redux/reducers/userReducer";
import colors from '../../config/colors';

const EditBottomSheet = ({ visibleSheet }: any) => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const [close, setClose] = useState<boolean>(false)

    const userData = useSelector(getSelectedUser);
    const dispatch = useDispatch();

    useEffect(() => {
        setFirstName(userData?.first_name)
        setLastName(userData?.last_name)
        setEmail(userData?.email)
        setClose(false)
    }, [userData]);

    return (
        <CustomBottomSheet
            visibleSheet={visibleSheet}
            closeSheet={close}
        >
            <View>
                <CustomTextInput
                    inputName={nouns["INPUT.FIRST.NAME"]}
                    onChangeText={(text: string) => setFirstName(text)}
                    value={firstName}
                ></CustomTextInput>
                <CustomTextInput
                    inputName={nouns["INPUT.LAST.NAME"]}
                    onChangeText={(text: string) => setLastName(text)}
                    value={lastName}
                ></CustomTextInput>
                <CustomTextInput
                    inputName={nouns["INPUT.EMAIL"]}
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                ></CustomTextInput>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        text={nouns["DEFAULT.SAVE"]}
                        onPress={() => {
                            dispatch(updateUsers({
                                avatar: userData?.avatar,
                                first_name: firstName,
                                last_name: lastName,
                                id: userData?.id,
                                email
                            }))
                            setClose(true)
                        }}
                        style={styles.button}
                    ></CustomButton>
                </View>
            </View>

        </CustomBottomSheet>
    )
}

export default EditBottomSheet

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        marginTop: hp(4)
    },
    button: {
        width: wp(90),
        height: hp(5),
        backgroundColor: colors.success,
        borderWidth: 0
    }
});