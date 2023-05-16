import { Text, View, StyleSheet } from "react-native";

export default function PlanView({route, navigation}) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
        <Text>TELA VIAGEM PARA {data.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 16,
      width:'100%',
    },
    contentList: {
    }
  });