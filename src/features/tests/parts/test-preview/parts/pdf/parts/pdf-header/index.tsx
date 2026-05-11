import { Text, View } from "@react-pdf/renderer";

import type { PdfLabels } from "../../types";
import { styles } from "./style";

interface PdfHeaderProps {
  title: string;
  labels: PdfLabels;
}

export function PdfHeader({ title, labels }: PdfHeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{labels.subtitle}</Text>
        <View style={styles.infoRow}>
          <View style={styles.nameField}>
            <Text style={styles.fieldLabel}>{labels.nameLabel}</Text>
            <View style={styles.fieldLine} />
          </View>
          <View style={styles.dateField}>
            <Text style={styles.fieldLabel}>{labels.dateLabel}</Text>
            <View style={styles.fieldLine} />
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );
}
