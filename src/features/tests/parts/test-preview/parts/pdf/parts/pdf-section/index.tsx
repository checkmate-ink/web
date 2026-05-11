import { Text, View } from "@react-pdf/renderer";

import { styles } from "./style";

interface PdfSectionProps {
  title: string;
}

export function PdfSection({ title }: PdfSectionProps) {
  return (
    <View style={styles.container} minPresenceAhead={60}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
}
