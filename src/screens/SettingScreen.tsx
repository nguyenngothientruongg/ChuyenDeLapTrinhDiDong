import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import {Dimensions} from 'react-native';
import OrderHistoryCard from '../components/OrderHistoryCard';

const SettingScreen = ({navigation}: any) => {
  const Setting = useStore((state: any) => state.Setting);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({index, id, type}: any) => {
    navigation.push('Details', {
      index,
      id,
      type,
    });
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('Home');
    }, 300);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar />
        <Text style={styles.ScreenTitle}>
          {'\n'}
          Chỉnh sửa thông tin
        </Text>
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="user"
              size={FONTSIZE.size_18}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Cập nhật tên..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="close"
              size={FONTSIZE.size_16}
              color={COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="location"
              size={FONTSIZE.size_18}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Cập nhật địa chỉ..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="close"
              size={FONTSIZE.size_16}
              color={COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="phone"
              size={FONTSIZE.size_18}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Cập nhật số điện thoại..."
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="close"
              size={FONTSIZE.size_16}
              color={COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.CitizenID}>
          {'\n'}
          Căn cước công dân 2 mặt
        </Text>
        <View style={styles.CardLinearGradient} />
        <View style={styles.CardLinearGradient} />
        <View>
          <TouchableOpacity
            style={styles.DownloadButton}
            onPress={() => {
              buttonPressHandler();
            }}>
            <Text style={styles.ButtonText}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  CenteredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  CardLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_25,
    marginBottom: SPACING.space_20,
    height: 200, // Set a fixed height or adjust as needed
    width: '90%',
    backgroundColor: COLORS.primaryLightGreyHex,
    alignSelf: 'center',
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  CitizenID: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_10,
    marginBottom: SPACING.space_10,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_10,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  LottieAnimation: {
    height: 250,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    paddingBottom: SPACING.space_36 * 3.6,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },
});

export default SettingScreen;
