
// TODO: Calendar old vers.

// import React, { useEffect } from "react";
// import { Calendar as RNCalendar } from 'react-native-calendars';
// import { useSelector } from "react-redux";
// import { AnimatedMapView } from "react-native-maps/lib/MapView";
// import { View } from "react-native";
//
// const Calendar = () => {
//   const darkMode = useSelector(state => state.user.darkMode);
//   // console.warn(darkMode);
//
//   useEffect(() => {
//     // Tema değişikliğinde render'ı tetiklemek için
//   }, [darkMode]);
//
//   return (
//     <View style={{ flex: 1, backgroundColor: darkMode ? "black" : "white" }}>
//       <RNCalendar
//         key={darkMode ? 'dark' : 'light'}
//         current={'2024-09-01'}
//         onDayPress={(day) => {
//           console.warn('selected day', day);
//         }}
//         // O ayda belirtilen günleri işaretlemek için
//         // markedDates={{
//         //   '2024-09-16': { selected: true, marked: true, selectedColor: 'blue' },
//         //   '2024-09-17': { marked: true },
//         //   '2024-09-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
//         //   '2024-09-19': { disabled: true, disableTouchEvent: true },
//         // }}
//         // Takvim teması için
//         theme={{
//           backgroundColor: 'red',
//           calendarBackground: darkMode ? "black" : "white",
//           textSectionTitleColor: darkMode ? '#ffffff' : '#b6c1cd',
//           selectedDayBackgroundColor: '#00adf5',
//           selectedDayTextColor: '#ffffff',
//           todayTextColor: darkMode ? '#00adf5' : 'red',
//           dayTextColor: darkMode ? '#ffffff' : '#2d4150',
//           textDisabledColor: '#d9e1e8',
//           dotColor: darkMode ? '#ffffff' : '#00adf5',
//           arrowColor: darkMode ? '#ffffff' : 'orange',
//           monthTextColor: darkMode ? '#ffffff' : 'blue',
//           indicatorColor: darkMode ? '#ffffff' : 'blue',
//           textDayFontFamily: 'monospace',
//           textMonthFontFamily: 'monospace',
//           textDayHeaderFontFamily: 'monospace',
//           textDayFontWeight: '300',
//           textMonthFontWeight: 'bold',
//           textDayHeaderFontWeight: '300',
//           textDayFontSize: 16,
//           textMonthFontSize: 16,
//           textDayHeaderFontSize: 16,
//         }}
//       />
//     </View>
//   );
// };
//
// export default Calendar;
