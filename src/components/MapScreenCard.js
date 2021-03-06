import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../theme";
import { AppStars } from "./ui/AppStars";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { LikeAnimation } from "./LikeAnimation";

const CARD_WIDTH = 350;

export const MapScreenCard = ({ rate, title, price, stars, isLiked }) => {
  const [isLike, setIsLiked] = useState(isLiked);
  const likeAnimateRef = useRef();
  const isFirstAnimate = useRef(true);

  useEffect(() => {
    if (isFirstAnimate.current) {
      isFirstAnimate.current = false;
      return isLike
        ? likeAnimateRef.current.play(144, 144)
        : likeAnimateRef.current.play(40, 40);
    }
    isLike
      ? likeAnimateRef.current.play(80, 146)
      : likeAnimateRef.current.play(10, 80);
  }, [isLike]);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {title}
          </Text>

          <AppStars stars={stars} />

          <View style={{ flexDirection: "row" }}>
            <AppText style={styles.cardRate}>{rate}</AppText>
            <AppText style={styles.cardRateText}> Замечательно</AppText>
          </View>
          <View style={{ marginTop: "auto", alignItems: "flex-end" }}>
            <AppTextBold
              style={{
                fontSize: 16,
                color: "#10ba35"
              }}
            >
              {price} UAH
            </AppTextBold>

            <AppTextBold style={{ color: THEME.GREY_COLOR }}>
              Booking.com
            </AppTextBold>
          </View>
        </View>
        <Image
          source={{
            uri: "https://pix6.agoda.net/hotelImages/189/189984/189984_14100914030022645655.jpg"
          }}
          style={{ width: "45%", height: "100%" }}
        />
        <LikeAnimation
          ref={likeAnimateRef}
          change={() => setIsLiked(!isLike)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    flexDirection: "row",
    height: 200,
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    overflow: "hidden",
    marginHorizontal: 10
  },
  cardContent: {
    width: "55%",
    padding: 15
  },
  cardTitle: {
    fontFamily: "roboto-bold",
    color: THEME.BLACK_COLOR,
    fontSize: 16
  },
  cardRate: {
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "#10ba35",
    paddingHorizontal: 5,
    overflow: "hidden",
    fontSize: 14,
    fontWeight: "bold"
  },
  cardRateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#10ba35"
  }
});
