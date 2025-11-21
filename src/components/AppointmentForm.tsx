import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  doctor: string;
  message?: string;
}

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>();

  const services = [
    { value: 'general-medicine', label: 'General Medicine' },
    { value: 'ayurveda', label: 'Ayurveda Consultation' },
    { value: 'health-checkup', label: 'Health Check-up' },
    { value: 'wellness', label: 'Wellness Program' },
  ];

  const doctors = [
    { value: 'dr-smith', label: 'Dr. Smith - General Medicine' },
    { value: 'dr-patel', label: 'Dr. Patel - Ayurveda Specialist' },
  ];

  const timeSlots = [
    { value: '09:00', label: '09:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '02:00 PM' },
    { value: '15:00', label: '03:00 PM' },
    { value: '16:00', label: '04:00 PM' },
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      // Add your API call here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      console.log('Form submitted:', data);
      reset();
      // Show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
          required
        />

        <Input
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          error={errors.email?.message}
          required
        />

        <Input
          label="Phone"
          type="tel"
          {...register('phone', { required: 'Phone is required' })}
          error={errors.phone?.message}
          helpText="Include country code (e.g., +1 for USA)"
          required
        />

        <Input
          label="Preferred Date"
          type="date"
          {...register('date', { required: 'Date is required' })}
          error={errors.date?.message}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        <Select
          label="Preferred Time"
          options={timeSlots}
          {...register('time', { required: 'Time is required' })}
          error={errors.time?.message}
          required
        />

        <Select
          label="Service"
          options={services}
          {...register('service', { required: 'Service is required' })}
          error={errors.service?.message}
          required
        />

        <div className="col-span-full">
          <Select
            label="Preferred Doctor"
            options={doctors}
            {...register('doctor', { required: 'Doctor is required' })}
            error={errors.doctor?.message}
            required
          />
        </div>

        <div className="col-span-full">
          <Textarea
            label="Additional Notes"
            {...register('message')}
            error={errors.message?.message}
            placeholder="Any specific concerns or requirements..."
          />
        </div>

        <div className="col-span-full">
          <Button
            type="submit"
            loading={isSubmitting}
            fullWidth
            size="lg"
          >
            Schedule Appointment
          </Button>
        </div>
      </form>

      {/* Success modal handled elsewhere — toggle rendering by state when used */}
    </motion.div>
  );
};

export default AppointmentForm;
