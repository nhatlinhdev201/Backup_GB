import { Image, SafeAreaView, View, StyleSheet } from 'react-native';
import LogoBee from '../components/LogoBee';
import { colors } from '../styles/Colors';
import { useEffect, useState } from 'react';
import { image_banner_1 } from '../assets';
import { ScreenNames } from '../Constants';
// import { RequestPermission, getData } from '../utils';
import StorageNames from '../Constants/StorageNames';
// import {RESULTS} from 'react-native-permissions';

const First = ({ navigation }) => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    // RequestPermission().then(result => {
    //   console.log(result); // In kết quả ra console
    //   // Tiếp tục xử lý dựa trên kết quả
    //   if (result === RESULTS.GRANTED) {
    //     // Quyền đã được cấp
    //   } else {
    //     console.log('Quyền bị từ chối hoặc không khả dụng');
    //     // Quyền bị từ chối hoặc không khả dụng
    //   }
    // });
    const getRouter = async () => {
      try {
        // Thông tin kiểm tra
        const userString = await getData(StorageNames.OFFICER_PROFILE);
        const userLogin = userString ? JSON.parse(userString) : null;
        console.log('User login', userLogin);
        const updateInfomation = await getData(StorageNames.UPDATE_ALL_PROFILE);
        const initialAppGoldenBee = await getData(StorageNames.INITIAL_APP);
        //
        if (initialAppGoldenBee === null || initialAppGoldenBee) {
          setInitialRoute(ScreenNames.ABOUT);
        } else if (userLogin) {
          updateInfomation === null || !updateInfomation
            ? setInitialRoute(ScreenNames.UPDATE_PROFILE)
            : setInitialRoute(ScreenNames.MAIN_NAVIGATOR);
        } else if (!userLogin) {
          setInitialRoute(ScreenNames.AUTH_HOME);
        }
      } catch (error) {
        console.error('Failed to fetch the user from AsyncStorage:', error);
        setInitialRoute(ScreenNames.ABOUT);
      }
    };

    getRouter();
  }, []);

  useEffect(() => {
    if (initialRoute !== null) {
      setTimeout(() => {
        navigation.navigate(initialRoute);
      }, 3000);
    }
  }, [initialRoute, navigation]);

  if (initialRoute === null) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LogoBee />
        <View style={styles.imageContainer}>
          <Image source={image_banner_1} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.WHITE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});

export default First;
