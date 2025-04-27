import { StyleSheet } from 'react-native';
import { colors } from '../constants/colorConstants';

export const styles = StyleSheet.create({
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
    resumen: {
        fontSize: 20,
    },
});