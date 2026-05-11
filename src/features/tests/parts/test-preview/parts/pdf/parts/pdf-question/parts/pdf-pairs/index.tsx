import { Text, View } from "@react-pdf/renderer";

import type { EditablePairItem } from "../../../../../../types";
import { styles } from "./style";

const LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface PdfPairsProps {
  pairs: EditablePairItem[];
}

export function PdfPairs({ pairs }: PdfPairsProps) {
  const leftItems = shuffle(pairs.map((p) => p.item_a));
  const rightItems = shuffle(pairs.map((p) => p.item_b));

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {leftItems.map((item, i) => (
          <Text key={i} style={styles.item}>
            {"___"} {item}
          </Text>
        ))}
      </View>
      <View style={styles.column}>
        {rightItems.map((item, i) => (
          <Text key={i} style={styles.item}>
            {LABELS[i]}) {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
