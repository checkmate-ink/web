import { Document, Page, View } from "@react-pdf/renderer";

import type { TestEditValues } from "../../types";
import { PdfHeader } from "./parts/pdf-header";
import { PdfQuestion } from "./parts/pdf-question";
import { PdfSection } from "./parts/pdf-section";
import { styles } from "./style";
import type { PdfLabels } from "./types";

interface TestDocumentProps {
  data: TestEditValues;
  labels: PdfLabels;
}

export function TestDocument({ data, labels }: TestDocumentProps) {
  let questionCounter = 0;

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PdfHeader title={data.title} labels={labels} />
        <View style={styles.content}>
          {data.groups.map((group, groupIndex) => (
            <View
              key={groupIndex}
              break={groupIndex > 0}
              style={{ gap: 28 }}
            >
              <PdfSection title={labels.sectionTitle(groupIndex, group.name)} />
              {group.questions.map((question, qIndex) => {
                questionCounter++;
                return (
                  <PdfQuestion
                    key={qIndex}
                    question={question}
                    questionNumber={questionCounter}
                    itemsLabel={labels.items}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
