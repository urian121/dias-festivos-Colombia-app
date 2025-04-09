import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";
import { colombiaHolidays2025, getHolidayName } from "./holidays2025";
import styles from "./assets/css/homeStyle";

// Configuración del idioma español para el calendario
LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};
LocaleConfig.defaultLocale = "es";

export default function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [upcomingHolidays, setUpcomingHolidays] = useState([]);
  const [currentHoliday, setCurrentHoliday] = useState(null);

  // Prepare calendar marked dates
  // Prepare calendar marked dates
  const markedDates = colombiaHolidays2025.reduce((acc, date) => {
    acc[date] = {
      selected: true,
      selectedColor: "#ffcccb", // Un rojo claro para el fondo del círculo
      selectedTextColor: "#E63946", // Color del texto dentro del círculo (rojo)
      customStyles: {
        container: {
          borderWidth: 2,
          borderColor: "#E63946", // Borde rojo
        },
      },
    };
    return acc;
  }, {});

  // Add selected date marking if not a holiday
  if (selectedDate && !markedDates[selectedDate]) {
    markedDates[selectedDate] = {
      selected: true,
      selectedColor: "#E9ECEF",
    };
  }

  // Calculate upcoming holidays on component mount
  useEffect(() => {
    calculateUpcomingHolidays();
  }, []);

  // Calculate next holidays from today
  const calculateUpcomingHolidays = () => {
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const upcoming = colombiaHolidays2025
      .filter((date) => date >= todayStr)
      .slice(0, 3)
      .map((date) => ({
        date,
        name: getHolidayName(date),
      }));

    setUpcomingHolidays(upcoming);
  };

  // Handle date selection
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);

    // If selected day is a holiday, show modal with details
    if (colombiaHolidays2025.includes(day.dateString)) {
      setCurrentHoliday({
        date: day.dateString,
        name: getHolidayName(day.dateString),
      });
      setModalVisible(true);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-CO", options);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#1D3557" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>🇨🇴 Festivos Colombia 2025</Text>
        </View>

        <ScrollView style={styles.content}>
          {/* Upcoming holidays section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Próximos Festivos</Text>
            {upcomingHolidays.map((holiday, index) => (
              <View key={index} style={styles.upcomingHoliday}>
                <View style={styles.dateBadge}>
                  <Text style={styles.dateBadgeText}>
                    {new Date(holiday.date).getDate()}
                  </Text>
                  <Text style={styles.dateBadgeMonth}>
                    {new Date(holiday.date).toLocaleDateString("es-CO", {
                      month: "short",
                    })}
                  </Text>
                </View>
                <View style={styles.holidayInfo}>
                  <Text style={styles.holidayName}>{holiday.name}</Text>
                  <Text style={styles.holidayDate}>
                    {formatDate(holiday.date)}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Calendar section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Calendario Anual</Text>
            <Calendar
              markedDates={markedDates}
              markingType="custom"
              onDayPress={handleDayPress}
              monthFormat={"MMMM yyyy"}
              hideExtraDays={true}
              firstDay={1}
              enableSwipeMonths={true}
              theme={{
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#457B9D",
                selectedDayBackgroundColor: "#F1FAEE",
                selectedDayTextColor: "#1D3557",
                todayTextColor: "#E63946",
                dayTextColor: "#1D3557",
                textDisabledColor: "#bbb",
                dotColor: "#E63946",
                selectedDotColor: "#ffffff",
                arrowColor: "#1D3557",
                monthTextColor: "#1D3557",
                indicatorColor: "#1D3557",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "500",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 13,
              }}
              style={styles.calendar}
            />
          </View>

          {/* Legend */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#E63946" }]}
              />
              <Text style={styles.legendText}>Día Festivo</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#457B9D" }]}
              />
              <Text style={styles.legendText}>Día Seleccionado</Text>
            </View>
          </View>
        </ScrollView>

        {/* Holiday detail modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {currentHoliday && (
                <>
                  <Text style={styles.modalTitle}>{currentHoliday.name}</Text>
                  <Text style={styles.modalDate}>
                    {formatDate(currentHoliday.date)}
                  </Text>
                </>
              )}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
