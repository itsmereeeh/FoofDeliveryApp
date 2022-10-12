import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import {
  Header,
  IconButton,
  CartQuantityButton,
  IconLabel,
  LineDivider,
  Rating,
  StepperInput,
  TextButton,
} from "../../components";
import {
  FONTS,
  SIZES,
  COLORS,
  icons,
  images,
  dummyData,
} from "../../constants";

const FoodDetail = ({ navigation, route }) => {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [foodItem, setFoodItem] = React.useState([]);
  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    let { foodItem } = route.params;
    setFoodItem(foodItem);
  }, []);

  // Render

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
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
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories & Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                height: 20,
                width: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: "100%",
            }}
          />
        </View>

        {/* Food Info */}
        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          {/* Name & Description */}
          <Text style={{ ...FONTS.h1, textAlign: "center" }}>
            {foodItem?.name}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.red,
              textAlign: "center",
              ...FONTS.body3,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ₱350
          </Text>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text
              style={{
                fontWeight: "bold",

                marginTop: SIZES.base,
                textAlign: "justify",
                ...FONTS.body3,
              }}
            >
              Delivery Policy
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.darkGray,
                textAlign: "justify",
                ...FONTS.body3,
              }}
            >
              A popular spice and vegetables mixed favoured rice dish which is
              typically prepared by layering the biryani gravy and basmati rice
              in flat bottom vessel.
            </Text>
            <Text
              style={{
                fontWeight: "bold",

                marginTop: 20,
                textAlign: "justify",
                ...FONTS.body3,
              }}
            >
              Return Policy
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.darkGray,
                textAlign: "justify",
                ...FONTS.body3,
              }}
            >
              A popular spice and vegetables mixed favoured rice dish which is
              typically prepared by layering the biryani gravy and basmati rice
              in flat bottom vessel.
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      ></View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />

        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Add to cart"
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      <ScrollView>
        {/* Food Details */}
        {renderDetails()}

        <LineDivider />

        {/* Restaurant */}
        {renderRestaurant()}
      </ScrollView>

      {/* Footer */}
      <LineDivider />

      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
