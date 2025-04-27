import { StyleSheet } from 'react-native';
import { colors, buttonStyle, circleStyle, circleTextStyle, progressBarStyle } from './colorConstants';

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
  resumen: {
    fontSize:20,
  },
  label: {
    fontSize: 16,
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
  summary: {
    width: "100%",
    marginTop: 20,
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
  },
  paragraph: {
    marginBottom: 8,
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: "#333",
  },
  footer: {
    width: '100%',
    height: 80,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleNext: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: 'center', // Centrar el contenido verticalmente
    alignItems: 'center', // Centrar el contenido horizontalmente
    marginLeft: 10,
  },
  statusBar: {
    backgroundColor: colors.primary,
  }
});