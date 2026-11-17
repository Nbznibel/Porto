import { z } from 'zod';

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'date';

export interface FormFieldConfig {
  type: FieldType;
  required?: boolean;
  defaultValue?: string | number | boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  options?: { label: string; value: string | number }[];
  placeholder?: string;
  label?: string;
  helperText?: string;
}

export interface FormConfig<T extends string> {
  fields: Record<T, FormFieldConfig>;
  validationSchema?: z.ZodType<unknown>;
}

export interface UseFormOptions<T extends string> {
  config: FormConfig<T>;
  isEdit?: boolean;
  defaultValues?: Partial<Record<T, unknown>>;
  onSubmit: (data: Record<T, unknown>) => Promise<void>;
}

export interface FormFieldProps<T extends string> {
  name: T;
  config: FormFieldConfig;
  register: ReturnType<typeof import('react-hook-form').useForm<Record<T, unknown>>>['register'];
  errors?: Record<T, { message?: string }>;
}