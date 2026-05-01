import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock, DollarSign, Heart } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We deliver top-notch printing quality with attention to every detail.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates that fit your budget without hidden costs.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We go the extra mile for you.',
      color: 'bg-red-50 text-red-600',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 bg-primary-50 rounded-full">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Trusted Name in
              <span className="text-primary-700"> Printing Excellence</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              At Pranav Printers and Stationers, we have been serving businesses and individuals
              with premium printing solutions for over 15 years. Our commitment to quality,
              reliability, and customer satisfaction has made us a trusted partner for countless
              organizations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From digital printing to offset printing, from business cards to large-format banners,
              we combine modern equipment with expert craftsmanship to deliver results that exceed
              expectations. Our fast turnaround times and affordable pricing ensure you get the best
              value for your investment.
            </p>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">500+ Happy Clients</div>
                <div className="text-xs text-gray-500">Trust us with their printing needs</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

