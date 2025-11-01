import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
  Shield,
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies. From responsive websites to complex web platforms.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed with user experience at the forefront. Prototyping to final design.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description:
        'Strategic digital marketing campaigns that drive traffic, engagement, and conversions for your business.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions. AWS, Azure, and Google Cloud expertise.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description:
        'Comprehensive security audits, ongoing maintenance, and 24/7 technical support for your applications.',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Comprehensive digital solutions tailored to elevate your business and
            achieve your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 sm:p-8 hover-glow cursor-pointer group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>

              {/* Hover Line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${service.gradient} mt-6 rounded-full`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
