import { Dimensions, Platform } from 'react-native';
// import themes from '../../assets/themes'
const { width, height } = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const guidelineWidth = Platform.isPad ? 560 : 360;




export const COLORS = {
    black: '#000000',
    white: '#ffffff',
    lightWhite: '#fcfcfc',
    light: '#FCFFF7',
    gray: '#EFF2F7',
    gray1a: '#E8E8E8',
    gray1: '#65719029',
    gray2: '#B8CADE45',
    gray3: '#00000029',
    gray4: '#B4B5B5',
    gray5: '#00000073',
    gray6: '#00000085',
    gray7: '#707070',
    primary: '#001EC5',
    secondary: '#000601',
    background: '#FCFFF7',
    deepBlue: '#001F55',
    red: '#FF3D00',
    green: '#4CAF50',
    blue: '#039BE5',
    orange: '#FAC621',
    boxblue: '#424F95',
    grey: '#161615',
    chocolate: '#200A4D99',
    neutral: '#323F4B',
    backGround: '#FAFAFA',
    skyBlue: '#E7EAFF'
};

export const globalColor = {
    bgWhite: (opacity:number) => `rgba(255,255,255, ${opacity})`
};

export const SIZES = {
    //global sizes
    base: screenHeight * 0.01,
    font: screenHeight * 0.0175,
    radius: 5,
    padding: screenHeight * 0.03,

    // font sizes
    navTitle: screenHeight * 0.04375,
    h1: screenHeight * 0.0375,
    h2: screenHeight * 0.0275,
    h2a: screenHeight * 0.034,
    h2c: screenHeight * 0.0245,
    h3: screenHeight * 0.0225,
    h3a: screenHeight * 0.0235,
    h4: screenHeight * 0.0175,
    h5: screenHeight * 0.015,
    body1: screenHeight * 0.0355,
    body2: screenHeight * 0.025,
    body3: screenHeight * 0.02,
    body3a: screenHeight * 0.02,
    body3b: screenHeight * 0.022,
    body4: screenHeight * 0.0175,
    body5: screenHeight * 0.015,
    body6: screenHeight * 0.01,
    intro: screenHeight * 0.04,

    // app dimensions
    width,
    height,
};



const appTheme = { SIZES, COLORS, globalColor };

export default appTheme;