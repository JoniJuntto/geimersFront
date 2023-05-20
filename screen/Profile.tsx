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

const Profile = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text
        style={{
          color: colors.text,
          fontWeight: "bold",
          fontSize: 32,
          textAlign: "center",
          marginHorizontal: 20,
        }}
      >
        Profile
      </Text>
    </View>
  );
};

export default Profile;
