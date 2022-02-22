import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../services/common.service";
import colors from '../config/colors';
import UserRenderItem from '../components/RenderItem/UserRenderItem';
import Screen from '../components/common/Screen';
import CustomLoading from '../components/common/CustomLoading';
import EditBottomSheet from '../components/BottomSheet/EditBottomSheet';
import { setUsers, getUser } from "../redux/reducers/userReducer";
import urls from '../services/urls.json';
import nouns from '../enums/nouns.json';

const HomeScreen = () => {
   const [visibleSheet, setVisibleSheet] = useState<boolean>(false)
   const [refresh, setRefresh] = useState<boolean>(false)

   const dispatch = useDispatch();
   const userData = useSelector(getUser);

   useEffect(() => {
      !userData && getUserList();
   }, []);

   const getUserList = async () => {
      dispatch(setUsers(await getData(urls.LISTING)))
   }

   return (
      <Screen>
         {!userData ?
            <CustomLoading></CustomLoading>
            :
            <FlatList
               style={styles.container}
               data={userData}
               renderItem={(item) => {
                  return (
                     <UserRenderItem
                        {...item}
                        onChangeSheet={() => setVisibleSheet(!visibleSheet)}
                     ></UserRenderItem>
                  )
               }}
               showsVerticalScrollIndicator={false}
               refreshControl={
                  <RefreshControl
                     refreshing={refresh}
                     onRefresh={() => getUserList()}
                     title={nouns["PULL.REFRESh"]}
                     tintColor={colors.white}
                     titleColor={colors.white}
                  />
               }
            />
         }
         <EditBottomSheet
            visibleSheet={visibleSheet}
         ></EditBottomSheet>
      </Screen>
   )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
      marginVertical: hp(2)
   }
});