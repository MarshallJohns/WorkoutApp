import * as Colors from './Colors'
import * as Window from './Window'
import { StyleSheet, Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const standardScreenHeight = 680

//Font Families
//
//Regular
export const ultraLight = 'HelveticaNeueLT-25UltLt'
export const thin = 'HelveticaNeueLT-35Th'
export const light = 'HelveticaNeueLT-45Lt'
export const roman = 'HelveticaNeueLT-55Rm'
export const medium = 'HelveticaNeueLT-65Md'
export const bold = 'HelveticaNeueLT-75Bd'
export const heavy = 'HelveticaNeueLT-85Hv'
export const black = 'HelveticaNeueLT-95Blk'
export const boldOutline = 'HelveticaNeueLT-75BdOu'

//Italic
export const ultraLightItalic = 'HelveticaNeueLT-26UltLtIt'
export const thinItalic = 'HelveticaNeueLT-36ThIt'
export const lightItalic = 'HelveticaNeueLT-46LtIt'
export const italic = 'HelveticaNeueLT-56It'
export const mediumItalic = 'HelveticaNeueLT-66MdIt'
export const boldItalic = 'HelveticaNeueLT-76BdIt'
export const heavyItalic = 'HelveticaNeueLT-86HvIt'
export const blackItalic = 'HelveticaNeueLT-96BlkIt'

//Extended
export const ultraLightExtended = 'HelveticaNeueLT-23UltLtEx'
export const thinExtended = 'HelveticaNeueLT-33ThEx'
export const lightExtended = 'HelveticaNeueLT-43LtEx'
export const extended = 'HelveticaNeueLT-53Ex'
export const mediumExtended = 'HelveticaNeueLT-63MdEx'
export const boldExtended = 'HelveticaNeueLT-73BdEx'
export const heavyExtended = 'HelveticaNeueLT-83HvEx'
export const blackExtended = 'HelveticaNeueLT-93BlkEx'

//ExtendedOblique
export const ultraLightExtendedOblique = 'HelveticaNeueLT-23UltLtExObl'
export const thinExtendedOblique = 'HelveticaNeueLT-33ThExObl'
export const lightExtendedOblique = 'HelveticaNeueLT-43LtExObl'
export const extendedOblique = 'HelveticaNeueLT-53ExObl'
export const mediumExtendedOblique = 'HelveticaNeueLT-63MdExObl'
export const boldExtendedOblique = 'HelveticaNeueLT-73BdExObl'
export const heavyExtendedOblique = 'HelveticaNeueLT-83HvExObl'
export const blackExtendedOblique = 'HelveticaNeueLT-93BlkExObl'

//Condensed
export const ultraLightCondensed = 'HelveticaNeueLT-27UltLtCn'
export const thinCondensed = 'HelveticaNeueLT-37ThCn'
export const lightCondensed = 'HelveticaNeueLT-47LtCn'
export const condensed = 'HelveticaNeueLT-57Cn'
export const mediumCondensed = 'HelveticaNeueLT-67MdCn'
export const boldCondensed = 'HelveticaNeueLT-77BdCn'
export const heavyCondensed = 'HelveticaNeueLT-87HvCn'
export const blackCondensed = 'HelveticaNeueLT-97BlkCn'
export const extraBlackCondensed = 'HelveticaNeueLT-107XBlkCn'

//CondensedOblique
export const ultraLightCondensedOblique = 'HelveticaNeueLT-27UltLtCnObl'
export const thinCondensedOblique = 'HelveticaNeueLT-37ThCnObl'
export const lightCondensedOblique = 'HelveticaNeueLT-47LtCnObl'
export const condensedOblique = 'HelveticaNeueLT-57CnObl'
export const mediumCondensedOblique = 'HelveticaNeueLT-67MdCnObl'
export const boldCondensedOblique = 'HelveticaNeueLT-77BdCnObl'
export const heavyCondensedOblique = 'HelveticaNeueLT-87HvCnObl'
export const blackCondensedOblique = 'HelveticaNeueLT-97BlkCnObl'
export const extraBlackCondensedOblique = 'HelveticaNeueLT-107XBlkCnObl'

const styles = StyleSheet.create({
	h1: {
		fontFamily: bold,
		fontSize: RFValue(21, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		letterSpacing: -0.33,
		color: Colors.subtitle,
	},
	h2: {
		fontFamily: bold,
		fontSize: RFValue(16, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		color: Colors.subtitle,
	},
	h3: {
		fontFamily: bold,
		fontSize: RFValue(14, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		color: Colors.subtitle,
	},
	body: {
		fontFamily: roman,
		fontSize: RFValue(16, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		color: Colors.subtitle,
	},
	bodyItalic: {
		fontFamily: italic,
		fontSize: RFValue(16, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		color: Colors.subtitle,
	},
	fb: {
		color: Colors.white,
		fontSize: RFValue(16, standardScreenHeight),
		fontFamily: bold,
	},
	login: {
		fontSize: RFValue(30, standardScreenHeight),
		textAlign: 'center',
		fontFamily: bold,
	},
	or: {
		fontSize: RFValue(30, standardScreenHeight),
		fontFamily: bold,
		color: Colors.gray,
	},
	signUp: {
		fontSize: RFValue(30, standardScreenHeight),
		fontFamily: bold,
		color: Colors.signUp,
		textAlign: 'center',
	},
	inputLabel: {
		fontSize: RFValue(16, standardScreenHeight),
		marginBottom: '3%',
		fontFamily: roman,
	},
	forgot: {
		fontSize: RFValue(16, standardScreenHeight),
		marginTop: '5%',
		textAlign: 'center',
		fontFamily: roman,
	},
	logInBtn: {
		textAlign: 'center',
		fontSize: RFValue(16, standardScreenHeight),
		fontFamily: roman,
	},
	collectionDescrip: {
		fontFamily: italic,
		fontSize: RFValue(16, standardScreenHeight),
		lineHeight: RFValue(27, standardScreenHeight),
		color: Colors.subtitle,
	},
	createCNbtn: {
		color: Colors.primary,
		fontFamily: bold,
		fontSize: RFValue(12, standardScreenHeight),
		letterSpacing: -0.33,
	},
	textInput: {
		maxWidth: '90%',
		height: '100%',
		marginLeft: RFValue(8, standardScreenHeight),
		color: Colors.darkGray,
		fontFamily: roman,
		fontSize: RFValue(16, standardScreenHeight),
	},
})

export const h1 = styles.h1
export const h2 = styles.h2
export const h3 = styles.h3
export const body = styles.body
export const bodyItalic = styles.bodyItalic
export const fb = styles.fb
export const login = styles.login
export const or = styles.or
export const signUp = styles.signUp
export const inputLabel = styles.inputLabel
export const forgot = styles.forgot
export const logInBtn = styles.logInBtn
export const collectionDescrip = styles.collectionDescrip
export const createCNbtn = styles.createCNbtn
export const textInput = styles.textInput
