import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { AppTextBold } from "../components/ui/AppTextBold";
import { THEME } from "../theme";

export const DatePickerHeader = ({ title, back }) => {
  const daysName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          onPress={back}
          underlayColor={THEME.GREY_COLOR_LIGHT}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 20
          }}
        >
          <Ionicons name="arrow-back" size={25} color={THEME.GREY_COLOR} />
        </TouchableHighlight>

        <AppTextBold
          style={{
            marginLeft: 20,
            fontSize: 19,
            color: THEME.GREY_COLOR,
            letterSpacing: 0.5
          }}
        >
          {title}
        </AppTextBold>
      </View>

      <View style={styles.daysname}>
        {daysName.map((day) => (
          <Text key={day}>{day}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 5
  },
  header: { flexDirection: "row", alignItems: "center" },
  daysname: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 15
  }
});
