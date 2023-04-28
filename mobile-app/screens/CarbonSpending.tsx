import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  Button,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  CreateSpendingMutation,
  CreateSpendingMutationVariables,
} from "../gql/graphql";

import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import Title from "../components/Title";

import DateTimePicker from "@react-native-community/datetimepicker";

const CREATE_SPENDING = gql`
  mutation CreateSpending(
    $title: String!
    $date: DateTime!
    $unit: Float!
    $weight: Float!
    $categoryName: String!
  ) {
    createSpending(
      title: $title
      date: $date
      unit: $unit
      weight: $weight
      categoryName: $categoryName
    ) {
      title
      date
      unit
      weight
      category {
        categoryName
      }
    }
  }
`;

export default function CarbonSpending({
  navigation,
}: RootTabScreenProps<"CarbonSpending">) {
  const [unit, setUnit] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [createSpending] = useMutation<
    CreateSpendingMutation,
    CreateSpendingMutationVariables
  >(CREATE_SPENDING);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const unitNumber = parseInt(unit);

  const weightCalculation =
    categoryName === "Avion"
      ? unitNumber * 0.3
      : categoryName === "Voiture"
      ? unitNumber * 0.1482
      : categoryName === "Train"
      ? unitNumber * 0.005
      : 0;

  const weight = parseInt(weightCalculation.toFixed(0));

  const submit = async () => {
    try {
      await createSpending({
        variables: {
          title,
          date,
          unit: unitNumber,
          weight,
          categoryName,
        },
      });
      setTitle("");
      setDate(new Date());
      setUnit("");
      setCategoryName("");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <Title
        title={"Ma dépense carbone"}
        subtitle={"Entrez votre dépenses.. (en deux clics max promis)"}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Titre</Text>

        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(texte: string) => {
            setTitle(texte);
          }}
        />
        <View style={styles.date}>
          <Text style={styles.title}>Date</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            locale="fr"
          />
        </View>
        <Text style={styles.title}>Categorie</Text>
        <Picker
          selectedValue={categoryName}
          style={{ marginTop: -20 }}
          onValueChange={(itemValue, itemIndex) => setCategoryName(itemValue)}
          itemStyle={{ fontSize: 18 }}
        >
          <Picker.Item label="Voiture" value="Voiture" />
          <Picker.Item label="Avion" value="Avion" />
          <Picker.Item label="Train" value="Train" />
        </Picker>

        <Text style={styles.title}>Unités (en km)</Text>
        <TextInput
          keyboardType="numeric"
          onBlur={() => Keyboard.dismiss()}
          style={styles.input}
          value={unit}
          onChangeText={(number: string) => {
            setUnit(number);
          }}
        />
        <View>
          <Text style={styles.title}>Consommation</Text>
          <Text style={styles.weight}>{weight ? weight : 0} KG/CO2</Text>
        </View>

        <View style={styles.button}>
          <Button color="white" title="Ajouter une dépense" onPress={submit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "5%",
  },
  input: {
    backgroundColor: "#c3e9ac",
    borderRadius: 4,
    marginBottom: 15,
    height: 25,
  },
  title: {
    color: "#609f39",
    fontWeight: "700",
    fontSize: 16,
  },
  date: {
    display: "flex",
    flexDirection: "column",
    marginRight: 100,
  },
  button: {
    backgroundColor: "#484b8a",
    borderRadius: 4,
    margin: 30,
  },
  weight: {
    margin: 3,
    color: "green",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
