import { StyleSheet } from "react-native";
import { scale } from "../utils/shared";
import { COLORS, SIZES, globalColor } from "../constants";



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: scale(40),
       
    },
    body: {
        marginHorizontal: scale(20)
    },
  
    locationContainer:{
        backgroundColor: COLORS.skyBlue,
        paddingVertical: scale(7),
        paddingHorizontal: scale(7),
        borderRadius: SIZES.radius*6

    },
    loader: {
        alignContent: 'center', 
        marginTop: scale(200), 
        alignItems: 'center', 
        alignSelf: 'center'
    },
    locationView: {
        margin: scale(6),
        marginBottom: scale(13),
        borderBottomWidth: 0.8,
        paddingBottom: scale(4)

    },
    locationText: {
        fontSize: scale(15),
        color: COLORS.gray7
    },
    forecastConatiner: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: scale(70)
    },
    forecastText : {
        fontSize: scale(26),
        color: COLORS.white,
        fontWeight: 'bold'
    },
    forecastText2 : {
        fontSize: scale(24),
        color: COLORS.white,
        fontWeight: '400'
    },
    image: {
        height: scale(200),
        width: scale(200),
        marginTop: scale(30)
    },
    degreeView: {
        marginTop: scale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    degreeText: {
        fontWeight: 'bold',
        fontSize: scale(35),
        color: COLORS.white
    },
    otherViewContainer: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(10),
    },
    otherView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: scale(10),
        
    },
    otherText: {
        color: COLORS.white,
        fontSize: scale(16),
        opacity: 0.8,
        marginLeft: scale(7)
    },
    icon: {
        height: scale(20),
        width: scale(20),
        resizeMode: 'contain',
        opacity: 0.8,
    },
    nextDaySection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: scale(20)
    },
    dailyForecast: {
        height: scale(100),
        width: scale(80),
        // paddingHorizontal: scale(20),
        // paddingVertical: scale(15),
        backgroundColor: globalColor.bgWhite(0.15),
        borderRadius: SIZES.radius*3.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: scale(3)
    },
    sun: {
        height: scale(27),
        width: scale(27),
        resizeMode: 'contain'
    },
    days: {
        color: COLORS.white
    },
    degrees: {
        color: COLORS.white
    }
})