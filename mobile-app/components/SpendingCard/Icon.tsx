import { FontAwesome } from "@expo/vector-icons";

export default function Icon({ name }: { name: "check" }) {
  return (
    <FontAwesome
      name={name}
      size={25}
      color={"white"}
      style={{ marginRight: 15 }}
    />
  );
}
