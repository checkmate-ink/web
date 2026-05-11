import { Text, View } from "@react-pdf/renderer";

import type { EditableOrderingItem } from "../../../../../../types";
import { styles } from "./style";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface PdfOrderingProps {
  items: EditableOrderingItem[];
}

export function PdfOrdering({ items }: PdfOrderingProps) {
  const shuffled = shuffle(items);

  return (
    <View style={styles.container}>
      {shuffled.map((item, i) => (
        <Text key={i} style={styles.item}>
          {"___"} {item.text}
        </Text>
      ))}
    </View>
  );
}
