import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InputHTMLAttributes } from 'react';

interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  label?: string;
  error?: string;
  helpText?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
}

const DatePicker = ({
  label,
  error,
  helpText,
  value,
  onChange,
  minDate = new Date(),
  maxDate,
  required,
  className = '',
  ...props
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    onChange(date);
  };

  // const generateDateClass = (date: Date) => {
  //   const isSelected = value && formatDate(date) === formatDate(value);
  //   const isDisabled = (minDate && date < minDate) || (maxDate && date > maxDate);
  //   const isToday = formatDate(date) === formatDate(new Date());

  //   return `
  //     w-10 h-10 rounded-full flex items-center justify-center text-sm
  //     ${isSelected ? 'bg-emerald-600 text-white' : 'hover:bg-emerald-50'}
  //     ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
  //     ${isToday ? 'border border-emerald-600' : ''}
  //     transition-colors duration-200
  //   `;
  // };

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type="date"
          value={value ? formatDate(value) : ''}
          onChange={handleDateChange}
          min={minDate ? formatDate(minDate) : undefined}
          max={maxDate ? formatDate(maxDate) : undefined}
          className={`
            w-full px-4 py-2 rounded-lg border
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-emerald-500'}
            focus:outline-none focus:ring-2 focus:ring-offset-0 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed
            transition-colors duration-200
            ${className}
          `}
          onFocus={() => setIsOpen(true)}
          {...props}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helpText && !error && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4"
          >
            {/* Calendar content would go here */}
            <div className="text-center text-sm text-gray-500">
              Native date picker is used for better accessibility.
              Click the input field to open it.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;
