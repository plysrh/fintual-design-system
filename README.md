# fintual-design-system

Design system for Fintual

## Notas

- Tengo experiencia con React, pero no con React Native.
- Me imaginaba haciendo un proyecto en Vite en modo librería, pero no, habían muchos más detalles.
- Tuve que hacer toda una investigación sobre el ecosistema alrededor de React Native.
- Según la misma documentación de React Native, [create-react-native-library](https://github.com/callstack/react-native-builder-bob) es una buena forma para partir la construcción de una librería desde cero.
- Viendo como React Native maneja los estilos me dí cuenta que una buena opicón sería utilizar styled components mediante Emotion, ya que es algo similar, o sea, usando objetos literales.
- De ahí en adelante hice una implementación para manejar el tema y esquema de colores del design system basándome en ideas de Emotion, Material-UI y Tailwind.
- Me acordé del componente [Typography de Material UI](https://mui.com/material-ui/react-typography/) para implementar el mío propio.

### Cosas que me hubiesen gustado

- Quería proporcionar dos enfoques distintos.
- Me gusta mucho Tailwind y la forma en que se manejan los estilos en ese enfoque.
- Durante mi investigación encontré a [Nativewind](https://www.nativewind.dev/) y le estuve dando una vuelta.
- Mi idea era aprovechar la facilidad de las classNames para manejar los esquemas de colores ([dark mode](https://v3.tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)), pero me enredé en la configuración de Nativewind.
- Quizás en una siguiente iteración pueda implementar una alternativa usando ese enfoque.
