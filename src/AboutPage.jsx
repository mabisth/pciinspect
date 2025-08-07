import React from 'react';
import { Shield, Users, Lightbulb, Briefcase } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About PCI Inspect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey to revolutionize PCI DSS compliance and e-commerce security.
          </p>
        </div>

        {/* Inspiration Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 fade-in">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">The Inspiration Behind PCI Inspect</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The genesis of PCI Inspect was born out of extensive engagement with e-commerce merchants and payment gateway providers. Through numerous in-depth interviews and meticulous case studies, a recurring and critical pain point emerged: the daunting complexity and persistent challenges associated with achieving and maintaining PCI DSS compliance, particularly concerning client-side security and the evolving threat landscape of web skimming and malware.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We observed firsthand the struggles businesses faced in understanding and implementing requirements like PCI DSS v4.0.1’s 6.4.3 (payment page script management) and 11.6.1 (tamper detection). Many organizations lacked the specialized tools and expertise to effectively monitor their payment pages for unauthorized modifications, manage third-party scripts, and detect sophisticated e-skimming attacks that bypass traditional perimeter defenses. This gap in the market, coupled with the severe financial and reputational consequences of data breaches, fueled our determination to create a solution that was not only effective but also intuitive and accessible.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            PCI Inspect was conceived as a direct response to these real-world challenges, aiming to simplify compliance, enhance security posture, and provide peace of mind to businesses handling sensitive payment data. Our goal was to build a tool that empowers organizations to proactively defend against modern threats, ensuring continuous compliance and robust protection for their digital storefronts.
          </p>
        </section>

        {/* Experience Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 fade-in">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Experienced Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The team behind PCI Inspect comprises seasoned cybersecurity professionals, software engineers, and compliance experts with decades of combined experience in payment security, web application development, and regulatory frameworks. Our collective expertise is a direct result of hands-on involvement in countless security audits, incident response scenarios, and the development of enterprise-grade security solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Through extensive discussions with industry leaders, security consultants, and, most importantly, the very merchants and payment processors we serve, we have gained invaluable insights into the practical challenges of securing online transactions. These interactions, combined with rigorous case studies of real-world breaches and compliance failures, have shaped every feature and design decision within PCI Inspect.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to continuous research and development, staying ahead of emerging threats and evolving PCI DSS requirements to ensure PCI Inspect remains at the forefront of e-commerce security. Our passion lies in translating complex security challenges into simple, actionable solutions that protect businesses and their customers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;


