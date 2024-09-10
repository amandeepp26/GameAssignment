import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../Utils/Colors';
import { Icon } from 'react-native-elements';

function Header({title,navigation,showBack}) {
  return (
    <View style={style.container}>
      {showBack &&
      <TouchableOpacity onPress={()=>{
        navigation.goBack()
      }} >
      <Icon name="arrow-back-outline" type='ionicon' size={20}/>
      </TouchableOpacity>
      }
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection:'row',
    paddingVertical: 15,
    gap:20,
    borderBottomWidth: 1,
    borderColor: colors.headerBorder,
    paddingHorizontal:20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
});
