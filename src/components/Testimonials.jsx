import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'AppDost transformed our digital presence completely. Their team delivered a stunning website that exceeded our expectations. The attention to detail and professionalism was outstanding.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, EcoShop',
      image: 'https://i.pravatar.cc/150?img=13',
      text: 'Working with AppDost was a game-changer for our e-commerce business. They built a seamless platform that increased our sales by 200%. Highly recommend their services!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, FitLife',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'The mobile app developed by AppDost is exactly what we needed. User-friendly, fast, and beautifully designed. Our users love it and engagement has skyrocketed.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO, CloudSync',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Exceptional technical expertise and creative solutions. AppDost delivered our cloud platform on time and within budget. Their support team is also incredibly responsive.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Owner, Boutique Studio',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'From concept to launch, AppDost guided us every step of the way. They took our vision and turned it into a beautiful reality. Couldn\'t be happier with the results!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50"
      id="testimonials"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our clients have to say about
            working with us.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-6 sm:p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 text-blue-500/20">
                <Quote size={60} className="sm:w-20 sm:h-20" fill="currentColor" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover-glow transition-all"
            >
              <ChevronLeft className="text-blue-500" size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-primary w-8'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover-glow transition-all"
            >
              <ChevronRight className="text-blue-500" size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
