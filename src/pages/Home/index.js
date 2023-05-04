import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PlansFeed } from '../PlansFeed';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PlansFeed/>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});