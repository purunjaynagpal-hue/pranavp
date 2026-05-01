import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Printer,
  Layers,
  CreditCard,
  FileText,
  BookOpen,
  ShoppingBag,
  Monitor,
  Palette,
} from 'lucide-react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Printer,
      title: 'Digital Printing',
      description: 'High-quality digital printing for brochures, flyers, posters, and more with vibrant colors and crisp details.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Layers,
      title: 'Offset Printing',
      description: 'Cost-effective bulk printing solutions perfect for large quantities without compromising quality.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Professional visiting cards with premium finishes, embossing, and unique designs to make a lasting impression.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FileText,
      title: 'Flyers & Brochures',
      description: 'Eye-catching marketing materials that effectively communicate your message and brand identity.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: BookOpen,
      title: 'Binding Services',
      description: 'Professional binding options including spiral, perfect, and thermal binding for presentations and reports.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: ShoppingBag,
      title: 'Stationery Products',
      description: 'Complete range of office stationery supplies including letterheads, envelopes, notepads, and more.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Monitor,
      title: 'Flex Printing',
      description: 'Large format flex and banner printing for events, promotions, and outdoor advertising needs.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Palette,
      title: 'Custom Printing',
      description: 'Tailored printing solutions designed to meet your unique requirements and creative vision.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 bg-primary-50 rounded-full">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comprehensive Printing
            <span className="text-primary-700"> Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From business essentials to large-format prints, we offer a complete range of
            professional printing services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <service.icon className={`w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

