import React from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView
} from "react-native";

import CNRichTextEditor, {
  CNToolbar,
  getInitialObject,
  getDefaultStyles
} from "react-native-cn-richtext-editor";

const defaultStyles = getDefaultStyles();

export default class writingContentScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag: "body",
      selectedStyles: [],
      value: [getInitialObject()]
    };

    this.editor = null;
  }

  onStyleKeyPress = toolType => {
    this.editor.applyToolbar(toolType);
  };

  onSelectedTagChanged = tag => {
    this.setState({
      selectedTag: tag
    });
  };

  onSelectedStyleChanged = styles => {
    this.setState({
      selectedStyles: styles
    });
  };

  onValueChanged = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={0}
        style={{
          flex: 1,
          paddingTop: 20,
          backgroundColor: "#eeeeee",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <CNRichTextEditor
              ref={input => (this.editor = input)}
              onSelectedTagChanged={this.onSelectedTagChanged}
              onSelectedStyleChanged={this.onSelectedStyleChanged}
              value={this.state.value}
              style={{ backgroundColor: "#ffffff" }}
              styleList={defaultStyles}
              onValueChanged={this.onValueChanged}
            />
          </View>
        </TouchableWithoutFeedback>

        <View
          style={{
            minHeight: 35
          }}
        >
          <CNToolbar
            style={{
              height: 35
            }}
            iconSetContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
            size={12}
            iconSet={[
              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "bold",
                    buttonTypes: "style",
                    iconComponent: (
                      <Text style={styles.toolbarButton}>boldButton</Text>
                    )
                  }
                ]
              },
              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "italic",
                    buttonTypes: "styles",
                    iconComponent: (
                      <Text style={styles.toolbarButton}>italicButton</Text>
                    )
                  }
                ]
              },

              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "underline",
                    buttonTypes: "styles",
                    iconComponent: (
                      <Text style={styles.toolbarButton}>underlineButton</Text>
                    )
                  }
                ]
              },

              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "title",
                    buttonTypes: "styles",
                    iconComponent: (
                      <Text style={styles.toolbarButton}>title</Text>
                    )
                  }
                ]
              },

              {
                type: "seperator"
              },

              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "body",
                    buttonTypes: "tag",
                    iconComponent: (
                      <Text style={styles.toolbarButton}>body</Text>
                    )
                  }
                ]
              },
              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "ul",
                    buttonTypes: "tag",
                    iconComponent: <Text style={styles.toolbarButton}>ul</Text>
                  }
                ]
              },
              {
                type: "tool",
                iconArray: [
                  {
                    toolTypeText: "ol",
                    buttonTypes: "tag",
                    iconComponent: <Text style={styles.toolbarButton}>ol</Text>
                  }
                ]
              }
            ]}
            selectedTag={this.state.selectedTag}
            selectedStyles={this.state.selectedStyles}
            onStyleKeyPress={this.onStyleKeyPress}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 1,
    alignItems: "stretch"
  },
  toolbarButton: {
    fontSize: 20,
    width: 20,
    height: 30,
    textAlign: "center"
  },
  italicButton: {
    fontStyle: "italic"
  },
  boldButton: {
    fontWeight: "bold"
  },
  underlineButton: {
    textDecorationLine: "underline"
  }
});
