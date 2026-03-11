import { useConfigForm } from '../../../hooks/forms/useConfigForm';
import { contactFormConfig } from '../../../types/form-configs/contact.config';
import { Button, Input, Textarea } from '../../../global/components/ui';

const ContactSection = () => {
  const { form, handleSubmit } = useConfigForm({
    config: contactFormConfig,
    isEdit: false,
    onSubmit: async (data) => {
      console.log('Form submitted:', data);
      alert('Message sent! (Functionality to be implemented)');
    },
  });

  const { register, formState: { errors, isSubmitting } } = form;

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                placeholder="Your name"
                {...register('name')}
                error={errors.name?.message as string}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                error={errors.email?.message as string}
                required
              />
            </div>
            
            <Input
              label="Subject"
              placeholder="What is this about?"
              {...register('subject')}
              error={errors.subject?.message as string}
              required
            />
            
            <Textarea
              label="Message"
              placeholder="Your message here..."
              {...register('message')}
              error={errors.message?.message as string}
              helperText="Minimum 10 characters"
              required
            />
            
            <div className="text-center">
              <Button type="submit" size="lg" isLoading={isSubmitting}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-900/50 flex items-center justify-center border border-primary-700">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-white font-medium">Email</h4>
            <p className="text-gray-400 text-sm">nibel@example.com</p>
          </div>
          
          <div className="p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-900/50 flex items-center justify-center border border-primary-700">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-white font-medium">Location</h4>
            <p className="text-gray-400 text-sm">Tunis, Tunisia</p>
          </div>
          
          <div className="p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-900/50 flex items-center justify-center border border-primary-700">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h4 className="text-white font-medium">Social</h4>
            <div className="flex justify-center gap-2 mt-1">
              <a href="#" className="text-primary-400 hover:text-primary-300">GitHub</a>
              <a href="#" className="text-primary-400 hover:text-primary-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;