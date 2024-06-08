import React from 'react';
import {ScrollView, View} from 'react-native';
import {Tab, TabView, Text} from '@ui-kitten/components';
import MainStyles from '../styles/MainStyle';
import CardNewJob from './CardNewJob';
import CardJobDone from './CardJobDone';

export const TabCustom = ({modalRef}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const dataSample = [
    {
      id: 1,
      title: 'Giúp việc theo giờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
      // Thông tin khách hàng
      customerName: 'Nguyễn Văn A',
      customerAddress: '123 Đường ABC, Quận XYZ, TP. HCM',
      customerPhone: '0123 456 789',
      // Thông tin nhân viên
      staffName: 'Nguyễn Văn B',
      staffAddress: '456 Đường XYZ, Quận ABC, TP. HCM',
      staffPhone: '0987 654 321',
      // Dịch vụ
      serviceName: 'Dọn nhà',
      // Dịch vụ mua thêm
      additionalServices: ['Lau kính', 'Làm vườn'],
      // Tổng tiền
      totalPrice: 5000000,
    },
    {
      id: 2,
      title: 'Giúp việc theo giờ ờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
      // Thông tin khách hàng
      customerName: 'Nguyễn Văn A',
      customerAddress: '123 Đường ABC, Quận XYZ, TP. HCM',
      customerPhone: '0123 456 789',
      // Thông tin nhân viên
      staffName: 'Nguyễn Văn B',
      staffAddress: '456 Đường XYZ, Quận ABC, TP. HCM',
      staffPhone: '0987 654 321',
      // Dịch vụ
      serviceName: 'Dọn nhà',
      // Dịch vụ mua thêm
      additionalServices: ['Lau kính', 'Làm vườn'],
      // Tổng tiền
      totalPrice: 5000000,
    },
  ];
  const dataSample2 = [
    {
      id: 1,
      title: 'Giúp việc theo giờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
    },
    {
      id: 2,
      title: 'Giúp việc theo giờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
    },
    {
      id: 3,
      title: 'Giúp việc theo giờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
      rate: 5,
      feedback: 'dịch vụ tuyệt vời',
    },
    {
      id: 4,
      title: 'Giúp việc theo giờ',
      totalStaff: 2,
      timeWorking: 2,
      date: '10/10/2022',
      time: '8h30 - 10h30',
      address: 'Tân Bình',
      note: 'Nhà có trẻ con và thú cưng, vui lòng liên hệ trước khi đến',
      price: 4000000,
      rate: 5,
      feedback: 'dịch vụ tuyệt vời',
      // item detail
      customerName: 'Nguyễn Văn Nam',
      staffName: 'Nguyễn Văn Nữ',
      servieName: 'Giá định kết',
      otherService: ['Giá định kết 1', 'Giá định kết 2', 'Giá định kết 3'],
      totalPrice: 5000000,
    },
  ];
  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab style={{height: 40}} title="Việc mới">
        <ScrollView style={MainStyles.scrollTab}>
          <View>
            {dataSample.length > 0 ? (
              dataSample.map(item => (
                <CardNewJob key={item.id} data={item} modalRef={modalRef} />
              ))
            ) : (
              <View style={MainStyles.tabContainer}>
                <Text category="h5">Chưa có việc làm</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </Tab>
      <Tab style={{height: 40}} title="Đã hoàn thành">
        <View>
          <ScrollView style={MainStyles.scrollTab}>
            {dataSample2.length > 0 ? (
              dataSample2.map(item => <CardJobDone key={item.id} data={item} />)
            ) : (
              <View style={MainStyles.tabContainer}>
                <Text category="h5">Chưa có việc làm hoàn thành</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </Tab>
    </TabView>
  );
};
