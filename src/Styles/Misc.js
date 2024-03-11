import * as Colors from './Colors'
import * as Fonts from './Fonts'
import * as Window from './Window'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const { standardScreenHeight } = Fonts

export const padding = Window.width * 0.05
export const margin = Window.height * 0.1
export const borderRadius = RFValue(20, standardScreenHeight)

const styles = StyleSheet.create({
	shadow: {
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: -4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
	blueRoundedBorder: {
		borderRadius: borderRadius,
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: Colors.primary,
	},
	blueRoundedButton: {
		borderRadius: borderRadius,
		borderWidth: 3,
		borderColor: Colors.primary,
		backgroundColor: Colors.primary,
		color: Colors.White
	},
	graySquareBorder: {
		borderColor: Colors.gray,
		borderWidth: 1,
		borderStyle: 'solid',
	},
	blueSquareBorder: {
		borderWidth: 2,
		borderColor: Colors.signUp,
	},
})

export const shadow = styles.shadow
export const blueRoundedBorder = styles.blueRoundedBorder
export const squareBorder = styles.squareBorder
export const graySquareBorder = styles.graySquareBorder
export const blueSquareBorder = styles.blueSquareBorder
export const blueRoundedButton = styles.blueRoundedButton