import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "../styles/style"

export const Footer = () => {
  return (
       <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
          <Button
            mode="contained"
            onPress={() => { }}
            style={styles.button}
            labelStyle={{ fontSize: 16 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 20 }}>Solicitar Préstamo</Text>

              <View style={styles.circleNext}>
                <Icon name="arrow-forward" size={25} color="#6200ee" />
              </View>
            </View>
          </Button>
        </View>
      </View>
  )
}