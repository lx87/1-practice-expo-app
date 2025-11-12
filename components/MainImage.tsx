import { styles } from "@/static/styles";
import { Image } from 'react-native';

const MainImage = () => {
    return (
        <Image
            style={styles.avatar}
            source={require('@/assets/images/ava.jpg')}
        />
    );
};

export default MainImage;