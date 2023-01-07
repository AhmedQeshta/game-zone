import { StyleSheet } from 'react-native';
import { colors, fonts } from './theme';

export const homeStyles = StyleSheet.create({
  textContainer: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.fontFamilyBold,
  },
});
export const aboutStyles = StyleSheet.create({});

export const reviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.fontFamilyBold,
    color: colors.black,
    textAlign: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    fontFamily: fonts.fontFamilyRegular,
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 10,
  },
  body: {
    fontSize: 16,
    fontFamily: fonts.fontFamilyRegular,
    color: colors.darkGrey,
    textAlign: 'center',
    marginVertical: 10,
  },
});
