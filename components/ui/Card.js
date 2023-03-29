import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 26,
    borderRadius: 8,
    marginTop: deviceWidth < 380 ? 28 : 36,
    backgroundColor: Colors.primary800,
    elevation: 4, // android
    shadowColor: "black", // IOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
