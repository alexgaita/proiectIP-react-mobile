import React, { useEffect, useState } from 'react';
import { TextInput, ImageBackground, Text, StyleSheet, Button, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import { Calendar } from 'react-native-calendars';
import { FlatList } from 'react-native';
import { db } from '../App';
import { collection, getDocs } from 'firebase/firestore';
import dayjs from 'dayjs';

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const activitiesData = {
  '2023-05-11': [
    { time: '09:00 AM', activity: 'Running', duration: '15 mins' },
    { time: '04:00 PM', activity: 'Walking', duration: '1 hour' },
  ],
  '2023-05-12': [{ time: '11:00 AM', activity: 'Walking', duration: '2 hours' }],
};

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState({});

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const handleMonthChange = (month) => {
    setSelectedDate(null); 
    //console.log('Month changed', month);
  };

  

  const fetchData = async () => {
    const queryResponse = await getDocs(collection(db,'activities'))
  
    let activityList = {};
    queryResponse.forEach((doc)=>{
      const date = dayjs.unix(doc.data().startTime.seconds);
      activityList[date.format("YYYY-MM-DD")] = (activityList[date.format("YYYY-MM-DD")] || []).concat({...doc.data(), startTime:date.format("HH:mm")} )
      // console.log(dayjs.unix(doc.data().startTime.seconds).format("YYYY-MM-DD"))
      // console.log(doc.data().startTime.toDate().toDateString())
      // console.log(doc.data().startTime.toDate().toLocaleTimeString())
    })
    setActivities(activityList);
    //console.log(activityList['2023-05-18'])
  }

  useEffect(()=>{
    fetchData()
  },[])

  const renderActivity = ({ item }) => (
    <View style={styles.activityItem}>
      <Text style={styles.activityTime}>{item.startTime}</Text>
      <Text style={styles.activityName}>{item.name}</Text>
      <Text style={styles.activityDuration}>{item.duration}</Text>
      <Text style={styles.activityDuration}>{item.description}</Text>
    </View>
  );

  const renderActivitiesForSelectedDate = () => {
    if (!selectedDate || !activities[selectedDate]) {
      return null;
    }

    return (
      <FlatList
        data={activities[selectedDate]}
        renderItem={renderActivity}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const renderDay = (day, item) => {
    const isSelected = selectedDate === day.dateString;
    const markedStyle = {
      borderRadius: 20,
      backgroundColor: isSelected ? colors.textPeach : undefined,
      justifyContent: 'center',
      alignItems: 'center',
    };
    const dotStyle = {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: isSelected ? colors.textPeach : undefined,
    };

    return (
      <View style={styles.dayContainer}>
        <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day.day}</Text>
        {item && (
          <View style={markedStyle}>
            <View style={dotStyle} />
          </View>
        )}
      </View>
    );
  };

  return (
   
      <ImageBackground style={styles.image} source={require('../assets/images/Calendar_img.png')}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon style={styles.iconMenu} name="align-justify" size={35} color={colors.textWhite} />
        </TouchableOpacity>
        <Text style={styles.textHi}>CALENDAR</Text>
      
      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendarContainer}
          onDayPress={handleDayPress}
          onMonthChange={handleMonthChange}
          renderDay={renderDay}
          markedDates={{ [selectedDate]: { selected: true } }}
          //markingType="period"
          theme={{
            calendarBackground: colors.textWhite, //'transparent',
            textSectionTitleColor: colors.textGrey,
            selectedDayBackgroundColor: colors.textPeach,
            selectedDayTextColor: colors.textWhite,
            todayTextColor: colors.textRed,
            dayTextColor: colors.textBlack,
            textDisabledColor: colors.textGrey,
            monthTextColor: colors.textBlack,
            textDayFontFamily: 'Nunito-Regular',
            textMonthFontFamily: 'Nunito-Bold',
            textDayHeaderFontFamily: 'Nunito-Bold',
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>
      {renderActivitiesForSelectedDate()}
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconMenu: {
    marginTop: '4%',
    marginLeft: '4%',
  },
  textHi: {
    fontFamily: 'Nunito-Bold',
    color: colors.textBlack,
    marginBottom: 10,
    marginTop: '4%',
    fontSize: 33,
    marginLeft: '5%',
  },
  calendarContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
   
    //backgroundColor: colors.white,
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textBlack,
  },
  selectedDayText: {
    color: colors.textWhite,
  },
  activityItem: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderBottomWidth: 1,
    borderBottomColor: colors.textBlue,
  },
  activityTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textBlack,
  },
  activityName: {
    fontSize: 14,
    color: colors.textBlack,
  },
  activityDuration: {
    fontSize: 14,
    color: colors.textGrey,
  },
});

export default CalendarScreen;
