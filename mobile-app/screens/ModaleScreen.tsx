import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Title from "../components/Title";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenue sur Wild Carbon pour suivre vos dépenses carbones !
      </Text>
      <View style={styles.subtitle}>
        <Title
          title={"Pourquoi s'engager ?"}
          subtitle={"Prenez conscience de votre impact sur la planète"}
        />
      </View>
      <View style={styles.bloc}>
        <Text style={styles.textBloc}>Entrez dans une démarche de progrès</Text>
      </View>
      <View style={styles.bloc}>
        <Text style={styles.textBloc}>Moins d'émissions, plus d'économies</Text>
      </View>
      <View style={styles.bloc}>
        <Text style={styles.textBloc}>
          Participez aux enjeux pour sauver la planète
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
    color: "#484b8a",
  },
  subtitle: {
    marginBottom: 20,
  },
  bloc: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderRadius: 10,
    minWidth: "90%",
    minHeight: "10%",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textBloc: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});
