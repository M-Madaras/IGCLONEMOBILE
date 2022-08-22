import {View, Text} from 'react-native';
import { loginStyles } from '../assets/styles';

function Login () {
    return (
        <View style={loginStyles.appBar}>
            <Text style={loginStyles.appBarTitle}>Bocagram</Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     appBar: {
//         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

//     }, appBarTitle: {
//         fontSize: 25,
//         fontWeight: '900',
//         textAlign: 'center',
//         paddingVertical: 10,
//     }
// })

export default Login;