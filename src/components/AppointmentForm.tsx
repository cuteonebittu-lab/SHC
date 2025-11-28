import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
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
  consultationType: 'in-clinic' | 'online';
  message?: string;
}

interface Option {
  value: string;
  label: string;
}

interface DoctorTimings {
  'in-clinic': Option[];
  'online': Option[];
}

interface DoctorData {
  value: string;
  label: string;
  timings: DoctorTimings;
}

const doctorsData: DoctorData[] = [
  { 
    value: 'dr-dhirendra', 
    label: 'Dr. Dhirendra Yadav (MD, Internal Medicine)',
    timings: {
      'in-clinic': [
        { value: '19:00', label: '07:00 PM' },
        { value: '19:30', label: '07:30 PM' },
        { value: '20:00', label: '08:00 PM' },
        { value: '20:30', label: '08:30 PM' },
        { value: '21:00', label: '09:00 PM' },
        { value: '21:30', label: '09:30 PM' },
      ],
      'online': [
        { value: '18:00', label: '06:00 PM' },
        { value: '18:30', label: '06:30 PM' },
      ],
    },
  },
  { 
    value: 'dr-sunitha', 
    label: 'Dr. Sunitha Yadav (MD, Ayurveda Medicine)',
    timings: {
      'in-clinic': [
        { value: '10:00', label: '10:00 AM' },
        { value: '10:30', label: '10:30 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '11:30', label: '11:30 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '12:30', label: '12:30 PM' },
      ],
      'online': [
        { value: '13:00', label: '01:00 PM' },
        { value: '13:30', label: '01:30 PM' },
        { value: '18:00', label: '06:00 PM' },
        { value: '18:30', label: '06:30 PM' },
        { value: '19:00', label: '07:00 PM' },
        { value: '19:30', label: '07:30 PM' },
      ],
    },
  },
  // Add more doctors if needed
];

const consultationTypes: Option[] = [
  { value: 'in-clinic', label: 'In-clinic Visit' },
  { value: 'online', label: 'Online Consultation' },
];

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    defaultValues: {
      doctor: doctorsData[0].value, // Set default doctor
      consultationType: consultationTypes[0].value as 'in-clinic' | 'online', // Ensure correct type
    },
  });

  const selectedDoctor = watch('doctor');
  const selectedConsultationType = watch('consultationType');

  const [availableTimeSlots, setAvailableTimeSlots] = useState<Option[]>([]);

  useEffect(() => {
    const currentDoctor = doctorsData.find(d => d.value === selectedDoctor);
    
    if (currentDoctor && selectedConsultationType) {
      const slots = currentDoctor.timings[selectedConsultationType] || [];
      setAvailableTimeSlots(slots);
      // Reset time if the current selected time is no longer available
      if (!slots.some(slot => slot.value === watch('time'))) {
        setValue('time', '');
      }
    } else {
      setAvailableTimeSlots([]);
      setValue('time', ''); // Clear selected time if no valid doctor/consultation
    }
  }, [selectedDoctor, selectedConsultationType, setValue, watch]);


  const services = [
    { value: 'general-medicine', label: 'General Medicine' },
    { value: 'ayurveda', label: 'Ayurveda Consultation' },
    { value: 'health-checkup', label: 'Health Check-up' },
    { value: 'wellness', label: 'Wellness Program' },
  ];

  const onSubmit: SubmitHandler<AppointmentFormData> = async (data) => {
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

        <Select
          label="Preferred Doctor"
          options={doctorsData.map(doc => ({ value: doc.value, label: doc.label }))}
          {...register('doctor', { required: 'Doctor is required' })}
          error={errors.doctor?.message}
          required
        />

        <Select
          label="Consultation Type"
          options={consultationTypes}
          {...register('consultationType', { required: 'Consultation type is required' })}
          error={errors.consultationType?.message}
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
          options={availableTimeSlots}
          {...register('time', { required: 'Time is required' })}
          error={errors.time?.message}
          required
          disabled={!selectedDoctor || !selectedConsultationType || availableTimeSlots.length === 0}
        />

        <div className="col-span-full">
          <Select
            label="Service"
            options={services}
            {...register('service', { required: 'Service is required' })}
            error={errors.service?.message}
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
