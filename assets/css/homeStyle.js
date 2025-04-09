import { StyleSheet } from "react-native";

// Paleta de colores - Inspirada en colores patrióticos colombianos
const COLORS = {
  primary: "#1D3557", // Azul oscuro
  secondary: "#457B9D", // Azul medio
  accent: "#E63946", // Rojo
  light: "#F1FAEE", // Blanco roto / Crema
  white: "#FFFFFF", // Blanco
  gray: "#e0e0e0", // Gris claro
  textDark: "#1D3557", // Texto oscuro
  textMedium: "#457B9D", // Texto medio
  textLight: "#F1FAEE", // Texto claro
};

const styles = StyleSheet.create({
  // Contenedores principales
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  content: {
    flex: 1,
    padding: 16,
  },

  // Header
  header: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    color: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.textLight,
    textAlign: "center",
  },

  // Secciones y tarjetas
  sectionContainer: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    /*
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    */
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: COLORS.textDark,
    marginBottom: 12,
  },

  // Calendario
  calendar: {
    borderRadius: 12,
    overflow: "hidden",
  },

  // Próximos festivos
  upcomingHoliday: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    /*borderBottomWidth: 1,*/
    borderBottomColor: COLORS.gray,
  },
  dateBadge: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  dateBadgeText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  dateBadgeMonth: {
    color: COLORS.white,
    fontSize: 12,
  },
  holidayInfo: {
    marginLeft: 12,
    flex: 1,
  },
  holidayName: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.textDark,
  },
  holidayDate: {
    fontSize: 14,
    color: COLORS.textMedium,
  },

  // Leyenda
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    color: COLORS.textDark,
    fontSize: 14,
  },

  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textDark,
    marginBottom: 10,
    textAlign: "center",
  },
  modalDate: {
    fontSize: 16,
    color: COLORS.textMedium,
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default styles;
