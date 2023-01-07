import { StyleSheet } from 'react-native';
import { colors, fonts } from './theme';

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.darkGrey,
    letterSpacing: 1,
    fontFamily: fonts.fontFamilyBold,
  },
  headerIcon: {
    // position: 'absolute',
    left: 16,
  },
});
