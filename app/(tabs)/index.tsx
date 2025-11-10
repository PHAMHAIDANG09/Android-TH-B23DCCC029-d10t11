import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Chọn Bài Tập</Text>

        <Link href="/bai1" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bài 1 – Danh thiếp cá nhân</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/bai2" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bài 2 – Tính điểm trung bình</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/bai3" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bài 3 – Đổi màu nền</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/bai4" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bài 4 – Danh sách công việc</Text>
          </TouchableOpacity>
        </Link>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2C3E50',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});