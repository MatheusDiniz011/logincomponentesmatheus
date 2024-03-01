import { StyleSheet } from "react-native";
const img1 = { uri: 'https://pt.wikipedia.org/wiki/Foca#/media/Ficheiro:B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg' }

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input2: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    width: '100%',
    backgroundColor: 'gray',

    marginBottom: 10

  },
  Button: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,


  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    height: '100%',
    width: '100%',

  },


  imageText: {
    color: 'Black',
    fontSize: 58,
  },
});