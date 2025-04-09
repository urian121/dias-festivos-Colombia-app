// Días festivos en Colombia para el año 2025
export const holidays = {
  2024: {
    "2024-01-01": "Año Nuevo",
    "2024-01-08": "Reyes Magos",
    "2024-03-19": "Día de San José",
    "2024-03-28": "Jueves Santo",
    "2024-03-29": "Viernes Santo",
    "2024-05-01": "Día del Trabajo",
    "2024-05-13": "Ascensión de Jesús",
    "2024-06-03": "Corpus Christi",
    "2024-06-10": "Sagrado Corazón",
    "2024-07-01": "San Pedro y San Pablo",
    "2024-07-20": "Día de la Independencia",
    "2024-08-07": "Batalla de Boyacá",
    "2024-08-19": "Asunción de la Virgen",
    "2024-10-14": "Día de la Raza",
    "2024-11-04": "Todos los Santos",
    "2024-11-11": "Independencia de Cartagena",
    "2024-12-08": "Inmaculada Concepción",
    "2024-12-25": "Navidad",
  },
  2025: {
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
  },
  2026: {
    "2026-01-01": "Año Nuevo",
    "2026-01-06": "Día de los Reyes Magos",
    "2026-03-23": "Día de San José",
    "2026-04-02": "Jueves Santo",
    "2026-04-03": "Viernes Santo",
    "2026-05-01": "Día del Trabajo",
    "2026-05-11": "Ascensión de Jesús",
    "2026-06-01": "Corpus Christi",
    "2026-06-15": "Sagrado Corazón",
    "2026-07-20": "Día de la Independencia",
    "2026-08-07": "Batalla de Boyacá",
    "2026-08-17": "Asunción de la Virgen",
    "2026-10-12": "Día de la Raza",
    "2026-11-02": "Todos los Santos",
    "2026-11-16": "Independencia de Cartagena",
    "2026-12-08": "Inmaculada Concepción",
    "2026-12-25": "Navidad",
  },
};



export const getHolidayDates = (year) => {
  return holidays[year] ? Object.keys(holidays[year]) : [];
};

export const getHolidayName = (dateString) => {
  const year = dateString.slice(0, 4);
  return holidays[year]?.[dateString] || "Día Festivo";
};