import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Hello World</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
    },
});

export default App;
