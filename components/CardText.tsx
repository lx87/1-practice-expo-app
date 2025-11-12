import { styles } from "@/static/styles";
import { Text, View } from 'react-native';
import { IconSymbol } from "./ui/icon-symbol";

const CardText = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.name}>Рами Лайли</Text>
            <Text style={styles.title}>Senior Fullstack Developer</Text>
            <Text style={styles.bio}>
                Люблю Жену{" "}<IconSymbol size={14} name="heart.fill" color={"#FF2C68"} />, React и TypeScript. Разрабатываю приложения уже 2 года.
            </Text>
        </View>
    );
};

export default CardText;