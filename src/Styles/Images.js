import * as Colors from './Colors'
import * as Fonts from './Fonts'
import * as Misc from './Misc'
import * as Window from './Window'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
	headerImg: {
		marginBottom: Window.width * 0.1,
		marginTop: Window.height * 0.029,
	},
})

export const headerImg = styles.headerImg
