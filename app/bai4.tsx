import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface CongViec {
  id: string;
  ten: string;
}

export default function TodoListScreen() {
  const [congViec, setCongViec] = useState('');
  const [danhSach, setDanhSach] = useState<CongViec[]>([]);

  const themCongViec = () => {
    if (congViec.trim() === '') {
      Alert.alert("Lỗi", "Tên công việc không được để trống.");
      return;
    }
    const newJob: CongViec = {
      id: Date.now().toString(),
      ten: congViec,
    };
    setDanhSach([...danhSach, newJob]);
    setCongViec('');
  };

  const xoaCongViec = (id: string) => {
    setDanhSach(danhSach.filter(item => item.id !== id));
  };
  
  const renderItem = ({ item }: { item: CongViec }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.ten}</Text>
      <TouchableOpacity onPress={() => xoaCongViec(item.id)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập công việc mới..."
            value={congViec}
            onChangeText={setCongViec}
          />
          <TouchableOpacity style={styles.addButton} onPress={themCongViec}>
            <Text style={styles.addButtonText}>Thêm</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={danhSach}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.emptyText}>Chưa có công việc nào.</Text>}
        />
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
      padding: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 8,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#BDC3C7',
    },
    addButton: {
      backgroundColor: '#8E44AD',
      padding: 15,
      borderRadius: 8,
      marginLeft: 10,
      justifyContent: 'center',
    },
    addButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
    itemText: {
      fontSize: 18,
    },
    deleteButton: {
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold',
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      color: 'gray',
    }
  });