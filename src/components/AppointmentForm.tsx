import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
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

      <AnimatePresence>
        {/* Success Message */}
        {false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-4">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Scheduled!</h2>
                <p className="text-gray-600 mb-6">We'll send you a confirmation email with all the details.</p>
                <Button variant="outline" onClick={() => null}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppointmentForm;
