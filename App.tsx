import React, {useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  View,
  TouchableOpacity,
  Text,
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
        <RNCamera
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          captureAudio={false} // Disable audio
        />

<View style={styles.buttonContainer}>
        {/* Horizontal Flip Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>↔</Text>
        </TouchableOpacity>
        {/* Vertical Flip Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>↕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hudContainer}>
        <Text style={styles.hudText}>| | | | | | N | | | | | | </Text>
      </View>

      <View style={styles.hudVerticalContainer}>

        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>45°</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>
        <Text style={styles.hudVerticalText}>-</Text>

      </View>
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

  buttonContainer: {
    position: 'absolute',
    top: 10, // Adjust the position as needed
    right: 10, // Adjust the position as needed
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  hudContainer: {
    position: 'absolute',
    bottom: 20, // Adjust to position the HUD at the bottom
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  hudText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a background for better visibility
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  hudVerticalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20, // Adjust to position the HUD on the left
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  hudVerticalText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a background for better visibility
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginVertical: 2,
    borderRadius: 3,
  },
});

export default App;
