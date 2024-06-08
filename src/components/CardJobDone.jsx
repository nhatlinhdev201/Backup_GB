import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import { colors } from '../styles/Colors';
import Home from './svg/Home';
import MainStyles from '../styles/MainStyle';
import Money from './svg/Money';
import { FormatMoney } from '../utils/FormatMoney';
import Person from './svg/Person';
import HourGlass from './svg/HourGlass';
import Day from './svg/Day';
import Clock from './svg/Clock';
import Note from './svg/Note';
import Rating from './Rating';

export default CardJobDone = ({ data }) => {
  const onpenModal = () => {
    console.log("open")
  }

  return (
    <View>
      <Pressable onPress={onpenModal}>
        <View style={MainStyles.tabContainer}>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Home size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: '700'
                }
              }>{data.title}</Text>
            </View>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
              <Money size={22} color={colors.MAIN_COLOR_CLIENT} />
              <Text style={
                {
                  color: colors.MAIN_COLOR_CLIENT,
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: '700',
                }
              }>{FormatMoney(data.price)} đ</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Person size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                  width: 110
                }
              }>{data.totalStaff} người</Text>

              <HourGlass size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                }
              }>{data.timeWorking} giờ</Text>
            </View>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
              <Text style={
                {
                  color: colors.WHITE,
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: '700',
                  backgroundColor: colors.MAIN_BLUE_CLIENT,
                  padding: 5,
                  borderRadius: 5
                }
              }>{data.address}</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Day size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                  width: 110
                }
              }>{data.date}</Text>

              <Clock size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                }
              }>{data.time}</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Note size={22} />
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                  paddingRight: 20,
                }
              }>{data.note}</Text>
            </View>
          </View>
          <View style={{ backgroundColor: colors.MAIN_BLUE_CLIENT, height: 1 }}></View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start', }]}>
              <Text style={
                {
                  color: colors.MAIN_BLUE_CLIENT,
                  marginLeft: 10,
                  fontSize: 15,
                }
              }>Đánh giá:</Text>
              <Rating rating={data.rate} fontSize={[15, 15]} />
            </View>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
              {data.feedback &&
                <Text style={
                  {
                    color: colors.MAIN_BLUE_CLIENT,
                    marginLeft: 10,
                    fontSize: 15,
                  }
                }>Ghi chú: {data.feedback}</Text>
              }
            </View>
          </View>
        </View>
      </Pressable>
    </View>

  )
}