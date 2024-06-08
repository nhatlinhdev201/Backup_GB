import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@ui-kitten/components';
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
import Button from './buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { confirmJob, doneJob } from '../Redux/Action/mainAction';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../Constants';

const CardNewJob = ({ data, modalRef }) => {
  const navigation = useNavigation();
  const confirmed = useSelector(state => state.main.confirmed);
  const dispatch = useDispatch();

  const HandleConfirm = () => {
    dispatch(confirmJob(data.id));
  };

  const HandleDone = () => {
    dispatch(doneJob());
  };

  const HandlePayment = () => {
    HandleDone();
    navigation.navigate(ScreenNames.PAYMENT, { data });
  };

  const HandleCash = () => {
    HandleDone();
    navigation.navigate(ScreenNames.CASH, { data });
  };

  const openModal = () => {
    modalRef.current?.openModal(data);
  };

  return (
    <View>
      <Pressable onPress={openModal}>
        <View style={MainStyles.tabContainerNewJob}>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Home size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 17,
                fontWeight: '700'
              }}>{data.title}</Text>
            </View>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
              <Money size={22} color={colors.MAIN_COLOR_CLIENT} />
              <Text style={{
                color: colors.MAIN_COLOR_CLIENT,
                marginLeft: 10,
                fontSize: 17,
                fontWeight: '700',
              }}>{FormatMoney(data.price)} đ</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Person size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 15,
                width: 110
              }}>{data.totalStaff} người</Text>

              <HourGlass size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 15,
              }}>{data.timeWorking} giờ</Text>
            </View>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
              <Text style={{
                color: colors.WHITE,
                marginLeft: 10,
                fontSize: 17,
                fontWeight: '700',
                backgroundColor: colors.MAIN_BLUE_CLIENT,
                padding: 5,
                borderRadius: 5
              }}>{data.address}</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Day size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 15,
                width: 110
              }}>{data.date}</Text>

              <Clock size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 15,
              }}>{data.time}</Text>
            </View>
          </View>
          <View style={MainStyles.tabRowSpace}>
            <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
              <Note size={22} />
              <Text style={{
                color: colors.MAIN_BLUE_CLIENT,
                marginLeft: 10,
                fontSize: 15,
                paddingRight: 20,
              }}>{data.note}</Text>
            </View>
          </View>
        </View>
      </Pressable>
      {confirmed === data.id ? (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button paddingHorizontal={10} paddingVertical={8} bgColor={colors.SOFT_GREEN} textColor={colors.WHITE} fontSize={14} onPress={HandlePayment}>
              Chuyển khoản
            </Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button paddingHorizontal={10} paddingVertical={8} bgColor={colors.DEFAULT_GREEN} fontSize={14} onPress={HandleCash}>
              Tiền mặt
            </Button>
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button fontSize={14} disable={confirmed !== -1 ? true : false} paddingHorizontal={10} paddingVertical={8} bgColor={confirmed !== -1 ? colors.GRAY : colors.CONFIRM2} onPress={HandleConfirm}>
              Xác nhận
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default CardNewJob;
