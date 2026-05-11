import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  columnWithBorder: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#000000",
  },
  headerCell: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  headerText: {
    fontFamily: "Work Sans",
    fontSize: 13,
    fontWeight: 600,
    color: "#000000",
  },
  bodyCell: {
    height: 80,
  },
  itemsRow: {
    marginTop: 10,
  },
  itemsText: {
    fontFamily: "Work Sans",
    fontSize: 12,
    fontStyle: "italic",
    color: "#000000",
  },
});
