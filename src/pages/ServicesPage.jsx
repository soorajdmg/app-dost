import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Cloud,
  Shield,
  Check,
} from 'lucide-react';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom web applications built with cutting-edge technologies tailored to your business needs.',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Development',
        'Progressive Web Apps',
        'API Development',
        'Website Maintenance',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver seamless experiences.',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Apps',
        'App UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed with user experience at the forefront.',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Design Systems',
        'Usability Testing',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description:
        'Strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
      gradient: 'from-green-500 to-teal-500',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'PPC Advertising',
        'Analytics & Reporting',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions for modern applications.',
      gradient: 'from-indigo-500 to-blue-500',
      features: [
        'Cloud Architecture',
        'AWS/Azure/GCP',
        'DevOps Services',
        'CI/CD Pipelines',
        'Cloud Migration',
        'Performance Optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description:
        'Comprehensive security audits and ongoing technical support for your applications.',
      gradient: 'from-red-500 to-orange-500',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Code Reviews',
        '24/7 Technical Support',
        'Bug Fixes & Updates',
        'Performance Monitoring',
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Comprehensive digital solutions designed to elevate your business and help
              you achieve your goals. From concept to launch and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className="text-white" size={40} />
                  </motion.div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">What we offer:</h3>
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    whileHover={{ rotate: 2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div
                      className={`aspect-square rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center p-12 shadow-2xl`}
                    >
                      <service.icon className="text-white" size={120} />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 glass"
                    >
                      <div className="text-center">
                        <p className="text-4xl font-bold text-gradient mb-1">100%</p>
                        <p className="text-sm text-gray-600">Satisfaction</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's discuss your project and create something amazing together. Our team
              is ready to bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
