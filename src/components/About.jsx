import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Users, Briefcase, Target } from 'lucide-react';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
    { icon: Briefcase, label: 'Projects Completed', value: 200, suffix: '+' },
    { icon: Award, label: 'Awards Won', value: 25, suffix: '+' },
    { icon: Target, label: 'Success Rate', value: 98, suffix: '%' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <div className="text-white text-center p-4 sm:p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    <Target size={80} className="sm:w-[120px] sm:h-[120px] mx-auto mb-2 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Innovation First</h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-6 glass"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-gradient">5+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-gradient">AppDost</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
            >
              We are a passionate team of designers, developers, and digital strategists
              committed to creating exceptional digital experiences. Our mission is to
              transform your vision into powerful, scalable solutions that drive growth
              and innovation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
            >
              With expertise in web development, mobile apps, UI/UX design, and digital
              marketing, we deliver end-to-end solutions tailored to your unique needs.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-4 hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="text-blue-500 mb-2" size={32} />
                  <p className="text-3xl font-bold text-gradient mb-1">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
