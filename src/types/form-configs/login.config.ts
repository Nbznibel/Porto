import type { FormConfig } from '../../types/form.types';

export const loginFormConfig: FormConfig<'email' | 'password'> = {
  fields: {
    email: {
      type: 'email',
      required: true,
      defaultValue: '',
      label: 'Email',
      placeholder: 'your.email@example.com',
    },
    password: {
      type: 'password',
      required: true,
      defaultValue: '',
      minLength: 6,
      label: 'Password',
      placeholder: 'Enter your password',
    },
  },
};