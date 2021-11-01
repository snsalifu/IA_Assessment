import React from 'react';

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, keyboard  } from 'react-native';

const KeyboardAvoidingWrapper = () => {
  
    //colors
import { Colors } from './../components/styles';
const { primary } = Colors;

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: primary }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper};
