import React from "react";
import { View, Image, TouchableOpacity, FlatList, Text } from "react-native";

import { Header, IconButton, TextButton, CouponCard } from "../../components";
import {
  COLORS,
  SIZES,
  icons,
  FONTS,
  images,
  dummyData,
} from "../../constants";

const Coupon = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = React.useState("available");
  const [coupons, setCoupons] = React.useState(dummyData.availableCoupons);

  function renderHeader() {
    return (
      <Header
        title="MY OFFERS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <TouchableOpacity
            onPress={() => console.log("Account")}
          ></TouchableOpacity>
        }
      />
    );
  }

  function renderCoupons() {
    return (
      <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "500",
            marginTop: 190,
          }}
        >
          Ohh snap! No offers yet
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            paddingHorizontal: 90,
            marginTop: 10,
          }}
        >
          Bella doesn't have any offers yet please check again.{" "}
        </Text>
      </View>
    );
  }
  // function renderFooter() {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: "row",
  //         height: 120,
  //         alignItems: "center",
  //         paddingHorizontal: SIZES.padding,
  //         paddingBottom: SIZES.radius,
  //       }}
  //     >
  //       <TextButton
  //         buttonContainerStyle={{
  //           flex: 1,
  //           flexDirection: "row",
  //           height: 60,
  //           marginLeft: SIZES.radius,
  //           paddingHorizontal: SIZES.radius,
  //           borderRadius: SIZES.radius,
  //           backgroundColor: COLORS.primary,
  //         }}
  //         label="Add to cart"
  //         onPress={() => navigation.navigate("MyCart")}
  //       />
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      {renderCoupons()}
      {/* {renderFooter()} */}
    </View>
  );
};

export default Coupon;
