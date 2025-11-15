import { styles } from "@/static/styles";
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={require('@/assets/images/ava.jpg')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Рами Лайли</Text>
          <Text style={styles.title}>Senior Fullstack Developer</Text>
          <Text style={styles.bio}>
            Люблю Жену, React и TypeScript. Разрабатываю приложения уже 2 года.
          </Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>TypeScript + JavaScript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Rust</Text>
          <Text style={styles.skill}>Tauri 2.0</Text>
          <Text style={styles.skill}>Electron JS</Text>
          <Text style={styles.skill}>UI/UX</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Подписаться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
