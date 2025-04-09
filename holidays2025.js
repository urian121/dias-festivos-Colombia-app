// Días festivos en Colombia para el año 2025
export const colombiaHolidays2025 = [
  "2025-01-01", // Año Nuevo
  "2025-01-06", // Reyes Magos
  "2025-03-24", // San José
  "2025-04-17", // Jueves Santo
  "2025-04-18", // Viernes Santo
  "2025-05-01", // Día del Trabajo
  "2025-06-02", // Día de la Ascensión de Jesus
  "2025-06-23", // Corpus Christi
  "2025-06-30", // Día de San Pedro y San Pablo
  "2025-07-20", // Día de la Independencia
  "2025-08-07", // Batalla de Boyacá
  "2025-08-18", // Asunción de la Virgen
  "2025-10-08", // Día de la Raza
  "2025-10-13", // Día de la Raza
  "2025-11-03", // Todos los Santos
  "2025-11-17", // Independencia de Cartagena
  "2025-12-08", // Inmaculada Concepción
  "2025-12-25", // Navidad
];

// Mapa de nombres completos para los festivos
const holidayNamesMap = {
  "2025-01-01": "Año Nuevo",
  "2025-01-06": "Día de los Reyes Magos",
  "2025-03-24": "Día de San José",
  "2025-04-17": "Jueves Santo",
  "2025-04-18": "Viernes Santo",
  "2025-05-01": "Día del Trabajo",
  "2025-06-02": "Día de la Ascensión de Jesús",
  "2025-06-23": "Corpus Christi",
  "2025-06-30": "Día de San Pedro y San Pablo",
  "2025-07-20": "Día de la Independencia",
  "2025-08-07": "Batalla de Boyacá",
  "2025-08-18": "Asunción de la Virgen",
  "2025-10-08": "Día de la Raza",
  "2025-10-13": "Día de la Raza",
  "2025-11-03": "Todos los Santos",
  "2025-11-17": "Independencia de Cartagena",
  "2025-12-08": "Inmaculada Concepción",
  "2025-12-25": "Navidad",
};

// Función para obtener el nombre completo de un festivo por fecha
export const getHolidayName = (dateString) => {
  return holidayNamesMap[dateString] || "Día Festivo";
};
