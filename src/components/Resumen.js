import { View } from 'react-native';
import { Text, Paragraph } from 'react-native-paper';
import { styles } from '../styles/style_resumen';

export function Resumen({ amount, interest, months }) {
  return (
    <View style={styles.summary}>
      <Paragraph style={styles.paragraph}>
        <Text style={[styles.bold, styles.resumen]}>Monto: </Text>
        <Text style={styles.bold}>${amount.toLocaleString()}</Text>
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        <Text style={[styles.bold, styles.resumen]}>Interés: </Text>
        <Text style={styles.bold}>{interest}%</Text>
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        <Text style={[styles.bold, styles.resumen]}>Plazo: </Text>
        <Text style={styles.bold}>{months} meses</Text>
      </Paragraph>
    </View>
  )
}