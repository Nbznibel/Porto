import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FormConfig, UseFormOptions, FormFieldConfig } from '../../types/form.types';

function buildZodSchema<T extends string>(config: FormConfig<T>) {
  const shape: Record<string, z.ZodTypeAny> = {};
  
  const entries = Object.entries(config.fields) as [T, FormFieldConfig][];
  
  for (const [fieldName, fieldConfig] of entries) {
    let schema: z.ZodTypeAny;
    
    switch (fieldConfig.type) {
      case 'number':
        schema = z.coerce.number();
        break;
      case 'checkbox':
        schema = z.boolean();
        break;
      case 'email':
        schema = z.string();
        break;
      default:
        schema = z.string();
    }
    
    if (fieldConfig.required) {
      if (fieldConfig.type === 'checkbox') {
        schema = schema.refine((val) => val === true, {
          message: `${fieldName} is required`,
        });
      } else if (fieldConfig.type === 'number') {
        schema = (schema as z.ZodNumber).min(1, `${fieldName} is required`);
      } else {
        schema = (schema as z.ZodString).min(1, `${fieldName} is required`);
      }
    } else {
      schema = schema.optional();
    }
    
    if (fieldConfig.minLength && fieldConfig.type !== 'number') {
      schema = (schema as z.ZodString).min(fieldConfig.minLength);
    }
    
    if (fieldConfig.maxLength && fieldConfig.type !== 'number') {
      schema = (schema as z.ZodString).max(fieldConfig.maxLength);
    }
    
    if (fieldConfig.min !== undefined && fieldConfig.type === 'number') {
      schema = (schema as z.ZodNumber).min(fieldConfig.min);
    }
    
    if (fieldConfig.max !== undefined && fieldConfig.type === 'number') {
      schema = (schema as z.ZodNumber).max(fieldConfig.max);
    }
    
    if (fieldConfig.pattern) {
      schema = (schema as z.ZodString).regex(new RegExp(fieldConfig.pattern));
    }
    
    shape[fieldName] = schema;
  }
  
  return z.object(shape);
}

export function useConfigForm<T extends string>({
  config,
  isEdit = false,
  defaultValues,
  onSubmit,
}: UseFormOptions<T>) {
  const schema = buildZodSchema(config);
  
  const getDefaultValues = () => {
    const defaults: Record<string, unknown> = {};
    
    const entries = Object.entries(config.fields) as [T, FormFieldConfig][];
    
    for (const [fieldName, fieldConfig] of entries) {
      defaults[fieldName] = fieldConfig.defaultValue ?? (fieldConfig.type === 'checkbox' ? false : '');
    }
    
    if (defaultValues) {
      return { ...defaults, ...defaultValues };
    }
    
    return defaults;
  };
  
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: getDefaultValues(),
  });
  
  const handleSubmit = form.handleSubmit(async (data) => {
    await onSubmit(data as Record<T, unknown>);
  });
  
  return {
    form,
    handleSubmit,
    isEdit,
  };
}