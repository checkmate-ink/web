export interface PdfLabels {
  nameLabel: string;
  dateLabel: string;
  items: string;
  subtitle: string;
  sectionTitle: (index: number, name: string) => string;
}
