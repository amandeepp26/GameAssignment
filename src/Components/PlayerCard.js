import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../Utils/Colors';

function PlayerCard({item,navigation}) {
  return (
    <View>
      <Pressable onPress={()=>navigation.navigate('PlayerHistory',{item:item})} style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            style={{width: 80, height: 80}}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.count}>{item.matchPlayed}</Text>
      </Pressable>
    </View>
  );
}
export default PlayerCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.headerBorder,
  },
  name: {fontSize: 18, fontWeight: '400', color: colors.black},
  count: {fontSize: 20, fontWeight: 'bold', color: colors.black},
});
