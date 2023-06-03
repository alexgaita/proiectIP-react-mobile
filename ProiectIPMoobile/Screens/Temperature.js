import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';


const data = [
    { id: '1', date: '2023-06-01', time: '09:30', temperature: 36.6 },
    { id: '2', date: '2023-06-01', time: '13:45', temperature: 36.7 },
    { id: '3', date: '2023-06-02', time: '08:15', temperature: 36.2 },
    { id: '4', date: '2023-06-02', time: '14:20', temperature: 37.1 },
    { id: '5', date: '2023-06-03', time: '10:00', temperature: 36.9 },
    { id: '6', date: '2023-06-03', time: '15:30', temperature: 37.0 },
];

const ListItemSeparator = () => <View style={styles.separator} />;
const ListHeader = () =>
    <View style={styles.itemContainer}>
        <View style={styles.dateContainer}>
            <Text style={styles.headerText}>Date</Text>
        </View>
        <View style={styles.readingContainer}>
            <Text style={styles.headerText}>Time</Text>
            <Text style={styles.headerText}>Temperature</Text>
        </View>
    </View>

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <View style={styles.dateContainer}>
            <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <View style={styles.readingContainer}>
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemTemperature}>{item.temperature}°C</Text>
        </View>
    </View>
);


const keyExtractor = (item) => item.id;

const Temperature = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.istoricContainer}>
                <Icon name="thermometer" size={25} color={colors.textBlue}></Icon>
                <Text style={styles.title}>Istoric temperatura</Text>
                <Icon name="home" size={25} color={colors.textBlue} onPress={() => navigation.navigate('Home')}></Icon>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ListItemSeparator}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponent={ListHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        paddingTop: 10
    },
    title: {
        fontSize: 22,
        //fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Nunito-SemiBold',
    },
    contentContainer: {
        flexGrow: 1,
        paddingTop: 30,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    dateContainer: {
        width: '15%',
    },
    readingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '10%',
    },
    itemDate: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#035270',
    },
    itemTime: {
        fontSize: 16,
        color: '#025372',
    },
    itemTemperature: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#025372',
    },
    separator: {
        height: 1,
        backgroundColor: colors.textGrey,
        marginVertical: 5,
    },
    istoricContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#035270',
    },
});

export default Temperature;
