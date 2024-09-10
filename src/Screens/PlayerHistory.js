import {StyleSheet, Text, View} from 'react-native';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {colors} from 'react-native-elements';

function PlayerHistory({navigation}) {
  const route = useRoute();
  const item = route.params.item;
  console.warn('item is--->', item);

  const getBackgroundColor = result => {
    let color = 'white';
    if(result == 'win'){
        return (color = '#90EE90');
    }
    else if(result == 'loss'){
        return (color = 'red')
    }
    return color;
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} showBack={true} title={item.name} />
      <View style={{paddingLeft: 20, paddingVertical: 20}}>
        <Text style={styles.subText}>Matches</Text>
      </View>
      {item.matches.map(key => {
        return (
          <View
            style={[styles.card,{backgroundColor:getBackgroundColor(key.result)}]}>
            <Text style={{color: colors.black}}>{key.player1.name}</Text>
            <Text style={{color: colors.black}}>
              {key.player1.points} - {key.player2.points}
            </Text>
            <Text style={{color: colors.black}}>{key.player2.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
export default PlayerHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subText: {fontSize: 18, color: colors.black, fontWeight: '500'},
  card: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});
