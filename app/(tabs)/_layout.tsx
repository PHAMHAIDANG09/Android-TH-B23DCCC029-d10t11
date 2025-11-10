
import { TabBarIcon } from '@/components/TabBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Ẩn header mặc định
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Thời tiết',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloud' : 'cloud-outline'} color={color} />
          ),
        }}
      />
      {/* Bạn có thể thêm các màn hình khác ở đây nếu muốn */}
    </Tabs>
  );
}