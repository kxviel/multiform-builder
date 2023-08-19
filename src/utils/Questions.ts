export type QuestionType =
  | 'multiple_choice'
  | 'checkbox'
  | 'yes_no'
  | 'short_text'
  | 'long_text'
  | 'number'
  | 'date'
  | 'date_time'
  | 'time'
  | 'upload_file'
  | 'statement';

export type Question = {
  key: string;
  type: QuestionType;
  title: string;
  hasOptions: boolean;
  icon: string;
};

export const questions: Question[] = [
  {
    key: '1',
    title: 'Statement',
    type: 'statement',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '2',
    type: 'multiple_choice',
    title: 'Radio Field',
    hasOptions: true,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '3',
    title: 'Yes/No',
    type: 'yes_no',
    hasOptions: true,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '4',
    type: 'short_text',
    title: 'Short Text',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '5',
    title: 'Long Text',
    type: 'long_text',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '6',
    title: 'Number',
    type: 'number',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '8',
    title: 'Calendar',
    type: 'date',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '9',
    title: 'Date & Time',
    type: 'date_time',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '10',
    title: 'Time',
    type: 'time',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '11',
    title: 'Upload file',
    type: 'upload_file',
    hasOptions: false,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
  {
    key: '12',
    title: 'Checkbox',
    type: 'checkbox',
    hasOptions: true,
    icon: '<mat-icon svgIcon="text_format"></mat-icon>',
  },
];
