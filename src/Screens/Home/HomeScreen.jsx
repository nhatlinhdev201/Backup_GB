import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LayoutGradientBlue from '../../components/layouts/LayoutGradientBlue';
import LogoBeeBox from '../../components/LogoBeeBox';
import { colors } from '../../styles/Colors';
import MainStyles from '../../styles/MainStyle';
import { TabCustom } from '../../components/TabCustom';
import Box from '../../components/Box';
import JobDetailsModal from '../../components/JobDetailsModal';

const HomeScreen = () => {
  const modalRef = useRef(null);

  return (
    <LayoutGradientBlue>
      <LogoBeeBox color={colors.WHITE} sizeImage={70} sizeText={20} />
      <View style={MainStyles.containerTabContent}>
        <TabCustom modalRef={modalRef} />
      </View>
      <Box height={100} />
      <JobDetailsModal ref={modalRef} />
    </LayoutGradientBlue>
  );
};

export default HomeScreen;
