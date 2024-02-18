import React from 'react';
import { View, Button, Linking } from 'react-native';

const Home = () => {
  const handleButtonClick = () => {
    // Перенаправляем пользователя по ссылке
    Linking.openURL('https://bbaj2jurd9aa33qlds8g.containers.yandexcloud.net/');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Авторизация" onPress={handleButtonClick} />
    </View>
  );
};

export default Home;
