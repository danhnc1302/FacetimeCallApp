import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed';
import {
    StreamCall,
    useStreamVideoClient,
    useCalls,
    RingingCallContent,
    CallTopView
} from '@stream-io/video-react-native-sdk';
import { router } from "expo-router";

const callId = 'default_b6f42015-e7b6-4506-b316-ea9c0c4b9c2e';

export default function ModalScreen() {

    const [loaded, setLoaded] = useState(false);

    const client = useStreamVideoClient();
    const calls = useCalls();
    const call = calls[0];

    useEffect(() => {
        if (!call && loaded) {
            return router.back();
        }
        if (call && !loaded) {
            setLoaded(true);
        }
    }, [call]);

    if (!call) {
        return <Text>Call not found!</Text>;
    }


    return (
        <View style={styles.container}>
            <StreamCall call={call}>
                <RingingCallContent
                    CallTopView={() => <CallTopView title={`ID: ${call.id}`} />}
                // onHangupCallHandler={() => router.back()}
                />
            </StreamCall>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})