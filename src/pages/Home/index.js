import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Bem Vindo ao OurTrip</Text>
        <Button
          title="Explorar"
          onPress={() => navigation.navigate('PlansFeed')}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginVertical: 16,
    width:'100%',
  },
});