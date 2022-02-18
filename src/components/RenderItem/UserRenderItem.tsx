import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from "react-redux";

import CustomText from '../common/CustomText';
import CustomIconButton from '../common/CustomIconButton';
import DeleteModal from '../modal/DeleteModal';
import { selectUser, deleteUsers } from "../../redux/reducers/userReducer";

interface itemProps {
    item: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    },
    onChangeSheet?: () => void
}

const UserRenderItem = ({ item, onChangeSheet }: itemProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const dispatch = useDispatch();

    return (
        <>
            <DeleteModal
                isVisible={visibleModal}
                onClose={() => setVisibleModal(false)}
                onChange={() => dispatch(deleteUsers(item))}
            ></DeleteModal>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                        source={{ uri: item?.avatar }}
                        style={styles.image}
                        resizeMode={"contain"}
                    ></Image>
                    <View style={styles.main}>
                        <CustomText>{item?.email}</CustomText>
                        <CustomText style={styles.text}>{item?.first_name} {item?.last_name}</CustomText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomIconButton
                            uri={require("../../../assets/icon/delete.png")}
                            styleIcon={{
                                width: wp(5),
                                height: wp(5)
                            }}
                            onPress={() => setVisibleModal(true)}
                        ></CustomIconButton>
                        <CustomIconButton
                            uri={require("../../../assets/icon/edit.png")}
                            styleIcon={{
                                width: wp(3),
                                height: wp(3)
                            }}
                            onPress={() => {
                                onChangeSheet()
                                dispatch(selectUser(item))
                            }}
                        ></CustomIconButton>
                    </View>
                </View>
            </View >
        </>
    )
}

export default UserRenderItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: hp(1)
    },
    box: {
        width: wp(90),
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    image: {
        width: wp(17),
        height: wp(17),
        borderRadius: wp(10)
    },
    main: {
        alignItems: "flex-end",
        paddingHorizontal: wp(5)
    },
    text: {
        marginTop: hp(1)
    },
    buttonContainer: {
        flex: 1
    }
});