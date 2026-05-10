import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

import { TestEditModeProvider } from "../../../../context";
import { QUESTION_DEFAULTS } from "../../../../presets";
import type { EditableQuestion, TestEditValues } from "../../../../types";
import { QuestionCard } from ".";

function createFormValues(question: EditableQuestion): TestEditValues {
  return {
    title: "Sample Test",
    subject: "Biology",
    difficulty: "intermediate",
    language: "English",
    groups: [
      {
        name: "Section 1",
        type: question.type,
        topic: "Sample Topic",
        questions: [question],
      },
    ],
  };
}

function EditCardWrapper({ question }: { question: EditableQuestion }) {
  const form = useForm<TestEditValues>({
    defaultValues: createFormValues(question),
  });

  return (
    <TestEditModeProvider value={{ mode: "edit", setMode: () => {} }}>
      <Form {...form}>
        <div className="w-190">
          <QuestionCard
            question={question}
            questionNumber={1}
            numberColorClass="bg-cream-yellow"
            sectionIndex={0}
            questionIndex={0}
            onDelete={() => {}}
          />
        </div>
      </Form>
    </TestEditModeProvider>
  );
}

const meta = {
  title: "Tests/Edit Question Cards",
  component: EditCardWrapper,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "cream",
      values: [{ name: "cream", value: "#FDF8F0" }],
    },
  },
} satisfies Meta<typeof EditCardWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const MCQ_SINGLE_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "MCQ_SINGLE",
  question: "What is the primary pigment responsible for photosynthesis?",
  options: [
    { label: "A", text: "Chlorophyll", is_correct: true },
    { label: "B", text: "Carotenoid", is_correct: false },
    { label: "C", text: "Xanthophyll", is_correct: false },
    { label: "D", text: "Anthocyanin", is_correct: false },
  ],
};

export const McqSingle: Story = {
  name: "MCQ Single",
  args: { question: MCQ_SINGLE_QUESTION },
};

const MCQ_MULTIPLE_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "MCQ_MULTIPLE",
  question:
    "Which of the following are products of the light-dependent reactions?",
  options: [
    { label: "A", text: "ATP", is_correct: true },
    { label: "B", text: "Glucose", is_correct: false },
    { label: "C", text: "NADPH", is_correct: true },
    { label: "D", text: "Oxygen", is_correct: true },
  ],
};

export const McqMultiple: Story = {
  name: "MCQ Multiple",
  args: { question: MCQ_MULTIPLE_QUESTION },
};

const TRUE_FALSE_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "TRUE_FALSE",
  question: "Photosynthesis occurs only in the presence of sunlight.",
  is_true: true,
};

export const TrueFalse: Story = {
  name: "True / False",
  args: { question: TRUE_FALSE_QUESTION },
};

const OPEN_ENDED_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "OPEN_ENDED",
  question:
    "Explain the role of chloroplasts in the process of photosynthesis.",
  correct_keywords: [
    { value: "chloroplast" },
    { value: "light energy" },
    { value: "glucose" },
  ],
};

export const OpenEnded: Story = {
  name: "Open Ended",
  args: { question: OPEN_ENDED_QUESTION },
};

const FILL_IN_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "FILL_IN",
  question:
    "The process of photosynthesis converts _______ and water into glucose.",
  options: [
    { label: "A", text: "Carbon dioxide", is_correct: true },
    { label: "B", text: "Nitrogen", is_correct: false },
    { label: "C", text: "Hydrogen", is_correct: false },
    { label: "D", text: "Helium", is_correct: false },
  ],
};

export const FillIn: Story = {
  name: "Fill in the Blank",
  args: { question: FILL_IN_QUESTION },
};

const SHORT_ANSWER_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "SHORT_ANSWER",
  question: "What gas is released as a byproduct of photosynthesis?",
  possible_answers: [{ value: "Oxygen" }, { value: "O2" }],
};

export const ShortAnswer: Story = {
  name: "Short Answer",
  args: { question: SHORT_ANSWER_QUESTION },
};

const ORDERING_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "ORDERING",
  question: "Arrange the phases of mitosis in the correct order:",
  ordering_items: [
    { text: "Prophase", correct_index: 1 },
    { text: "Metaphase", correct_index: 2 },
    { text: "Anaphase", correct_index: 3 },
    { text: "Telophase", correct_index: 4 },
  ],
};

export const Ordering: Story = {
  name: "Ordering",
  args: { question: ORDERING_QUESTION },
};

const PAIRS_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "PAIRS",
  question: "Match each phase of cell division with its correct description:",
  pair_items: [
    { item_a: "Prophase", item_b: "Chromosomes condense" },
    { item_a: "Metaphase", item_b: "Chromosomes align at center" },
    { item_a: "Anaphase", item_b: "Chromatids separate" },
  ],
};

export const Pairs: Story = {
  name: "Matching Pairs",
  args: { question: PAIRS_QUESTION },
};

const CATEGORIZATION_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "CATEGORIZATION",
  question: "Sort the following into the correct category: Mitosis or Meiosis",
  category_items: [
    {
      category: "Mitosis",
      items: [
        { value: "Two identical daughter cells" },
        { value: "Somatic cells" },
      ],
    },
    {
      category: "Meiosis",
      items: [{ value: "Four haploid cells" }, { value: "Gamete production" }],
    },
  ],
};

export const Categorization: Story = {
  name: "Categorization",
  args: { question: CATEGORIZATION_QUESTION },
};

const NUMERIC_QUESTION: EditableQuestion = {
  ...QUESTION_DEFAULTS,
  type: "NUMERIC",
  question:
    "How many ATP molecules are produced in one cycle of the Krebs cycle?",
  answer: 2,
  tolerance: 0,
};

export const Numeric: Story = {
  name: "Numeric",
  args: { question: NUMERIC_QUESTION },
};
