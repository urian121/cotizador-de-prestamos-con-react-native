# Cotizador de Préstamos con React Native

## Descripción

El **Cotizador de Préstamos** es una aplicación móvil construida con **React Native** que permite a los usuarios calcular el monto de un préstamo según diferentes parámetros, tales como la cantidad solicitada, el interés anual y el plazo en meses. Los usuarios pueden interactuar con sliders para ajustar estos valores y ver un resumen al final, junto con un botón para "Solicitar Préstamo".

## **Vista previa**

<img src="https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/cotizador-prestamos-react-native.png" alt="Vista Previa" width="400" />

## Tecnologías utilizadas

Esta aplicación está construida utilizando las siguientes tecnologías y librerías:

- **React Native**: Framework principal para desarrollar la aplicación móvil.
- **React Native Paper**: Librería para crear componentes de interfaz de usuario modernos y consistentes como botones y texto.
- **React Native Safe Area Context**: Asegura que el contenido de la app no se sobreponga a las áreas no accesibles de la pantalla, como las de la barra de estado o los bordes redondeados en dispositivos modernos.
- **@miblanchard/react-native-slider**: Librería para implementar sliders (controles deslizantes) interactivos para seleccionar valores.
- **React Native Vector Icons**: Usada para los íconos (en este caso, el ícono de avance para el botón).
- **StatusBar**: Permite personalizar la barra de estado para mejorar la apariencia visual.
- **useState**: Hook de React para manejar el estado de la aplicación.

## Características principales

- **Controles deslizantes**: Permiten ajustar la cantidad de dinero solicitado, el porcentaje de interés y el plazo en meses.
- **Resumen interactivo**: Muestra el resumen de los valores seleccionados por el usuario, como el monto, el interés y el plazo.
- **Botón de solicitud de préstamo**: Al presionar el botón, se puede simular el envío de una solicitud de préstamo, acompañado de un ícono de avance.
- **Círculo de progreso**: Muestra el monto solicitado dentro de un círculo, con el valor actual visualmente destacado.
- **Estilos personalizados**: La interfaz tiene un diseño adaptado y atractivo utilizando `React Native Paper` y `react-native-vector-icons`.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   https://github.com/urian121/cotizador-de-prestamos-con-react-native.git
   ```

2. **Instalar las dependencias**:
   Asegúrate de tener **Node.js** y **npm** o **yarn** instalados. Luego, instala las dependencias con el siguiente comando:
   ```bash
   npm install
   ```

   o si usas **Yarn**:
   ```bash
   yarn install
   ```

3. **Ejecutar la aplicación**:
   Una vez que todas las dependencias estén instaladas, ejecuta la aplicación en un dispositivo o emulador con el siguiente comando:
   ```bash
   npx react-native run-android  # Para Android
   npx react-native run-ios      # Para iOS
   ```

## Uso

Una vez que la aplicación esté en ejecución, podrás interactuar con los siguientes elementos:

1. **Cantidad solicitada**: Usa el slider para ajustar el monto del préstamo solicitado (rango entre $1,000 y $100,000).
2. **Interés anual**: Ajusta el interés anual mediante otro slider (rango entre 1% y 30%).
3. **Plazo en meses**: Ajusta el plazo del préstamo en meses mediante un tercer slider (rango entre 6 y 60 meses).
4. **Resumen**: Una vez que se ajusten los valores, verás un resumen con la información de monto, interés y plazo.
5. **Solicitar préstamo**: Al presionar el botón de "Solicitar Préstamo", el usuario verá el ícono de avance en el botón, y se puede simular que el préstamo se ha solicitado.

## Personalización

Puedes personalizar los colores y otros elementos visuales cambiando las propiedades en el archivo `style.js`, que contiene los estilos de la aplicación. Aquí puedes ajustar:

- **Colores de los sliders**: `minimumTrackTintColor`, `maximumTrackTintColor`, `thumbTintColor`.
- **Colores de los botones**: El color de fondo del botón, el texto y el ícono de avance.


## 🙌 Cómo puedes apoyar 📢:

✨ **Comparte este proyecto** con otros desarrolladores para que puedan beneficiarse 📢.

☕ **Invítame un café o una cerveza 🍺**:
   - [Paypal](https://www.paypal.me/iamdeveloper86) (`iamdeveloper86@gmail.com`).

### ⚡ ¡No olvides SUSCRIBIRTE a la [Comunidad WebDeveloper](https://www.youtube.com/WebDeveloperUrianViera?sub_confirmation=1)!


#### ⭐ **Déjanos una estrella en GitHub**:
   - Dicen que trae buena suerte 🍀.
**Gracias por tu apoyo 🤓.**