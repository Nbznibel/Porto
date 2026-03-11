import type { FormConfig } from '../../types/form.types';

export const contactFormConfig: FormConfig<'name' | 'email' | 'subject' | 'message'> = {
  fields: {
    name: {
      type: 'text',
      required: true,
      defaultValue: '',
      minLength: 2,
      maxLength: 50,
      label: 'Name',
      placeholder: 'Your name',
    },
    email: {
      type: 'email',
      required: true,
      defaultValue: '',
      label: 'Email',
      placeholder: 'your.email@example.com',
    },
    subject: {
      type: 'text',
      required: true,
      defaultValue: '',
      minLength: 5,
      maxLength: 100,
      label: 'Subject',
      placeholder: 'What is this about?',
    },
    message: {
      type: 'textarea',
      required: true,
      defaultValue: '',
      minLength: 10,
      maxLength: 1000,
      label: 'Message',
      placeholder: 'Your message here...',
      helperText: 'Minimum 10 characters',
    },
  },
};