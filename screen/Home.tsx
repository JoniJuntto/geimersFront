import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import CardButtons from "../components/CardButtons";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
  const swiperRef = useRef(null);
  const [swipedAll, setSwipedAll] = useState(false);
  const cards = [
    {
      name: "Mikko",
      age: 25,
      bio: "Olen Mikko ja tykkään koirista",
      pic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Tero",
      age: 25,
      bio: "Olen Mikko ja tykkään koirista",
      pic: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Leena",
      age: 25,
      bio: "Olen Mikko ja tykkään koirista",
      pic: "https://randomuser.me/api/portraits/women/17.jpg",
    },
  ];

  const handleDislike = () => {
    swiperRef.current.swipeLeft();
  };
  const handleLike = () => {
    swiperRef.current.swipeRight();
  };

  return (
    <>
      {swipedAll ? (
        <View
          style={{
            width: width,
            height: height,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="sad" size={124} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              width: width * 0.7,
            }}
          >
            All cards swiped, please try again later
          </Text>
        </View>
      ) : (
        <View
          style={{
            width: width,
            height: height,
            flex: 1,
            borderWidth: 1,
            borderColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Swiper
            ref={swiperRef}
            cards={cards}
            showSecondCard={true}
            verticalSwipe={false}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Image
                    source={{ uri: card.pic }}
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: "rgba(1, 1, 1, 0.5)",
                      width: width,
                      height: height * 0.2,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={styles.text}>{card.name}</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.text,
                        textAlign: "center",
                      }}
                    >
                      {card.bio}
                    </Text>
                  </View>
                </View>
              );
            }}
            onSwiped={(cardIndex) => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              setSwipedAll(true);
            }}
            cardIndex={0}
            backgroundColor={"#000000"}
            stackSize={3}
          ></Swiper>
          <View style={styles.cardButtonsContainer}>
            <CardButtons
              handleDislike={handleDislike}
              handleLike={handleLike}
            />
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {},
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  cardButtonsContainer: {
    position: "absolute",
    bottom: 30,
  },
});

export default HomeScreen;
