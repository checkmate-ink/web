import { Text, View } from "@react-pdf/renderer";

import type { EditableOption } from "../../../../../../types";
import { styles } from "./style";

interface PdfMcqProps {
  options: EditableOption[];
}

export function PdfMcq({ options }: PdfMcqProps) {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Text key={option.label} style={styles.option}>
          {option.label}) {option.text}
        </Text>
      ))}
    </View>
  );
}
