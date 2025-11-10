import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function BusinessCardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('./image.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Nguyễn Phếch Cơ</Text>
          <Text style={styles.jobTitle}>Tuyển thủ Liên Minh Huyền Thoại</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.contactInfo}>Email: nguyenvana@email.com</Text>
            <Text style={styles.contactInfo}>SĐT: 0123 456 789</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#3498DB',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  jobTitle: {
    fontSize: 18,
    color: '#7F8C8D',
    marginTop: 5,
    marginBottom: 20,
  },
  contactContainer: {
    marginTop: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: '#34495E',
    lineHeight: 24,
  },
});