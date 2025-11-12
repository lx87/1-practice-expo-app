import { styles } from "@/static/styles";
import { Text, View } from 'react-native';

const Skills = () => {
    return (
        <View style={styles.skillsContainer}>
            <Text style={styles.skill}>TypeScript + JavaScript</Text>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>Rust</Text>
            <Text style={styles.skill}>Tauri 2.0</Text>
            <Text style={styles.skill}>Electron JS</Text>
            <Text style={styles.skill}>UI/UX</Text>
        </View>
    );
};

export default Skills;