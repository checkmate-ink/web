import { View } from "@react-pdf/renderer";

import { styles } from "./style";

export function PdfOpenEnded() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }, (_, i) => (
        <View key={i} style={styles.line} />
      ))}
    </View>
  );
}
