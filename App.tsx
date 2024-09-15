import React, {useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';

const App = () => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs access to your camera',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.log(err);
        }
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' && !__DEV__ ? (
        <RNCamera
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          captureAudio={false} // Disable audio
        />
      ) : (
        <Image
          style={{flex: 1}}
          source={{uri: 'https://via.placeholder.com/450'}} // Placeholder image URL
          resizeMode="cover"
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default App;
