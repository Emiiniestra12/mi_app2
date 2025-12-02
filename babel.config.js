// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // otros plugins aquí si los tienes
      'react-native-reanimated/plugin', // <- debe ir al final
    ],
  };
};