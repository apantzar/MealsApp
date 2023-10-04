import { View, Text, StyleSheet } from "react-native";
function MealsOverViewScreen(){
    return<View style={styles.container}>
        <Text>This is a second screen</Text>
    </View>
};

export default MealsOverViewScreen;

styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    }
})