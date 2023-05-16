import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";
import Footer from "../../components/Footer";
import { Feather } from '@expo/vector-icons'
import { stylesCards } from "../../styles";

const listaPlansAux = [
  {
    nome: "Rio de Janeiro",
    curtidas: 4500,
    comentarios: 1200,
    dias: 5,
    imagemUrl: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg"
  },
  {
    nome: "Paris",
    curtidas: 3500,
    comentarios: 800,
    dias: 7,
    imagemUrl: "https://thumbcdn-5.hotelurbano.net/lf5vWi8SpTp22QrPt5jUpzzEIns=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/02/14/14/48/autumn_in_paris.jpg_s_1024x1024_w_is_k_20_c_e2s3UeMlGijhWzbIENTI_wgbsifUZpDCEu8Amyiq1xM___1_.jpg"
  },
  {
    nome: "Sydney",
    curtidas: 2500,
    comentarios: 500,
    dias: 10,
    imagemUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F36588442%2F108919755319%2F1%2Foriginal.jpg?w=512&auto=format%2Ccompress&q=75&sharp=10&s=e27e7ed6c506d21eb2e1395dc6329142'
  }
]

const image = {uri: 'https://reactjs.org/logo-og.png'};

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
                    <View style={stylesCards.containerCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('PlanView', {data: item})}>
                      <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} source={{uri:item.imagemUrl}} resizeMode="cover" style={stylesCards.imageCard}/>
                    </TouchableOpacity>     
                    <View style={stylesCards.infoContainerCard}>
                      <TouchableOpacity>
                        <Text style={stylesCards.titleCard}>{item.nome}</Text>
                      </TouchableOpacity>
                      <Text style={stylesCards.subtitleCard}>{item.dias} Dias</Text>
                      <View style={stylesCards.iconsContainerCard}>
                        <View style={stylesCards.iconContentCard}>
                          <Feather name="heart" size={32} color="black" />
                          <Text style={stylesCards.iconTextCard}>{item.curtidas}</Text>
                        </View>
                        <View style={stylesCards.iconContentCard}>
                          <Feather name="message-circle" size={32} color="black" />
                          <Text style={stylesCards.iconTextCard}>{item.comentarios}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
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