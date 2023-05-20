import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

const DiagonalScreenDivision = ({navigation} : {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{ width: screenWidth * 0.9, height: screenHeight }}>
          <View style={{ height: screenHeight * 0.6 }}>
            <Text
              style={{
                color: "black",
                fontSize: 32,
                width: 200,
                fontWeight: "bold",
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              Welcome to Geimers
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 16,
                width: 200,
                marginTop: 10,
                marginHorizontal: 20,
                fontWeight: "400",
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity
              style={{
                width: 150,
                height: 30,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 10,
                marginHorizontal: 25,
              }}
              onPress={() => {navigation.navigate("Register")}}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Join Geimers now!
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.button,
                height: screenHeight * 0.07,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Sign in with Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.gray,
                height: screenHeight * 0.07,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Sign in with username
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 16,

                alignSelf: "center",
                marginVertical: 20,
              }}
            >
              or
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.button,
                  borderRadius: 50,
                  padding: 10,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="google" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.button,
                  borderRadius: 50,
                  padding: 10,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="apple1" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.button,
                  borderRadius: 50,
                  padding: 10,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="dots-three-horizontal" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.leftContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: screenWidth * 2,
    position: "relative",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: colors.highlight,
    transform: [{ rotate: "80deg" }, { translateX: -screenWidth * 1.3 }],
  },
  contentContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure content is above the background
    transform: [{ translateX: -screenWidth * 0.5 }],
    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },
});
export default DiagonalScreenDivision;
