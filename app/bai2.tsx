import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AverageScoreScreen() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [diemTB, setDiemTB] = useState<number | null>(null);

  const tinhDiem = () => {
    const diemToan = parseFloat(toan);
    const diemLy = parseFloat(ly);
    const diemHoa = parseFloat(hoa);

    if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
      Alert.alert("Lỗi", "Vui lòng nhập đủ điểm 3 môn và đúng định dạng số.");
      return;
    }

    const tb = (diemToan + diemLy + diemHoa) / 3;
    setDiemTB(tb);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Điểm Toán</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={toan}
          onChangeText={setToan}
          placeholder="Nhập điểm Toán"
        />

        <Text style={styles.label}>Điểm Lý</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={ly}
          onChangeText={setLy}
          placeholder="Nhập điểm Lý"
        />

        <Text style={styles.label}>Điểm Hóa</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={hoa}
          onChangeText={setHoa}
          placeholder="Nhập điểm Hóa"
        />

        <TouchableOpacity style={styles.button} onPress={tinhDiem}>
          <Text style={styles.buttonText}>Tính điểm</Text>
        </TouchableOpacity>

        {diemTB !== null && (
          <Text style={styles.result}>
            Điểm trung bình của bạn là: {diemTB.toFixed(2)}
          </Text>
        )}
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
        justifyContent: 'center',
      },
      label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#2C3E50',
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#BDC3C7',
      },
      button: {
        backgroundColor: '#27AE60',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      result: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E74C3C',
      },
});