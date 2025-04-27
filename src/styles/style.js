import { StyleSheet } from 'react-native';
import { colors, buttonStyle, circleStyle, circleTextStyle, progressBarStyle } from '../constants/colorConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center',  // centra horizontalmente
  },
  safeArea: {
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: colors.darkGray,
    alignSelf: 'flex-start',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  button: buttonStyle,
  circleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: circleStyle,
  circleText: circleTextStyle,
  progressBar: progressBarStyle,

  footer: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleNext: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center', // Centrar el contenido verticalmente
    alignItems: 'center', // Centrar el contenido horizontalmente
    marginLeft: 10,
  },
  statusBar: {
    backgroundColor: colors.primary,
  },
  sliderTrack: {
    height: 10,  // Línea más gruesa
    borderRadius: 5,
  },
  sliderThumb: {
    height: 24,
    width: 24,
    backgroundColor: colors.primary,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
  }
});