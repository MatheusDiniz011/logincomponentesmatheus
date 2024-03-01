import { View, Text, Image } from 'react-native';
import { styles } from '../styles/estilos';
const img = { uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fsearch%2Fprojects%2Fja%2520morant%2520wallpaper&psig=AOvVaw2TcAyGSQvUhIJZ4KjxzAev&ust=1709384977962000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCpnsyR04QDFQAAAAAdAAAAABAx' };


export default function LoginImage() {
    return (
        <View>
            <Image
                style={styles.img}
                source={img}
            />

        </View>
    )
}