import CardText from "@/components/CardText";
import MainImage from "@/components/MainImage";
import Skills from "@/components/Skills";

import { styles } from "@/static/styles";

import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <MainImage />
        <CardText />
        <Skills />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Подписаться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
