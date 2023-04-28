import { Button, StyleSheet, View } from "react-native";

import { Text } from "../Themed";
import { FontAwesome } from "@expo/vector-icons";

const SpendingCard = ({
  title,
  category,
  date,
  weight,
}: {
  title: string;
  category: string;
  date: string;
  weight: number;
}) => {
  return (
    <View style={styles.spendingCard}>
      {category === "Avion" ? (
        <FontAwesome name="plane" size={35} color="#484b8a" />
      ) : category === "Train" ? (
        <FontAwesome name="train" size={35} color="#484b8a" />
      ) : (
        <FontAwesome name="car" size={35} color="#484b8a" />
      )}

      <View>
        <Text style={styles.title}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.weight}>
          {category} - {weight} kg/C02
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spendingCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    color: "green",
    fontSize: 15,
  },
  weight: {
    color: "green",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default SpendingCard;
