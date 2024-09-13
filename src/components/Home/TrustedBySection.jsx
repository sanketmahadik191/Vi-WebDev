import React from 'react'

function TrustedBySection() {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-semibold mb-4">Trusted By</h2>
      <div className="flex justify-center space-x-10">
        <img src="/google-logo.png" alt="Google" className="h-12" />
        <img src="/microsoft-logo.png" alt="Microsoft" className="h-12" />
        <img src="/ibm-logo.png" alt="IBM" className="h-12" />
        <img src="/facebook-logo.png" alt="Facebook" className="h-12" />
      </div>
    </section>
  )
}

export default TrustedBySection
