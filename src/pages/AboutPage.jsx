import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital world.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the leading digital innovation partner, recognized for excellence in technology and unwavering commitment to client success.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description:
        'Innovation, integrity, excellence, and collaboration guide everything we do. We believe in transparent partnerships and sustainable growth.',
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=33',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=5',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'James Wilson',
      role: 'Lead Designer',
      image: 'https://i.pravatar.cc/300?img=12',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Development',
      image: 'https://i.pravatar.cc/300?img=9',
      gradient: 'from-green-500 to-teal-500',
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
              About <span className="text-gradient">AppDost</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              We are a team of passionate creators, innovators, and problem-solvers
              dedicated to transforming businesses through cutting-edge digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="text-white" size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2018, AppDost began with a simple mission: to bridge the gap
                between businesses and technology. What started as a small team of
                developers has grown into a full-service digital agency.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've had the privilege of working with startups, SMBs,
                and enterprises across various industries. Each project has taught us
                valuable lessons and strengthened our commitment to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be a trusted partner for businesses looking to
                innovate and thrive in the digital age. Our success is measured by the
                success of our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <Users size={100} className="mx-auto mb-6" />
                  <h3 className="text-4xl font-bold mb-2">5+ Years</h3>
                  <p className="text-xl">of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented individuals behind AppDost, working together to create
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
