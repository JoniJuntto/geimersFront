import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { colors } from "../constants/colors";
import valorant from "../assets/valorant1.png";
import lol from "../assets/lol.png";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GameSelector = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth,
        height: screenHeight,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontWeight: "bold",
          fontSize: 32,
          textAlign: "center",          
          marginHorizontal: 20,
        }}
      >
        Please select your favorite games
      </Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        <TextInput
          style={{
            color: colors.white,
            backgroundColor: colors.primary,
            width: screenWidth * 0.9,
            height: 50,
            borderRadius: 50,
            paddingLeft: 10,
          }}
          placeholder="Search"
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            alignContent: "flex-start",
            width: screenWidth,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image source={valorant} style={{ width: 80, height: 80 }} />
          <Text style={{ color: colors.text, fontSize: 22 }}>Valorant</Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
            marginVertical: 20,
          }}
        ></View>
        <TouchableOpacity
          style={{
            display: "flex",
            alignContent: "flex-start",
            width: screenWidth,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image source={lol} style={{ width: 150, height: 80 }} />
          <Text style={{ color: colors.text, fontSize: 22 }}>
            League of Legends
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.button,
          height: screenHeight * 0.07,
          width: screenWidth * 0.9,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          position: "absolute",
          bottom: 20,
        }}
        onPress={() => {
          navigation.navigate("Tabs");
        }}
      >
        <Text style={{ color: colors.text, fontWeight: "bold" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameSelector;
