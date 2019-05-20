import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

const GREEN = "#99CA3CEE";
const WHITE = "#fff";

class MyTextInput extends React.Component {
    state = {
        isFocused: false
    };

    handleFocus = event => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlur = event => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render() {
        const { isFocused } = this.state;
        const { onFocus, onBlur, ...otherProps } = this.props;
        return (
            <TextInput
                selectionColor={GREEN}
                underlineColorAndroid={
                    isFocused ? GREEN : WHITE
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.textInput}
                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: 60,
        paddingLeft: 6,
        fontSize: 18
    }
});

export default MyTextInput;