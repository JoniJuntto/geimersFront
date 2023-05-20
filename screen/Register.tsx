import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../constants/colors";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Register = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: colors.text,
          fontSize: 32,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Complete your details to find geimers
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: colors.text, marginLeft: 5, marginBottom: 6 }}>
          Name
        </Text>
        <TextInput
          style={{
            color: colors.white,
            backgroundColor: colors.primary,
            width: screenWidth * 0.9,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Name"
          placeholderTextColor={colors.text}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: colors.text, marginLeft: 5, marginBottom: 6 }}>
          Username
        </Text>
        <TextInput
          style={{
            color: colors.white,
            backgroundColor: colors.primary,
            width: screenWidth * 0.9,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Username"
          placeholderTextColor={colors.text}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.button,
          height: screenHeight * 0.07,
          width: screenWidth * 0.9,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginTop: 60,
        }}
        onPress={() => {
          navigation.navigate("GameSelector");
        }}
      >
        <Text style={{ color: colors.text, fontWeight: "bold" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
