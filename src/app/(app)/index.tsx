import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Button
} from 'react-native';
import { Stack, router } from 'expo-router';
import { useStreamVideoClient } from '@stream-io/video-react-native-sdk';
import { genRandomString } from '../../utils';

const HomeScreen = () => {

    const client = useStreamVideoClient();

    const onCreateCall = () => {
        if (!client) {
            return;
        }
        const callId = genRandomString(5);
        console.log('Creating a call with id: ', callId);
        const call = client.call('default', callId);
        call.join({ create: true });
        router.push('/call');
    };


    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'FaceTime' }} />

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable onPress={onCreateCall} style={styles.button}>
                    <Text>Create Call</Text>
                </Pressable>

                <Pressable onPress={() => router.push('/join')} style={styles.button}>
                    <Text>Join Call</Text>
                </Pressable>

                <Pressable
                    onPress={() => router.push('/contacts')}
                    style={styles.button}
                >
                    <Text>Contacts</Text>
                </Pressable>
            </View>

            <Button title="Sign out" onPress={() => { }} />
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    button: {
        flex: 1,
        backgroundColor: 'gainsboro',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});
