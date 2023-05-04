import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'

const image = {uri: 'https://reactjs.org/logo-og.png'};

export function PlanCard() {
  return (
    <View style={styles.container}>      
      <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} source={image} resizeMode="cover" style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Rio de Janeiro</Text>
        <Text style={styles.subtitle}>2 Dias</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContent}>
            <Feather name="heart" size={32} color="black" />
            <Text style={styles.iconText}>920</Text>
          </View>
          <View style={styles.iconContent}>
            <Feather name="message-circle" size={32} color="black" />
            <Text style={styles.iconText}>562</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginTop: 16,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    image:{
      height: 210,
      flex:1,
      justifyContent: 'center',
    },
    infoContainer: {
      padding: 10,
      paddingLeft: 20
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
    },
    subtitle:{
      opacity: 0.5
    },
    iconsContainer:{
      paddingTop: 12,
      flexDirection: 'row'
    },
    iconContent:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 60
    },
    iconText:{
      paddingLeft: 12,
      opacity: 0.5,
    },
  });