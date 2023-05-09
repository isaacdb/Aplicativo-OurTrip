import { View, StyleSheet, Text,  } from "react-native";
import { Feather } from '@expo/vector-icons'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Feather name="search" size={32} color="black" />
      <Feather name="plus-circle" size={32} color="black" />
      <Feather name="user" size={32} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 48,
      paddingRight: 48,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingStart: 16,
      paddingEnd: 16,
      width: '100%'
    },
  });