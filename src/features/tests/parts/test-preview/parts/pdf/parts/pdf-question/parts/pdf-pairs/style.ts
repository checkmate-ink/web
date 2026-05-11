import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 48,
    paddingLeft: 24,
  },
  column: {
    flex: 1,
    gap: 8,
  },
  item: {
    fontFamily: "Work Sans",
    fontSize: 13,
  },
});
