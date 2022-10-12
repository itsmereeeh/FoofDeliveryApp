import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { MainLayout } from "../screens";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />

      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 80,
          padding: 60,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius,
          }}
        >
          <CustomDrawerItem
            label="Profile"
            icon={icons.location}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("MyAccount");
            }}
          />
          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.height > 800 ? SIZES.radius : 0,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
              opacity: 0.5,
            }}
          />

          <CustomDrawerItem
            label="Orders"
            icon={icons.cart}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("MyCart");
            }}
          />
          <View
            style={{
              height: 1,
              marginVertical: SIZES.height > 800 ? SIZES.radius : 0,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
              opacity: 0.5,
            }}
          />

          <CustomDrawerItem
            label="Offers and Promo"
            icon={icons.coupon}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Coupon");
            }}
          />

          <View
            style={{
              height: 1,
              marginVertical: SIZES.height > 800 ? SIZES.radius : 0,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
              opacity: 0.5,
            }}
          />
          <CustomDrawerItem label="Privacy policy" icon={icons.privacy} />
          <View
            style={{
              height: 1,
              marginVertical: SIZES.height > 800 ? SIZES.radius : 0,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
              opacity: 0.5,
            }}
          />
          <CustomDrawerItem label="Security" icon={icons.help} />
        </View>

        <View
          style={{
            marginBottom: SIZES.height > 800 ? SIZES.padding : 0,
          }}
        >
          <CustomDrawerItem
            label="Sign-Out"
            icon={icons.logout}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("SignIn");
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
