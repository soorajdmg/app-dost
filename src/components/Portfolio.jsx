import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description:
        'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description:
        'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Real Estate Portal',
      category: 'Web Development',
      description:
        'Property listing platform with advanced search, virtual tours, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      description:
        'Modern dashboard for healthcare providers to manage patients, appointments, and medical records.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tech: ['Figma', 'React', 'Chart.js'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'Web Development',
      description:
        'Engaging social platform with real-time messaging, content sharing, and community features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: ['React', 'Socket.io', 'AWS', 'Redis'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      title: 'Restaurant Management',
      category: 'Mobile Development',
      description:
        'Complete restaurant management solution with POS, reservations, and kitchen display system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tech: ['Flutter', 'Django', 'MySQL'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore our latest projects and see how we've helped businesses transform
            their digital presence.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
              >
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.category}</p>
                  <ExternalLink size={24} className="mx-auto" />
                </div>
              </motion.div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-base sm:text-lg mb-1">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-4 py-1 rounded-full text-white text-sm bg-gradient-to-r ${selectedProject.gradient}`}
                >
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
