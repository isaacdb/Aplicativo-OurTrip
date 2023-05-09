import { Text, View, StyleSheet, FlatList } from "react-native";
import PlanCard  from "../../components/PlanCard";
import { useState } from "react";
import Footer from "../../components/Footer";

const listaPlansAux = [
  {id: '1', value: 'Teste 1'},
  {id: '2', value: 'Teste 2'}
]

export default function PlansFeed({ navigation }) {
  const [listPlans, setListPlans] = useState(listaPlansAux);

  return (
    <View style={styles.container}>
          <FlatList
              vertical
              showsVerticalScrollIndicator = {false}
              onScrollAnimationEnd={false}
              style = { styles.contentList}
              data={listPlans}
              keyExtractor = {item => item.id}
              renderItem = {
                ({item})=>
                  (              
                    <PlanCard /*data = { item }*/ />
                  )
                }
                />
                      <Footer/>
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