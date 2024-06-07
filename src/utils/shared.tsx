import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineWidth = Platform.isPad ? 560 : 360;

export const scale = (size:number) => (width / guidelineWidth) * size;

export const API_KEY = '0c0e997a1775439ba3a121631240706'