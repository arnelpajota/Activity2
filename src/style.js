import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    padding: 15,
    marginTop: 20,
    height: 70,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 0.5,
    backgroundColor: "#9e9e9e",
  },
  title: {
    flex: 1,
    textAlign: "left",
    fontSize: 25,
    marginLeft: 20,
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius:50,

  },
  body1: {
    height: 108,
    padding: 15,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "column",
  },
  body2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  body3: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  body4: {
    height: 110,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#9e9e9e",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  body5: {
    flexDirection: "column",
    alignItems: 'flex-start',
   
  },
  body6: {
    height: 140,
    padding: 15,
    margin: 10,
    borderRadius: 50,
    resizeMode: 'cover',
    flexDirection: "column",
    
  },
  week: {
    flex: 1,
    fontSize: 20,
  },
  todo: {
    color: "#1d73e3",
  },
  num: {
    fontSize: 30,
  },
  num1: {
    marginLeft: 10,
    marginRight: 10,
  },
  subs:{
    flex: 1,
    fontSize: 23,
    color: 'white'
  },
  teach:{
    marginTop: 40,
    color: 'white'
  },
  year:{
    color: "white",
   
  }
});
