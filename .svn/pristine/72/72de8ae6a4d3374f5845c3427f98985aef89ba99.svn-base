import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../Constants';
import Button from '../../components/buttons/Button';
import LayoutGradientBlue from '../../components/layouts/LayoutGradientBlue';
import MainStyles from '../../styles/MainStyle';
import { cirtificate, coin_icon, gift } from '../../assets';
import { colors } from '../../styles/Colors';
import Rating from '../../components/Rating';
import Box from '../../components/Box';
import { FormatMoney } from '../../utils/FormatMoney';
import ToggleCustom, { Toggle } from '../../components/ToggleCustom';
import Day from '../../components/svg/Day';
import { removeData } from '../../utils/LocalStorage';
import StorageNames from '../../Constants/StorageNames';
import { Toaster } from '../../utils/AlertToaster';


const AccountScreen = () => {
  const navigation = useNavigation();

  const handleBooking = () => {
    navigation.navigate(ScreenNames.BOOKING_TIME);
  }
  const handleLogout = async () => {
    try {
      await removeData(StorageNames.OFFICER_PROFILE);
      navigation.navigate(ScreenNames.AUTH_HOME);
    } catch (error) {
      Toaster({ type: 'error', title: 'Lỗi xử lý ! vui lòng liên hệ CSKH !' });
    }
  };

  const user = {
    name: "Nguyễn Văn Anh",
    sdt: "0123456789",
    cmnd: "0123456789",
    staffId: "0123456789",
    level: 1,
    point: 2000
  }

  return (
    <LayoutGradientBlue>
      <Text style={MainStyles.screenTitle}>Tài khoản</Text>
      <ScrollView>
        <View style={MainStyles.contentContainer}>
          <Text style={MainStyles.labelTitle}>Thông tin</Text>
          <View style={MainStyles.flexRowFlexStart}>
            <Image
              source={coin_icon}
              style={{
                width: 80,
                height: 120,
                resizeMode: 'contain',
                marginRight: 10,
              }}
            />
            <View>
              <View style={MainStyles.flexRowFlexStart}>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15, width: 120 }}>Họ tên :</Text>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15 }}>{user.name}</Text>
              </View>
              <View style={MainStyles.flexRowFlexStart}>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15, width: 120 }}>SĐT :</Text>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15 }}>{user.sdt}</Text>
              </View>
              <View style={MainStyles.flexRowFlexStart}>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15, width: 120 }}>CMND/CCCD :</Text>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15 }}>{user.cmnd}</Text>
              </View>
              <View style={MainStyles.flexRowFlexStart}>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15, width: 120 }}>Mã nhân viên :</Text>
                <Text style={{ color: colors.MAIN_BLUE_CLIENT, fontSize: 15 }}>{user.staffId}</Text>
              </View>
            </View>
          </View>
          <View style={[MainStyles.flexRowCenter, { backgroundColor: colors.MAIN_BLUE_CLIENT, borderRadius: 10, padding: 5 }]}>
            <Text style={{ color: colors.WHITE, fontSize: 17, marginRight: 5 }}>Cộng tác viên cao cấp</Text>
            <Rating rating={5} fontSize={[17, 17]} />
          </View>
          <Box height={10} />
          <Text style={MainStyles.labelTitle}>Tài chính</Text>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: colors.MAIN_BLUE_CLIENT,
                textAlign: 'center',
                fontWeight: '700',
              }}
            >Tài khoản chính</Text>
            <View style={MainStyles.flexRowCenter}>
              <Image
                source={coin_icon}
                style={{ width: 27, height: 27 }}
              />
              <Text style={
                {
                  color: colors.MAIN_COLOR_CLIENT,
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: '700',
                }
              }>{FormatMoney(400000)} đ</Text>
            </View>
          </View>
          <Button fontSize={15} paddingHorizontal={10} paddingVertical={7}>
            Nạp thêm tiền
          </Button>
          <Box height={10} />
          <View style={MainStyles.flexRowSpaceBetween}>
            <Text style={MainStyles.labelTitle}>Hành trình</Text>
            <Text style={[MainStyles.labelTitle, { color: colors.RED }]}>Cấp {user.level}</Text>
            <ToggleCustom />
          </View>
          <View style={MainStyles.flexRowFlexEnd}>
            <Button
              textColor={colors.MAIN_BLUE_CLIENT}
              bgColor={'transparent'}
              fontSize={12}
              textMargin={0}
              btnMargin={0}
              icon={() => <Day color={colors.MAIN_BLUE_CLIENT} size={20} />}
              onPress={handleBooking}
            >Đặt lịch làm việc</Button>
          </View>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[MainStyles.labelTitle, { marginRight: 10 }]}>Điểm ưu đãi</Text>
            <Image
              source={cirtificate}
              style={{
                width: 20,
                height: 20,
                marginRight: 5
              }}
            />
            <Text style={[MainStyles.labelTitle, { marginRight: 10 }]}>{FormatMoney(user.point)} point</Text>
          </View>
          <Box height={10} />
          <Text style={[MainStyles.labelTitle]}>Báo cáo tuần</Text>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[{ marginRight: 10, paddingLeft: 10, fontSize: 15, color: colors.MAIN_BLUE_CLIENT }]}>Thu nhập tuần này :</Text>
            <Text style={[MainStyles.labelTitle, { marginRight: 10, color: colors.MAIN_COLOR_CLIENT }]}>{FormatMoney(2000000)} đ</Text>
          </View>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[{ marginRight: 10, paddingLeft: 10, fontSize: 15, color: colors.MAIN_BLUE_CLIENT }]}>Công việc tuần này :</Text>
            <Text style={[MainStyles.labelTitle, { marginRight: 10, color: colors.MAIN_BLUE_CLIENT }]}>{10} task đã hoàn thành</Text>
          </View>
          <Box height={10} />
          <Text style={[MainStyles.labelTitle]}>Hỗ trợ</Text>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[{ marginRight: 10, paddingLeft: 10, fontSize: 15, color: colors.MAIN_BLUE_CLIENT, width: 200 }]}>Thứ 2 đến thứ 7 :</Text>
            <Text style={[{ marginRight: 10, color: colors.MAIN_BLUE_CLIENT }]}>Chủ nhật</Text>
          </View>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[{ marginRight: 10, paddingLeft: 10, fontSize: 15, color: colors.MAIN_BLUE_CLIENT, width: 200 }]}>08:00 - 12:00 :</Text>
            <Text style={[{ marginRight: 10, color: colors.MAIN_BLUE_CLIENT }]}>09:00 - 12:00</Text>
          </View>
          <View style={MainStyles.flexRowFlexStart}>
            <Text style={[{ marginRight: 10, paddingLeft: 10, fontSize: 15, color: colors.MAIN_BLUE_CLIENT, width: 200 }]}>08:00 - 12:00 :</Text>
            <Text style={[{ marginRight: 10, color: colors.MAIN_BLUE_CLIENT }]}>09:00 - 12:00</Text>
          </View>

          <Button fontSize={15} paddingHorizontal={10} paddingVertical={7}>
            Gọi tổng đài
          </Button>
        </View>
      </ScrollView>

      <Button onPress={handleLogout} textColor={colors.RED} bgColor={colors.WHITE}>Đăng xuất</Button>
    </LayoutGradientBlue>
  );
};

export default AccountScreen;
