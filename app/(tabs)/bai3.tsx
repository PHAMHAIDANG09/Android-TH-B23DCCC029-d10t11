import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChangeColorScreen() {
  const [mauNen, setMauNen] = useState('#FFFFFF');

  const doiMauNgauNhien = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setMauNen(randomColor);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: mauNen }]}>
      <View style={styles.container}>
        <View style={[styles.colorBox, { backgroundColor: mauNen }]}>
           <Text style={styles.colorCode}>{mauNen}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={doiMauNgauNhien}>
          <Text style={styles.buttonText}>Đổi màu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  colorBox: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: '#ECF0F1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  colorCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#E67E22',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});