import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const CardButtons = ({ handleDislike, handleLike }: { handleDislike: any, handleLike: any }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        width: width,
        height: height * 0.09,
      }}
    >
      <TouchableOpacity
        style={{
          borderColor: "green",
          borderWidth: 1,
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(1, 1, 1, 0.2)",
        }}
        onPress={() => {
          handleLike();
        }}
      >
        <AntDesign name="hearto" size={34} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(1, 1, 1, 0.2)",
        }}
        onPress={() => {
          handleDislike();
        }}
      >
        <AntDesign name="dislike1" size={34} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CardButtons;
