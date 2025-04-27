import { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';

import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './src/constants/colorConstants';
import { styles } from "./src/styles/style"
import { Resumen } from "./src/components/Resumen"
import { Footer } from "./src/components/Footer"


export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(5);
  const [months, setMonths] = useState(12);

  // Calcular el monto en función del interés y el plazo, solo cuando se mueven los sliders
  const calculateAmount = (interest, months) => {
    return (interest / 100) * 10000 * months;
  };

  // Solo realiza el cálculo del monto si interest o months cambian
  useEffect(() => {
    const newAmount = calculateAmount(interest, months);
    setAmount(newAmount);
  }, [interest, months]);


  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />

      <SafeAreaView style={styles.container}>
        {/* Círculo de progreso */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>${amount.toLocaleString()}</Text>
          </View>
        </View>

        <Text style={styles.title}>Cotizador de Préstamos</Text>

        {/* Cantidad */}
        <Text style={styles.label}>Cantidad a solicitar</Text>
        <Slider
          containerStyle={styles.slider}
          minimumValue={1000}
          maximumValue={100000}
          step={500}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ccc"
          thumbTintColor={colors.primary}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
          value={amount}
          onValueChange={(value) => setAmount(value[0])}
        />

        {/* Interés */}
        <Text style={styles.label}>Interés anual: {interest}%</Text>
        <Slider
          containerStyle={styles.slider}
          minimumValue={1}
          maximumValue={30}
          step={0.5}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ccc"
          thumbTintColor={colors.primary}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
          value={interest}
          onValueChange={(value) => setInterest(value[0])}
        />

        {/* Plazo */}
        <Text style={styles.label}>Plazo (meses): {months} meses</Text>
        <Slider
          containerStyle={styles.slider}
          minimumValue={6}
          maximumValue={60}
          step={1}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#ccc"
          thumbTintColor={colors.primary}
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
          value={months}
          onValueChange={(value) => setMonths(value[0])}
        />

        {/* Resumen */}
        <Resumen amount={amount} interest={interest} months={months} />

      </SafeAreaView>

      <Footer />

    </>
  );
}