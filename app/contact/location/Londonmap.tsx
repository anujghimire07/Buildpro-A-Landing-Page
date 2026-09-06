import React from 'react'

const Londonmap = () => {
  return (
  <div className="w-full h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.208409332038!2d85.31892127614041!3d27.679952826698013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c9a5cf34fb%3A0x9184a86a77dac5e5!2sPatan%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1788694874995!5m2!1sen!2snp"
    className="w-full h-full border-0 rounded-lg"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
    title="Patan Multiple Campus Location"
  />
</div>
  )
}

export default Londonmap
