import { Text, View } from "@react-pdf/renderer";

import type { EditableCategoryItem } from "../../../../../../types";
import { styles } from "./style";

interface PdfCategorizationProps {
  categories: EditableCategoryItem[];
  itemsLabel: string;
}

export function PdfCategorization({
  categories,
  itemsLabel,
}: PdfCategorizationProps) {
  const allItems = categories.flatMap((cat) => cat.items.map((i) => i.value));

  return (
    <View>
      <View style={styles.table}>
        {categories.map((cat, i) => (
          <View
            key={i}
            style={i === 0 ? styles.column : styles.columnWithBorder}
          >
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>{cat.category}</Text>
            </View>
            <View style={styles.bodyCell} />
          </View>
        ))}
      </View>
      <View style={styles.itemsRow}>
        <Text style={styles.itemsText}>
          {itemsLabel} {allItems.join("  \u00B7  ")}
        </Text>
      </View>
    </View>
  );
}
