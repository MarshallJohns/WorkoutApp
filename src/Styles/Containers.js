import * as Colors from './Colors'
import * as Fonts from './Fonts'
import * as Misc from './Misc'
import * as Window from './Window'
import { StyleSheet, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { standardScreenHeight } from './Fonts'

export const centered = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

export const rowSpaceBetween = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
}

export const rowSpaceEvenly = {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-evenly',
}

export const row = {
	flexDirection: 'row',
	alignItems: 'center',

}
export const columnCentered = {
	flexDirection: 'column',
	alignItems: 'center'
}

const styles = StyleSheet.create({
	appView: {
		width: Window.width,
		height: Window.height,
		backgroundColor: Colors.background,
		...centered,
		// paddingBottom: Platform.OS === 'android' ? Window.height * 0.05 : 0,
	},
	routesView: {
		width: '100%',
		height: '100%',
	},
	content: {
		height: Platform.OS === 'android' ? Window.height * 0.9 : Window.height * 0.9,
		width: Window.width,
		paddingLeft: Misc.padding,
		paddingRight: Misc.padding,
		paddingTop: Platform.OS === 'android' ? Window.height * 0.01 : Window.height * 0.05,
		// borderWidth: 3,
		// borderColor: 'purple',
	},
	titleText: {
		...rowSpaceBetween,
		marginBottom: Misc.margin / 4,
		width: '100%',
	},
	loginBtn: {
		alignItems: 'center',
		marginTop: Misc.margin / 2,
		width: '100%',
	},
	inputTxt: {
		backgroundColor: Colors.offWhite,
		height: Misc.margin / 2,
		width: '100%',
		paddingLeft: 10,
	},
	registerBtn: {
		alignItems: 'center',
		width: '90%',
		marginVertical: Misc.margin / 2,
	},
	searchBar: {
		width: '100%',
		height: RFValue(34, standardScreenHeight),
		...Misc.graySquareBorder,
		backgroundColor: Colors.white,
		marginTop: Window.height * 0.025,
		// ...rowSpaceBetween,
		...row
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: Colors.lightGray,
		marginVertical: Window.height * 0.01,
	},
})

export const appView = styles.appView
export const routesView = styles.routesView
export const content = styles.content
export const loginImg = styles.loginImg
export const titleText = styles.titleText
export const loginBtn = styles.loginBtn
export const inputTxt = styles.inputTxt
export const registerBtn = styles.registerBtn
export const searchBar = styles.searchBar
export const divider = styles.divider
