import React from 'react'
import Image from 'next/image'
import homepage from '../public/images/homepage.jpg'
import Navbar from '../components/navbar/Navbar'
import { FaBrain, FaRobot, FaMicrophone, FaGamepad, FaChartLine, FaBook } from 'react-icons/fa'
import { MdOutlinePsychology } from 'react-icons/md'
import { IoMdHand } from 'react-icons/io'

const Page = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className='container mx-auto px-4 lg:px-8 mt-20'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 min-h-[calc(100vh-80px)] py-8 lg:py-16'>
          {/* Left Content */}
          <div className='flex flex-col items-start text-left lg:w-1/2 lg:pt-20'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Making Reading & Writing Fun for Every Child!
            </h1>
            <p className='text-lg md:text-xl text-gray-700 mb-8 max-w-xl'>
              Inspire your child&apos;s creativity and love for learning through our engaging educational platform.
            </p>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
              Get Started
            </button>
          </div>

          {/* Right Content */}
          <div className='lg:w-1/2 w-full'>
            <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] max-w-[600px] mx-auto'>
              <Image 
                src={homepage} 
                alt='Children reading and writing' 
                fill
                className='rounded-2xl shadow-2xl object-cover'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What is Dyslexia Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Understanding Dyslexia
          </h2>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <FaBrain className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">What is Dyslexia?</h3>
              <p className="text-gray-600">
                Dyslexia is a learning difference that primarily affects reading and writing abilities but doesnt impact general intelligence.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <MdOutlinePsychology className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Common Signs</h3>
              <p className="text-gray-600">
                Difficulty with reading, spelling, and word recognition. Strong creativity and problem-solving abilities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center h-48 mb-6">
                <IoMdHand className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">How We Help</h3>
              <p className="text-gray-600">
                Our platform provides specialized tools and exercises designed to support dyslexic learning patterns.
              </p>
            </div>
          </div>

          {/* Additional Info Box */}
          
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Key Features
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with proven learning methods to support children with dyslexia.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* AI-Driven Adaptive Reading Assistant */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <FaRobot className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Driven Reading Assistant</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Simplifies text using NLP, breaking down complex sentences.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Highlights words while reading aloud using Text-to-Speech.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Integrates AI-powered Mind Maps and Visual Learning.</p>
                  </div>
                </div>
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* AI Speech Recognition */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <FaMicrophone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Speech Recognition</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Real-time speech-to-text conversion for easier responses.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Detects and corrects phonetic spelling errors instantly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">AI-powered handwriting recognition with real-time feedback.</p>
                  </div>
                </div>
                <button className="mt-6 text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Gamified Learning */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <FaGamepad className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Gamified Learning</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Interactive exercises with drag-and-drop spelling games.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">AI-analyzed learning patterns for personalized exercises.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Chatbot learning assistant for instant help and support.</p>
                  </div>
                </div>
                <button className="mt-6 text-green-600 font-semibold hover:text-green-700 flex items-center gap-2 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <FaChartLine className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">AI-driven insights and personalized recommendations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Comprehensive Parent & Teacher Dashboard.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Real-time engagement tracking and adaptive lessons.</p>
                  </div>
                </div>
                <button className="mt-6 text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Reading Mode */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 rounded-full p-3">
                    <FaBook className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Reading Mode</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Dyslexia-friendly fonts and background filters.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Customizable text appearance settings.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 rounded-full p-1 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    <p className="text-gray-600">Visual learning with pictograms and animations.</p>
                  </div>
                </div>
                <button className="mt-6 text-red-600 font-semibold hover:text-red-700 flex items-center gap-2 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
