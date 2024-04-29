import {
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-native-sdk';
  

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY || '';
const userId = 'danh';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGFuaCJ9.U052zr7AAuznZF7uCn2xc12b8vHxXGE9L7NCB_vqw9U';
const user: User = { id: userId };

export const client = new StreamVideoClient({ apiKey, user, token });