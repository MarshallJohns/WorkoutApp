import * as Fonts from './Fonts'
import * as Colors from './Colors'
import * as Misc from './Misc'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { standardScreenHeight } = Fonts

const styles = StyleSheet.create({
	logo: {
		width: 126,
		height: 61,
	},
	fb: {
		height: 18,
	},
	magGlass: {
		height: RFValue(23, standardScreenHeight),
	},
})

export const logo = styles.logo
export const fb = styles.fb
export const magGlass = styles.magGlass
