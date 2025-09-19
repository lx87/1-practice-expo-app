import { IconSymbol } from "@/components/ui/icon-symbol";
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
          <Text style={styles.title}>Senior Frontend Developer</Text>
          <Text style={styles.bio}>
            Люблю Жену{" "}<IconSymbol size={14} name="heart.fill" color={"#FF2C68"} />, React и TypeScript. Разрабатываю приложения уже 2 года.
          </Text>
        </View>

        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>TypeScript + JavaScript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>React Native</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151718',
  },
  card: {
    backgroundColor: '#232323',
    borderRadius: 16,
    padding: 20,
    alignItems: 'flex-start',
    width: '80%',
    maxWidth: 400,
    //ios
    shadowColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: "white"
  },
  title: {
    fontSize: 16,
    color: '#CDCDCD',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#CDCDCD',
    textAlign: 'left',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  skill: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 4,
    fontSize: 14,
    color: '#eee',
  },
  button: {
    display: "flex",
    width: "100%",
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: "center",
  },
});
