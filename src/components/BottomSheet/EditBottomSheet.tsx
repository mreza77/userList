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
    const [data, setData] = useState({} as any)
    const [close, setClose] = useState<boolean>(false)

    const userData = useSelector(getSelectedUser);
    const dispatch = useDispatch();

    useEffect(() => {
        setData({
            avatar: userData?.avatar,
            first_name: userData?.first_name,
            last_name: userData?.last_name,
            id: userData?.id,
            email: userData?.email
        })
        return () => { setClose(false) }
    }, [userData]);

    const saveData = () => {
        dispatch(updateUsers(data))
        setClose(true)
    }

    return (
        <CustomBottomSheet
            visibleSheet={visibleSheet}
            closeSheet={close}
        >
            <View>
                <CustomTextInput
                    inputName={nouns["INPUT.FIRST.NAME"]}
                    onChangeText={(text: string) => setData({ ...data, first_name: text })}
                    value={data?.first_name}
                ></CustomTextInput>
                <CustomTextInput
                    inputName={nouns["INPUT.LAST.NAME"]}
                    onChangeText={(text: string) => setData({ ...data, last_name: text })}
                    value={data?.last_name}
                ></CustomTextInput>
                <CustomTextInput
                    inputName={nouns["INPUT.EMAIL"]}
                    onChangeText={(text: string) => setData({ ...data, email: text })}
                    value={data?.email}
                ></CustomTextInput>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        text={nouns["DEFAULT.SAVE"]}
                        onPress={() => saveData()}
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