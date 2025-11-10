// app/(tabs)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Trang chủ - Chọn bài tập',
        }}
      />
      <Stack.Screen
        name="bai1"
        options={{
          headerTitle: 'Bài 1: Danh thiếp cá nhân',
        }}
      />
       <Stack.Screen
        name="bai2"
        options={{
          headerTitle: 'Bài 2: Tính điểm trung bình',
        }}
      />
       <Stack.Screen
        name="bai3"
        options={{
          headerTitle: 'Bài 3: Đổi màu nền',
        }}
      />
       <Stack.Screen
        name="bai4"
        options={{
          headerTitle: 'Bài 4: Danh sách công việc',
        }}
      />
    </Stack>
  );
}