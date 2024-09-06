import React from "react";
import { Calendar as RNCalendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { View } from "react-native";

const Calendar = () => {
  const darkMode = useSelector(state => state.user.darkMode);
  const today = new Date().toISOString().split('T')[0];

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "black" : "white" }}>
      <RNCalendar key={darkMode ? 'dark' : 'light'}
                  current={today}
                  onDayPress={(day) => {
                    console.warn('selected day', day);
                  }}
        markedDates={{
          [today]: {
            selected: true,
            customStyles: {
              container: {
                borderWidth: 2,
                borderColor: darkMode ? "white" : "blue",
                borderRadius: 10,
              },
              text: {
                color: darkMode ? "white" : "red",
                fontWeight: "bold",
              }
            }
          }
        }}
        theme={{
          calendarBackground: darkMode ? "black" : "white",
          textSectionTitleColor: darkMode ? '#ffffff' : '#000',
          // textDayHeaderFontSize: 20,
          selectedDayBackgroundColor: '#00adf5',
          // selectedDayTextColor: '#ffffff',
          // todayTextColor: darkMode ? '#00adf5' : 'red',
          dayTextColor: darkMode ? '#ffffff' : '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: darkMode ? '#ffffff' : '#00adf5',
          arrowColor: darkMode ? '#ffffff' : 'orange',
          monthTextColor: darkMode ? '#ffffff' : 'blue',
          indicatorColor: darkMode ? '#ffffff' : 'blue',
        }}
      />
    </View>
  );
};

export default Calendar;
