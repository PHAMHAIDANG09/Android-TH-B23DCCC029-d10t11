import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Dòng này nói với app rằng có một nhóm màn hình (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Dòng này cho màn hình modal (nếu có) */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}