import {View, Text, StatusBar, StyleSheet} from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={"dark-content"}
          showHideTransition={'none'}
          hidden={false}/>
          
        <Text style={styles.title}>EXPLORAR!</Text>
        <Text style={styles.subtitle}>Roteiros em destaque</Text>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 24,
      paddingBottom: 12,
      flexDirection: "column",
      paddingStart: 16,
      paddingEnd: 16,
      width: '100%'
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold'
    },
    subtitle:{
      fontSize: 16
    }
  });