import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';
import { useState,useEffect } from 'react';
import firebase from './firebase'
// const Messages = [
//   {
//     id: '1',
//     userName: 'Jenny Doe',
//     userImg: require('../images/Categories_List/1.png'),
//     messageTime: '4 mins ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '2',
//     userName: 'John Doe',
//     userImg: require('../images/Categories_List/2.png'),
//     messageTime: '2 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '3',
//     userName: 'Ken William',
//     userImg: require('../images/Categories_List/3.png'),
//     messageTime: '1 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '4',
//     userName: 'Selina Paul',
//     userImg: require('../images/Categories_List/4.png'),
//     messageTime: '1 day ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     userImg: require('../images/Categories_List/5.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
// ];


const MessagesScreen = ({navigation}) => {

const [Messages, setMessages] = useState([])
const [AllMessages, setAllMessages] = useState({})
const fetchData = () => {
  firebase
      .database()
      .ref("/Chat/Ahsan Iqbal")
      .on("value", snapshot => {
          if (snapshot.val()!=null){

            // const MessageKeys = Object.keys(snapshot.val())
            const Messagecontents = Object.values(snapshot.val())
            let AllMessages = []
            Messagecontents.forEach(element => {
              let container = {}
              container['id'] = element._id
              container['userName'] = element.sender
              container['userImg'] = require('../images/Categories_List/4.png')
              container['messageTime'] = '1 minute ago'
              container['messageText'] = element.text
              AllMessages.push(container)
            });
            // console.log(AllMessages[AllMessages.length-1])
            setMessages([AllMessages[AllMessages.length-1]])
            setAllMessages(snapshot.val())
      }
    
  })

}
useEffect(() => 
fetchData(), []);


    return (
      <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('ChatWithClient', AllMessages)}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime style = {{marginRight: 30}}>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText style = {{ fontWeight: 'bold'}}>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default MessagesScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});