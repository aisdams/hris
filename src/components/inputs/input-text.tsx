import { lowerCase, startCase } from 'lodash';
import { useController, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

type InputTextProps = {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  mandatory?: boolean;
  uppercase?: boolean;
  value?: string | number;
  withLabel?: boolean;
  containerCN?: string;
  labelCN?: string;
  inputWrapperCN?: string;
  inputCN?: string;
  className?: string;
  noErrorMessage?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function InputText({
  label,
  name,
  id,
  placeholder,
  disabled,
  mandatory,
  uppercase = true,
  withLabel = true,
  containerCN,
  labelCN,
  inputWrapperCN,
  inputCN,
  className,
  noErrorMessage,
  onChange: customOnChange,
  onKeyDown,
  ...props
}: InputTextProps) {
  const { register } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customOnChange?.(e);
    if (!uppercase) {
      field.onChange(e.target.value);
      return;
    }

    //! UpperCase Logic
    const { selectionStart, selectionEnd } = e.target;
    e.target.value = e.target.value.toUpperCase();
    e.target.setSelectionRange(selectionStart, selectionEnd);

    field.onChange(e.target.value);
  };

  return (
    <div className={cn('relative', containerCN)}>
      {withLabel && (
        <label htmlFor={id || name} className={cn('mb-2 inline-block text-white', labelCN)}>
          {label || startCase(name)} {``}
          {mandatory && <span className="text-white">*</span>}
        </label>
      )}

      <div
        className={cn(
          'relative flex items-center overflow-hidden rounded-md focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary',
          inputWrapperCN,
        )}
      >
        <input
          {...register(name)}
          type="text"
          value={field.value ?? ''}
          id={id || name}
          className={cn(
            'h-9 w-full bg-background px-2 font-normal outline-none placeholder:text-sm placeholder:font-normal placeholder:text-muted-foreground disabled:select-none disabled:bg-muted text-white border border-white/40',
            inputCN,
            className,
          )}
          placeholder={
            !disabled ? placeholder || label || `Enter ${lowerCase(name)}...` || 'Type something...' : undefined
          }
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...props}
        />
      </div>
      {!noErrorMessage && error?.message && (
        <p className="bg-red-600 text-white p-3 rounded-md flex items-center gap-x-2 text-sm mt-2">
          {' '}
          <ExclamationTriangleIcon className="h-4 w-4" />
          {error.message}
        </p>
      )}
    </div>
  );
}
