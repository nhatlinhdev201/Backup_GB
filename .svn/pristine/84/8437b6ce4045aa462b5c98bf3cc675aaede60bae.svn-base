import React, { forwardRef, useImperativeHandle, useState, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Home from './svg/Home';
import Money from './svg/Money';
import Person from './svg/Person';
import HourGlass from './svg/HourGlass';
import Day from './svg/Day';
import Clock from './svg/Clock';
import Note from './svg/Note';
import MainStyles from '../styles/MainStyle';
import { colors } from '../styles/Colors';
import { FormatMoney } from '../utils/FormatMoney';

const JobDetailsModal = forwardRef((_, ref) => {
  const [jobData, setJobData] = useState(null);
  const bottomSheetRef = useRef(null);

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  useImperativeHandle(ref, () => ({
    openModal(data) {
      setJobData(data);
      bottomSheetRef.current?.expand();
    },
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.modalContent}>
          {jobData ? (
            <View>
              <Text style={{ textAlign: 'center', fontSize: 20, color: colors.MAIN_BLUE_CLIENT, marginBottom: 10 }}>Thông tin đơn đặt</Text>
              <View style={{ backgroundColor: colors.MAIN_BLUE_CLIENT, height: 1, }} />
              <View style={MainStyles.tabContainerNewJob}>
                <View style={MainStyles.tabRowSpace}>
                  <View style={[MainStyles.tabRow, { justifyContent: 'flex-start' }]}>
                    <Home size={22} />
                    <Text style={{
                      color: colors.MAIN_BLUE_CLIENT,
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: '700'
                    }}>{jobData?.title}</Text>
                  </View>
                  <View style={[MainStyles.tabRow, { justifyContent: 'flex-end' }]}>
                    <Money size={22} color={colors.MAIN_COLOR_CLIENT} />
                    <Text style={{
                      color: colors.MAIN_COLOR_CLIENT,
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: '700',
                    }}>{FormatMoney(jobData?.price)} đ</Text>
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
                    }}>{jobData?.totalStaff} người</Text>

                    <HourGlass size={22} />
                    <Text style={{
                      color: colors.MAIN_BLUE_CLIENT,
                      marginLeft: 10,
                      fontSize: 15,
                    }}>{jobData?.timeWorking} giờ</Text>
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
                    }}>{jobData?.address}</Text>
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
                    }}>{jobData?.date}</Text>

                    <Clock size={22} />
                    <Text style={{
                      color: colors.MAIN_BLUE_CLIENT,
                      marginLeft: 10,
                      fontSize: 15,
                    }}>{jobData?.time}</Text>
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
                    }}>{jobData?.note}</Text>
                  </View>
                </View>

              </View>
              <View style={{ backgroundColor: colors.MAIN_BLUE_CLIENT, height: 1, }} />
              {/* Additional Fields */}
              <View style={styles.additionalFields}>
                <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
                <Text>Tên khách hàng: {jobData?.customerName}</Text>
                <Text>Địa chỉ: {jobData?.customerAddress}</Text>
                <Text>Số điện thoại: {jobData?.customerPhone}</Text>
                <Text style={styles.sectionTitle}>Thông tin nhân viên</Text>
                <Text>Tên nhân viên: {jobData?.staffName}</Text>
                <Text>Địa chỉ: {jobData?.staffAddress}</Text>
                <Text>Số điện thoại: {jobData?.staffPhone}</Text>
                <Text style={styles.sectionTitle}>Dịch vụ</Text>
                <Text>{jobData?.serviceName}</Text>
                <Text style={styles.sectionTitle}>Dịch vụ mua thêm</Text>
                {jobData?.additionalServices.map(service => (
                  <Text key={service}>{service}</Text>
                ))}
                <Text style={styles.sectionTitle}>Tổng tiền</Text>
                <Text style={styles.totalPrice}>{FormatMoney(jobData?.totalPrice)} đ</Text>
              </View>

            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalFields: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: colors.MAIN_COLOR_CLIENT,
    color: colors.WHITE,
    padding: 5,
    borderRadius: 5,
  },
});

export default JobDetailsModal;
