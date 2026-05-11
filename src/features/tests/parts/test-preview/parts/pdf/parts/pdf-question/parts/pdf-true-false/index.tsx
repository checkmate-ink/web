import { Text, View } from "@react-pdf/renderer";

import { styles } from "./style";

export function PdfTrueFalse() {
  return (
    <View style={styles.container}>
      <Text style={styles.option}>{"\u25CB"} True</Text>
      <Text style={styles.option}>{"\u25CB"} False</Text>
    </View>
  );
}
