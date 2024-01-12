import { useState } from 'react';
import { lowerCase, startCase } from 'lodash';
import { Eye, EyeOff } from 'lucide-react';
import { useController, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

type InputPasswordProps = {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  mandatory?: boolean;
  withLabel?: boolean;
  containerCN?: string;
  labelCN?: string;
  noErrorMessage?: boolean;
  inputWrapperCN?: string;
  inputCN?: string;
};

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  name,
  id,
  placeholder,
  disabled,
  mandatory,
  withLabel = true,
  containerCN,
  labelCN,
  noErrorMessage,
  inputWrapperCN,
  inputCN,
  ...props
}) => {
  const { register } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const [show, setShow] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          'relative flex items-center overflow-hidden rounded-md border border-slate-300 focus-within:border-purple-600 dark:border-slate-800',
          inputWrapperCN,
        )}
      >
        <input
          {...register(name)}
          type={show ? 'text' : 'password'}
          value={field.value}
          id={id || name}
          className={cn(
            'h-9 w-full bg-background px-2 font-normal outline-none placeholder:text-sm placeholder:font-normal disabled:bg-slate-200 dark:disabled:bg-slate-800 !text-white border border-white/40',
            inputCN,
          )}
          placeholder={
            !disabled ? placeholder || label || `Enter ${lowerCase(name)}...` || 'Type something...' : undefined
          }
          disabled={disabled}
          onChange={onChange}
          {...props}
        />

        {show ? (
          <Eye
            className="absolute right-[12px] top-[50%] h-[1.1rem] w-[1.1rem] translate-y-[-50%] cursor-pointer text-white"
            onClick={() => setShow(false)}
          />
        ) : (
          <EyeOff
            className="absolute right-[12px] top-[50%] h-[1.1rem] w-[1.1rem] translate-y-[-50%] cursor-pointer text-white"
            onClick={() => setShow(true)}
          />
        )}
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
};

export default InputPassword;
