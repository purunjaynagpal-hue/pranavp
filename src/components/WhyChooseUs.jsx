import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gem, Cpu, BadgeDollarSign, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Gem,
      title: 'High Quality Prints',
      description: 'We use premium materials and advanced printing technology to ensure every print is sharp, vibrant, and professional.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      description: 'Our state-of-the-art printing machines deliver consistent, high-resolution results with precise color accuracy.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
    },
    {
      icon: BadgeDollarSign,
      title: 'Affordable Rates',
      description: 'Competitive pricing without compromising quality. Get the best value for your printing budget every time.',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
    },
    {
      icon: Zap,
      title: 'Quick Delivery',
      description: 'Fast turnaround times to meet your deadlines. Rush orders and same-day services available for urgent needs.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-accent-300 bg-accent-500/20 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Pranav Printers
            <span className="text-accent-400"> Advantage</span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            We combine expertise, technology, and dedication to deliver printing services
            that set us apart from the competition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

