import React from "react";
import { View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from "./colors";

const toastConfig = {
   success: ({ text2 }) => (
      <View
         style={{
            height: hp(10),
            width: wp(90),
            backgroundColor: colors.success,
            borderRadius: wp(1.5),
            justifyContent: "center",
         }}
      >
         <Text
            style={{
               fontSize: wp(3.8),
               color: colors.white,
               marginLeft: wp(4),
               width: wp(82),
               textAlign: "right"
            }}
            numberOfLines={2}
         >
            {text2}
         </Text>
      </View>
   ),
   error: ({ text2 }) => (
      <View
         style={{
            height: hp(10),
            width: wp(90),
            backgroundColor: colors.danger,
            borderRadius: wp(1.5),
            justifyContent: "center",
         }}
      >
         <Text
            style={{
               fontSize: wp(3.8),
               color: colors.white,
               marginLeft: wp(4),
               width: wp(82),
               textAlign: "right"
            }}
            numberOfLines={2}
         >
            {text2}
         </Text>
      </View>
   ),
};

export default toastConfig;
