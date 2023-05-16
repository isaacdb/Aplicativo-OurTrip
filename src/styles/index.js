import { StyleSheet } from 'react-native';

export const stylesCards = StyleSheet.create({
    containerCard: {
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
      },
      imageCard:{
        height: 210,
        flex:1,
        justifyContent: 'center',
      },
      infoContainerCard: {
        padding: 10,
        paddingLeft: 20
      },
      titleCard: {
        fontSize: 22,
        fontWeight: "bold",
      },
      subtitleCard:{
        opacity: 0.5
      },
      iconsContainerCard:{
        paddingTop: 12,
        flexDirection: 'row'
      },
      iconContentCard:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 60
      },
      iconTextCard:{
        paddingLeft: 12,
        opacity: 0.5,
      },      
})