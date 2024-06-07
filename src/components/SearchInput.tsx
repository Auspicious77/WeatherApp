import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, globalColor } from '../constants';
import { scale } from '../utils/shared';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchProps {
    SearchQuery?: string
    setSearchQuery: (query: string) => void;
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
}

const SearchInput: React.FC<SearchProps> = ({ SearchQuery, setSearchQuery, showSearch, setShowSearch }) => {
    return (
        <View style={styles.SearchInput}>
           
                <TextInput
                    style={{ width: '90%', marginLeft: scale(5), ...styles.input, color: COLORS.white }}
                    placeholder="Search city, location"
                    placeholderTextColor={COLORS.gray4}
                    value={SearchQuery}
                    onChangeText={setSearchQuery}
                />
         

            <TouchableOpacity
                onPress={() => setShowSearch(!showSearch)}
                style={styles.searchContainer}>
                <Ionicons
                    name="search"
                    size={24}
                    color={COLORS.white} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    searchContainer: {
        height: 34,
        width: 34,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalColor.bgWhite(0.4)
    },
   
    input: {
        // fontStyle: 'italic'
    },
    SearchInput: {
        marginHorizontal: scale(20),
        marginTop: scale(10),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray7,
        borderRadius: SIZES.radius * 5,
        backgroundColor: globalColor.bgWhite(0.2),
        marginBottom: SIZES.base,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: scale(7)
    },
});

export default SearchInput;
