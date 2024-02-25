import React, { useState } from 'react';
import { View, Button, Linking } from 'react-native';

const Home = () => {
  const [clickedOnce, setClickedOnce] = useState(false);

  const handleButtonClick = () => {
    Linking.openURL('https://bbafh181etqbgd6296bm.containers.yandexcloud.net/getcalmar');
  };

  const handleTelegramButtonClick = () => {
    if (clickedOnce) {
      Linking.openURL('https://bba3icajjuulniimgp15.containers.yandexcloud.net/getcalmar');
    } else {
      Linking.openURL('https://oauth.telegram.org/auth?bot_id=7122476551&origin=https%3A%2F%2Fbba3icajjuulniimgp15.containers.yandexcloud.net&embed=1&request_access=write&return_to=https%3A%2F%2Fbba3icajjuulniimgp15.containers.yandexcloud.net%2Fgetcalmar');
      setClickedOnce(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title=" Авторизация через Яндекс " onPress={handleButtonClick} />
      <View style={{ marginTop: 10 }}></View>
      <Button title="Авторизация через Telegram" onPress={handleTelegramButtonClick} />
    </View>
  );
};

export default Home;
