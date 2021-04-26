import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from "./firebase"
const ChatScreen = ({route , navigation}) => {

  const [messages, setMessages] = useState([]);
  const [ReceiverName, setReceiverName] = useState(Object.values(route.params)[0].receiver);
  const [Sendername, setSendername] = useState(Object.values(route.params)[0].sender);
  const [previousMessages,setpreviousMessages] = useState(Object.values(route.params))


  useEffect(() => {    
      const FormattedMessages = []


    previousMessages.forEach((element,index) => {
        let container = {}
        
        container ['_id'] = element['_id']
        container ['text'] = element['text']
        container ['createdAt'] = new Date()
        container ['user'] = element['user']
        container.user["_id"] = element['_id']+'++1'
        container.user["name"] = element.sender
        container.user["avatar"] = 'https://placeimg.com/140/140/any'

        FormattedMessages.push(container)


    });

    setMessages(FormattedMessages.reverse());
  }, []);

  const SendToDatabase = (MessagePayload) => {
      var Path = 'Chat/'+MessagePayload.sender+'/'
      firebase
      .database()
      .ref(Path)
      .push()
      .set(MessagePayload) 

  }

  const onSend = useCallback((messages = []) => {
    
    var MessagePayload = messages[0]
    // console.log(route.params)
    MessagePayload['sender'] = Sendername
    MessagePayload['receiver'] = ReceiverName
    console.log(MessagePayload)

    SendToDatabase(MessagePayload)

    

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginRight: 5}}
            size={48}
            color="#1E305F"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#1E305F',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});