import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, ImageBackground, SafeAreaView, Touchable, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import { COLORS, icons, images } from '../constants';
import SearchInput from '../components/SearchInput';
import { scale } from '../utils/shared';
import Ionicons from '@expo/vector-icons/Ionicons';
import { geLocationData, getWeatherData } from '../../api/WeatherApi';
import debounce from 'lodash/debounce';
import { weatherImages } from '../constants/images';
import { getData, storeData } from '../utils/AsyncStorage';

// Interfaces for type checking the weather data
interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

interface Current {
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

interface Forecast {
    forecastday: [
        {
            date: string;
            day: {
                avgtemp_c: number;
                condition: {
                    text: string;
                };
            };
        }
    ];
}

// HomeScreen functional component
const HomeScreen: React.FC = () => {
    // State variables
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [weatherData, setWeatherData] = useState<{ current?: Current; location?: Location; forecast?: Forecast }>({});
    const [Locations, setLocations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Function to fetch location data based on search query
    const GetDatas = async (query: string) => {
        try {
            const result = await geLocationData(query);
            setLocations(result);
            console.log({ result });
        } catch (error) {
            console.error(error);
        }
    };

    // Debounced version of GetDatas to limit the number of API calls
    const debouncedGetDatas = useCallback(
        debounce((query: string) => {
            GetDatas(query);
        }, 1000),
        []
    );

    // Handle search input changes and trigger debounced location data fetching
    const HandleSearch = (value: string) => {
        setSearchQuery(value);
        if (value?.length > 3) {
            setShowSearch(true)
            debouncedGetDatas(value);
        }
    };

    // Handle the selection of a location from search results and fetch weather data
    const handleLocation = (loc: any) => {
        console.log({ loc });
        setLocations([]);
        getWeatherData(loc, '7').then(data => {
            setLoading(true);
            setWeatherData(data);
            storeData('city', loc)
            setLoading(false);
            console.log('datatata................', data);
        });
    };

    // Destructure the weather data for easier access
    const { current, location, forecast } = weatherData;

    // Fetch default weather data (e.g., for Lagos) on component mount
    const fetchMyLocationData = async() => {
        let myCity = await getData('city');
        console.log({myCity})
        let cityName = myCity ? myCity : 'Lagos'; // If myCity is truthy, cityName will be set to myCity, otherwise it will default to 'Lagos'
        getWeatherData(cityName, '7').then(data => {
            setWeatherData(data);
            setLoading(false);
            console.log('data................', data);
        });
    };
    

    // useEffect hook to fetch default weather data when the component mounts
    useEffect(() => {
        fetchMyLocationData();
    }, []);

    return (
        <ImageBackground
            source={images.bg}
            blurRadius={70}
            imageStyle={{}}
            style={styles.container}
        >
            <ScrollView>
                {/* Search section */}
                <SearchInput
                    showSearch={showSearch}
                    setShowSearch={setShowSearch}
                    SearchQuery={searchQuery}
                    setSearchQuery={HandleSearch}
                />

                {/* Loading indicator */}
                {loading ? (
                    <View style={styles.loader}>
                        <ActivityIndicator size={'large'} color={COLORS.white} />
                    </View>
                ) : (
                    <View style={styles.body}>
                        <View>
                            {/* Location search results */}
                            {Locations?.length > 0 && showSearch ? (
                                <View style={styles.locationContainer}>
                                    {Locations.map((loc, index) => (
                                        <TouchableOpacity
                                            onPress={() => handleLocation(loc?.name)}
                                            style={styles.locationView}
                                            key={index}
                                        >
                                            <Text style={styles.locationText}>{loc?.name}, {loc?.country}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ) : null}
                        </View>

                        {/* Forecast section */}
                        <View style={styles.forecastConatiner}>
                            <Text style={styles.forecastText}>{location?.name}, <Text style={styles.forecastText2}>{location?.country}</Text></Text>
                            <View>
                                <Image
                                    source={weatherImages[current?.condition?.text]}
                                    style={styles.image}
                                />
                            </View>
                        </View>

                        {/* Current temperature and condition */}
                        <View style={styles.degreeView}>
                            <Text style={styles.degreeText}>{current?.temp_c}&#176;</Text>
                            <Text style={styles.forecastText2}>{current?.condition?.text}</Text>
                        </View>

                        {/* Other weather stats */}
                        <View style={styles.otherViewContainer}>
                            <View style={styles.otherView}>
                                <Image source={icons.wind} style={styles.icon} />
                                <Text style={styles.otherText}>{current?.wind_kph} km/h</Text>
                            </View>
                            <View style={styles.otherView}>
                                <Image source={icons.drop} style={styles.icon} />
                                <Text style={styles.otherText}>{current?.humidity}%</Text>
                            </View>
                            <View style={styles.otherView}>
                                <Image source={icons.sun} style={styles.icon} />
                                <Text style={styles.otherText}>{current?.uv}PM</Text>
                            </View>
                        </View>

                        {/* Daily forecast section */}
                        <View style={styles.nextDaySection}>
                            <Ionicons name="calendar" size={24} color={COLORS.white} />
                            <Text style={styles.otherText}>Daily Forecast</Text>
                        </View>

                        {/* Daily forecast items */}
                        <ScrollView 
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{ marginTop: scale(14) }}
                        >
                            {forecast?.forecastday?.map((item, index) => {
                                return (
                                    <View style={styles.dailyForecast} key={index}>
                                        <Image
                                            source={weatherImages[item?.day?.condition?.text]}
                                            style={styles.sun}
                                        />
                                        <Text style={styles.days}>{item?.date}</Text>
                                        <Text style={styles.degrees}>{item?.day?.avgtemp_c}&#176;</Text>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                )}
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeScreen;
