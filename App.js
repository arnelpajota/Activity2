import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,ImageBackground, View, Image } from "react-native";
import { styles } from "./src/style.js";
import Icon from "react-native-vector-icons/Entypo";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon name="menu" size={30} color="black" />
        <Text style={styles.title}>Google Classroom</Text>
        <Image
          style={styles.image}
          source={require("./src/image/nell.png")} // static image
        />
        <Icon name="dots-three-vertical" size={20} color="gray" />
      </View>
      <View style={styles.line} />
      <View style={styles.body1}>
        <View style={styles.body2}>
          <Text style={styles.week}>This week</Text>
          <Text style={styles.todo}>View to-do list</Text>
        </View>
        <View style={styles.body3}>
          <Text style={styles.num}>2</Text>
          <Text style={styles.num1}>assigned</Text>
          <Text style={styles.num}>0</Text>
          <Text style={styles.num1}>missed</Text>
        </View>
      </View>
      <ImageBackground
      source={require('./src/image/img_breakfast-modified.png')} // Replace with your image source
      style={styles.body6}>
        <View style={styles.body2}>
          <Text style={styles.subs}>Methods of Research</Text>
          <Icon name="dots-three-vertical" size={20} color="white" />
        </View>
        <View style={styles.body5}>
        <Text style={styles.year}>BSIT 3A</Text>
          <Text style={styles.teach}>Benjamin Omamalin</Text>
        </View>
        </ImageBackground>
        <ImageBackground
      source={require('./src/image/img_learnlanguage.jpg')} // Replace with your image source
      style={styles.body6}>
        <View style={styles.body2}>
          <Text style={styles.subs}>Information Assurance and S..</Text>
          <Icon name="dots-three-vertical" size={20} color="white" />
        </View>
        <View style={styles.body5}>
        <Text style={styles.year}>3A - 1st Sem (2023-2024)</Text>
          <Text style={styles.teach}>Jerry Ale</Text>
        </View>
        </ImageBackground>
        <ImageBackground
      source={require('./src/image/Geometry-modified.png')} // Replace with your image source
      style={styles.body6}>
        <View style={styles.body2}>
          <Text style={styles.subs}>IT 313</Text>
          <Icon name="dots-three-vertical" size={20} color="white" />
        </View>
        <View style={styles.body5}>
        <Text style={styles.year}>BSIT 3A</Text>
          <Text style={styles.teach}>Asuncion Paña</Text>
        </View>
        </ImageBackground>


        <ImageBackground
      source={require('./src/image/Geometry-modified.png')} // Replace with your image source
      style={styles.body6}>
        <View style={styles.body2}>
          <Text style={styles.subs}>3A-Logic design and Digital Computer...</Text>
          <Icon name="dots-three-vertical" size={20} color="white" />
        </View>
        <View style={styles.body5}>
        <Text style={styles.year}>1st Semester,A.Y.2023-24</Text>
          <Text style={styles.teach}>EDUARDO CARPIO</Text>
        </View>
        </ImageBackground>
        
    </View>
  );
}
