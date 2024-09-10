import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { colors } from "../Utils/Colors";
import PlayerCard from "../Components/PlayerCard";
import { players } from "../Utils/Players";

function PlayerList ({navigation}) {

    const playersData = players.sort((player1, player2) => player2.matchPlayed - player1.matchPlayed);

    return (
      <View style={styles.container}>
        <Header navigation={navigation} showBack={false} title="Star Wars Blaster Tournament" />
        <View
          style={{
            backgroundColor: colors.lightGray,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.subText}>Points Table</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          {playersData.map(item => {
            return <PlayerCard item={item} navigation={navigation} />;
          })}
        </View>
      </View>
    );
}

export default PlayerList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    subText:{fontSize:17,color:colors.black,fontWeight:'400'}
})