import { gql, useQuery } from "@apollo/client";
import { Key, useEffect } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Get_SpendingQuery } from "../gql/graphql";

import { RootTabScreenProps } from "../types";
import SpendingCard from "../components/SpendingCard/SpendingCard";
import Title from "../components/Title";
import Moment from "moment";

export const GET_SPENDING = gql`
  query GET_SPENDING {
    spendings {
      category {
        categoryName
      }
      date
      id
      localizedDate
      title
      unit
      weight
    }
  }
`;

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const { loading, data, error, refetch } = useQuery<Get_SpendingQuery>(
    GET_SPENDING,
    { fetchPolicy: "no-cache" }
  );

  return (
    <View style={styles.container}>
      <Title
        title={"Mon tableau de bord"}
        subtitle={"Visualisez en temps réel vos dépenses carbones"}
      />
      <View style={styles.button}>
        <Button
          color="white"
          onPress={() => refetch()}
          title="Recharger la liste des dépenses"
        />
      </View>
      <ScrollView style={styles.wilderList}>
        {data?.spendings.map((spending) => (
          <View key={spending.id}>
            <SpendingCard
              title={spending.title}
              category={spending.category.categoryName}
              date={Moment(spending.date).locale("fr").format("d MMMM YYYY")}
              weight={spending.weight}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  wilderList: {
    padding: 12,
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#484b8a",
    borderRadius: 4,
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 15,
    width: 300,
    display: "flex",
    alignContent: "center",
  },
});
