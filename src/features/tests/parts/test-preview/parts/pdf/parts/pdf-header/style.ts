import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingHorizontal: 60,
    paddingBottom: 20,
    gap: 6,
  },
  title: {
    fontFamily: "Besley",
    fontSize: 22,
    fontWeight: 700,
    color: "#000000",
  },
  subtitle: {
    fontFamily: "Work Sans",
    fontSize: 12,
    color: "#555555",
  },
  infoRow: {
    flexDirection: "row",
    gap: 32,
    paddingTop: 14,
    alignItems: "flex-end",
  },
  nameField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  dateField: {
    width: 180,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  fieldLabel: {
    fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: 600,
    color: "#000000",
  },
  fieldLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },
  separator: {
    height: 1.5,
    backgroundColor: "#000000",
  },
});
