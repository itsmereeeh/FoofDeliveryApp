import React from "react";
import { View, Text, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { TextButton, LineDivider } from "../components";
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../constants";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      {/* Order Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <LineDivider />

        {/* Subtotal */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.h2 }}>Total:</Text>
          <Text style={{ ...FONTS.h2 }}>₱{total.toFixed(2)}</Text>
        </View>

        {/* Order */}
        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Complete order"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
