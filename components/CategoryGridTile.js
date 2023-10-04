import {
  Pressable,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <SafeAreaView>
      <View style={styles.gridItem}>
        <Pressable
          android_ripple={{ color: "ccc" }}
          style={({ pressed }) => [styles.btnStyle, pressed ? styles.buttonPressed : null]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, {backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  gridItem: {
    flex: 1,
    margin: 25,
    height: 150,
    width: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "#f2f2f7",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8
  },
  btnStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
export default CategoryGridTile;
