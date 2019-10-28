import Exponent from "exponent";
import React from "react";
import {
    Stylesheet,
    view,
    text,
    ActivityIndicator
} from 'react-native';

import { fetchMeeting } from './constants/api';
class App extends React.Component {
    static defaultProps = {
        fetchMeeting
    }


    state = {
        loading = false,
        meetings =[]

    }

    async componentDidMount() {
        this.setState({ loading: true });
        const data = await this.props.fetchMeeting();
        this.setState({ loading: false, meetups: data.meetups })

    }
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text>MentorMe</Text>
            </View>
        );
    }
}
const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifiyContent: 'center',
    },
});

Exponent.registerRootComponent(app);