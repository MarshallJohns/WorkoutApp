import * as Colors from './Colors'
import * as Misc from './Misc'
import * as Containers from './Containers'
import * as Window from './Window'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { standardScreenHeight } from './Fonts'

const styles = StyleSheet.create({
	titleLogIn: {
		borderWidth: 2,
		padding: Misc.padding / 8,
	},
	login: {
		borderWidth: 2,
		paddingVertical: Misc.padding / 4,
		width: '90%',
	},
	fb: {
		backgroundColor: Colors.fbBlue,
		...Containers.rowSpaceEvenly,
		marginBottom: Misc.margin / 4,
		paddingVertical: Misc.padding / 4,
		width: '90%',
	},
	titleSignUp: {
		...Misc.blueSquareBorder,
		padding: Misc.padding / 8,
	},
	checkboxSignUp: {
		marginRight: Misc.margin / 4,
		width: Misc.margin / 4,
		height: Misc.margin / 4,
	},
	register: {
		borderWidth: 2,
		paddingVertical: Misc.padding / 4,
		width: '90%',
	},
	createCN: {
		paddingVertical: Misc.margin / 12,
		paddingHorizontal: Misc.margin / 2.5,
		...Misc.blueRoundedBorder,
		...Containers.centered,
	},
	subscriptionButton: {
		paddingVertical: Misc.margin / 12,
		paddingHorizontal: Misc.margin / 2.5,
		...Misc.blueRoundedBorder,
		...Containers.centered,
	},
	upgradeButton: {
		paddingVertical: Misc.margin / 12,
		paddingHorizontal: Misc.margin / 2.5,
		...Misc.blueRoundedButton,
		...Containers.centered,
	},
})

export const titleLogIn = styles.titleLogIn
export const login = styles.login
export const fb = styles.fb
export const titleSignUp = styles.titleSignUp
export const checkboxSignUp = styles.checkboxSignUp
export const register = styles.register
export const createCN = styles.createCN
export const upgradeButton = styles.upgradeButton
export const subscriptionButton = styles.subscriptionButton
