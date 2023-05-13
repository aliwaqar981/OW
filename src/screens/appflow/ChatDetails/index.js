/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
  Time,
} from 'react-native-gifted-chat';
import {COLORS, FONTS} from '../../../themes';
import {ArrowLeft, SendFill} from '../../../assets/svgicons';
import {ButtonwithIcon} from '../../../components';
import {Profile2} from '../../../assets/images';

const ChatDetails = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: null,
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* ARROW_LEFT */}
        <ButtonwithIcon
          icon={<ArrowLeft />}
          containerStyle={{marginRight: 15}}
          onPress={() => navigation.goBack()}
        />
        {/* PROFILE_IMAGE */}
        <Image source={Profile2} style={{width: 40, height: 40}} />
        {/* NAME */}
        <Text style={styles.name}>Jhon Doe</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        showUserAvatar={false}
        showAvatarForEveryMessage={false}
        alignTop
        alwaysShowSend
        scrollToBottom
        placeholder="Write  a reply..."
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: COLORS.red,
                  borderRadius: 0,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 0,
                  padding: 5,
                  marginBottom: 15,
                  marginRight: 20,
                },
                left: {
                  backgroundColor: '#E9E9E9',
                  borderRadius: 0,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 0,
                  padding: 5,
                  marginBottom: 15,
                  marginLeft: 20,
                },
              }}
            />
          );
        }}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: COLORS.white,
              paddingTop: 6,
              borderWidth: 1.5,
              borderTopWidth: 2,
              borderColor: COLORS.red,
              borderTopColor: COLORS.red,
              borderRadius: 30,
              justifyContent: 'center',
              marginHorizontal: 28,
              paddingLeft: 10,
              height: 60,
            }}
            primaryStyle={{alignItems: 'center'}}
          />
        )}
        renderSend={props => (
          <Send
            {...props}
            disabled={!props.text}
            containerStyle={styles.sendButtonStyles}>
            <SendFill />
          </Send>
        )}
        renderTime={props => (
          <Time
            {...props}
            timeTextStyle={{
              left: {
                color: 'rgba(0, 0, 0, 0.46)',
                fontSize: 10,
                textAlign: 'right', // or position: 'right',
                position: 'absolute',
                bottom: -24,
                fontFamily: FONTS.Nunito_Light,
              },
              right: {
                color: 'rgba(0, 0, 0, 0.46)',
                fontSize: 10,
                textAlign: 'left', // or position: 'right',
                position: 'absolute',
                bottom: -24,
                right: 0,
                fontFamily: FONTS.Nunito_Light,
              },
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sendButtonStyles: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    position: 'absolute',
    bottom: 4,
    right: 10,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    marginLeft: 9,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Regular,
  },
});
