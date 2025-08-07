import React from 'react';
import { Shield, Search, CheckCircle, Lock, AlertTriangle, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Comprehensive Security Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PCI Inspect offers specialized solutions to safeguard your e-commerce platform and ensure PCI DSS compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* E-Skimming Protection Service */}
          <Card className="feature-card fade-in">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex space-x-2">
                  <Badge className="compliance-highlight">PCI DSS Req 6.4.3</Badge>
                  <Badge className="compliance-highlight">PCI DSS Req 11.6.1</Badge>
                </div>
              </div>
              <CardTitle>E-Skimming Protection</CardTitle>
              <CardDescription>
                Advanced, real-time defense against Magecart, formjacking, and other client-side attacks that target payment pages and sensitive customer data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                E-skimming, often referred to as Magecart attacks, involves malicious code injected into e-commerce websites to steal payment card data directly from the customer's browser during checkout. PCI Inspect's E-Skimming Protection is specifically designed to combat these sophisticated threats by continuously monitoring your payment pages and third-party scripts.
              </p>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Script Integrity Validation:** Verifies the integrity of all scripts loaded on your payment pages, detecting any unauthorized modifications or injections.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Tamper Detection Mechanisms:** Implements robust mechanisms to identify and alert on any unauthorized changes to your payment page's HTML, CSS, or JavaScript in real-time.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Client-Side Script Monitoring:** Provides continuous visibility and control over all first-party and third-party scripts executing in the customer's browser.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**PCI DSS v4.0.1 Compliance (Req 6.4.3 & 11.6.1):** Directly addresses critical requirements for managing payment page scripts and detecting unauthorized modifications.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Alerting & Reporting:** Instant notifications upon detection of suspicious activity, with detailed reports for forensic analysis and compliance auditing.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security Posture Check Service */}
          <Card className="feature-card fade-in">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <Badge className="compliance-highlight">Multi-Requirement Coverage</Badge>
              </div>
              <CardTitle>Security Posture Check</CardTitle>
              <CardDescription>
                A comprehensive assessment of your website's overall security health, identifying vulnerabilities and misconfigurations beyond just payment pages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Beyond specific payment page threats, a strong overall website security posture is vital. PCI Inspect's Security Posture Check provides a holistic view of your digital storefront's defenses, helping you identify and remediate weaknesses that could be exploited by attackers.
              </p>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**SSL/TLS Certificate Validation:** Ensures your SSL/TLS certificates are correctly configured, valid, and up-to-date, preventing insecure connections.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**DMARC, SPF, DKIM Analysis:** Verifies your email authentication records to prevent email spoofing and phishing attacks targeting your customers.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Security Header Scanning:** Checks for the presence and correct configuration of crucial HTTP security headers (e.g., CSP, X-Content-Type-Options, HSTS) that protect against various web vulnerabilities.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Vulnerability Scanning (Basic):** Identifies common web application vulnerabilities and misconfigurations that could expose your site to risks.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>**Compliance Dashboard:** Provides a centralized dashboard to monitor your security posture and track progress towards various compliance objectives.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="py-16 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Enhance Your E-commerce Security?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to learn how PCI Inspect can help you achieve robust security and compliance.
          </p>
          <a href="http://secure.pciinspect.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg">
              Start Free Security Scan
            </button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;


