import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import RTNDeviceName from 'rtn-device-name/js/NativeDeviceName';

export const DeviceName = () => {
  const [deviceName, setDeviceName] = useState<string | undefined>('');

  const getDeviceName = useCallback(async () => {
    const theDeviceName = await RTNDeviceName?.getDeviceName();
    setDeviceName(theDeviceName);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getDeviceName} style={styles.button}>
        <Text style={styles.buttonText}>Get Device Name</Text>
      </TouchableOpacity>

      <Text style={styles.deviceName}>{deviceName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  deviceName: {
    fontSize: 20,
    marginTop: 10,
  },
});
