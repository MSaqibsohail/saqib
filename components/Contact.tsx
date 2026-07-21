'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API Submit call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Reset success banner after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const contactChannels = [
    {
      label: 'Email Address',
      value: 'saqibsohail1395@gmail.com', // placeholder
      icon: <Mail className="w-5 h-5 text-flutter-secondary" />,
      href: 'mailto:saqibsohail1395@gmail.com',
    },
    {
      label: 'GitHub Profile',
      value: 'github.com/MSaqibsohail',
      icon: <Github className="w-5 h-5 text-pink-400" />,
      href: 'https://github.com/MSaqibsohail',
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/muhammad-saqib-sohail-',
      icon: <Linkedin className="w-5 h-5 text-flutter-blue" />,
      href: 'https://www.linkedin.com/in/muhammad-saqib-sohail-',
    },
    {
      label: 'Location',
      value: 'Karachi, Pakistan',
      icon: <MapPin className="w-5 h-5 text-teal-400" />,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-flutter-blue/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-flutter-blue to-flutter-secondary rounded-full mt-3" />
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Channels column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-slate-800 dark:text-slate-100 text-left mb-2">
              Let&apos;s build something amazing together
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left mb-6">
              I am open to discussions on junior Flutter development contracts, cloud system creations, or Machine Learning integration tasks. Drop me a line!
            </p>

            <div className="flex flex-col gap-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-[#0F172A]/40 backdrop-blur-md flex items-center gap-4 hover:border-flutter-secondary/40 hover:translate-x-1.5 transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-sm">
                    {channel.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-widest block">
                      {channel.label}
                    </span>
                    <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-0.5 block">
                      {channel.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form column (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0F172A]/40 backdrop-blur-md relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce mb-6" />
                    <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                      Thank you for reaching out. Your message has been logged, and I will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 text-left"
                    noValidate
                  >
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={`peer w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-[#0F172A]/50 backdrop-blur-sm text-sm text-slate-900 dark:text-slate-100 placeholder-transparent focus:outline-none focus:border-flutter-secondary transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 dark:text-slate-400 pointer-events-none transition-all duration-300"
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-bold tracking-wide mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={`peer w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-[#0F172A]/50 backdrop-blur-sm text-sm text-slate-900 dark:text-slate-100 placeholder-transparent focus:outline-none focus:border-flutter-secondary transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 dark:text-slate-400 pointer-events-none transition-all duration-300"
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-bold tracking-wide mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={`peer w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-[#0F172A]/50 backdrop-blur-sm text-sm text-slate-900 dark:text-slate-100 placeholder-transparent focus:outline-none focus:border-flutter-secondary transition-all ${
                          errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 dark:text-slate-400 pointer-events-none transition-all duration-300"
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 font-bold tracking-wide mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        className={`peer w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-[#0F172A]/50 backdrop-blur-sm text-sm text-slate-900 dark:text-slate-100 placeholder-transparent focus:outline-none focus:border-flutter-secondary transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-5 text-xs font-semibold text-slate-400 dark:text-slate-400 pointer-events-none transition-all duration-300"
                      >
                        Message
                      </label>
                      {errors.message && (
                        <span className="text-[10px] text-red-500 font-bold tracking-wide mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-4 font-semibold text-sm rounded-xl bg-gradient-to-r from-flutter-blue to-flutter-secondary text-white shadow-md shadow-flutter-blue/15 hover:shadow-lg hover:shadow-flutter-secondary/35 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
