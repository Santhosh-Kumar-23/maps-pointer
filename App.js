import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

export const App = () => {
  const LATITUDE = 13.0827;
  const LONGITUDE = 80.2784;

  const googleMapsDeepLink = `geo:0,0?q=${LATITUDE},${LONGITUDE}`; // Use chosen format

  const handleOpenGoogleMaps = () => {
    Linking.canOpenURL(googleMapsDeepLink)
      .then(() => Linking.openURL(googleMapsDeepLink))
      .catch(() => alert('Google Maps not installed'));
  };

  return (
    <>
      <Button title="Open Google" onPress={handleOpenGoogleMaps} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default App;
