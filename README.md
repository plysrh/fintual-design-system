# design-system

Design system

## Notas

- Tengo experiencia con React, pero no con React Native.
- Me imaginaba haciendo un proyecto con Vite en modo librería, pero no, habían muchos más detalles.
- Tuve que hacer toda una investigación sobre el ecosistema alrededor de React Native.
- Según la misma documentación de React Native, [create-react-native-library](https://github.com/callstack/react-native-builder-bob) es una buena manera para partir la construcción de una librería multiplataforma desde cero.
- Viendo la naturaleza de los estilos en React Native, me dí cuenta que una buena opción sería utilizar styled components, ya que es algo similar, o sea, usando objetos literales.
- De ahí en adelante hice una implementación para manejar el tema y esquema de colores del design system basándome en ideas de Emotion, Material-UI y Tailwind.
- Me acordé del componente [Typography de Material-UI](https://mui.com/material-ui/react-typography/) para implementar el mío propio.

### Cosas que me hubiesen gustado

- Quería proporcionar dos enfoques distintos.
- Me gusta mucho Tailwind y la forma en como maneja los estilos.
- Durante mi investigación encontré [Nativewind](https://www.nativewind.dev/) y le estuve dando una vuelta.
- Mi idea era aprovechar la facilidad de los className para manejar los esquemas de colores ([dark mode](https://v3.tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)), pero me enredé en la configuración de Nativewind.
- Quizás en una siguiente iteración pueda implementar una alternativa usando ese enfoque.

## How to see the library working

```bash
# To install the dependencies
yarn

# And then...
yarn example web
```
