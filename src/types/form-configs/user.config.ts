import type { FormConfig } from '../../types/form.types';

export const userFormConfig: FormConfig<'name' | 'email' | 'age' | 'bio'> = {
  fields: {
    name: {
      type: 'text',
      required: true,
      defaultValue: '',
      minLength: 2,
      maxLength: 50,
      label: 'Full Name',
      placeholder: 'Enter your full name',
    },
    email: {
      type: 'email',
      required: true,
      defaultValue: '',
      label: 'Email Address',
      placeholder: 'Enter your email',
    },
    age: {
      type: 'number',
      required: false,
      defaultValue: 0,
      min: 18,
      max: 100,
      label: 'Age',
    },
    bio: {
      type: 'textarea',
      required: false,
      defaultValue: '',
      maxLength: 500,
      label: 'Biography',
      placeholder: 'Tell us about yourself...',
      helperText: 'Maximum 500 characters',
    },
  },
};