import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import {
  StreamCall,
  CallContent,
  useStreamVideoClient
} from '@stream-io/video-react-native-sdk';

const callId = 'default_b6f42015-e7b6-4506-b316-ea9c0c4b9c2e';

export default function ModalScreen() {

  const client = useStreamVideoClient();

  const [call] = useState(() => client?.call('default', callId));

  useEffect(() => {
    call?.join({ create: true });
  }, [call]);

  if(!call) {
    return <Text>Call Not Found</Text>
  }

  return (
    <View style={styles.container}>
        <StreamCall call={call}>
          <CallContent />
        </StreamCall>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})