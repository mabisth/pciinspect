import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Lock, Search, AlertTriangle, CheckCircle, Mail, FileText, HelpCircle, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import './App.css';

// Import images
import heroCybersecurity from './assets/hero-cybersecurity.jpg';
import eSkimmingProtection from './assets/e-skimming-protection.png';
import malwareDetection from './assets/malware-detection.webp';
import webSkimmingAttack from './assets/web-skimming-attack.png';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">PCI Inspect</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link to="/support" className="text-gray-700 hover:text-primary transition-colors">Support</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Get Started</Button>
            <Button size="sm">Contact Sales</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
              <Link to="/support" className="text-gray-700 hover:text-primary transition-colors">Support</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">Get Started</Button>
                <Button size="sm">Contact Sales</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">PCI Inspect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in securing online transactions and protecting customer data. 
              Designed for e-commerce merchants and payment gateway providers.
            </p>
            <div className="flex space-x-4">
              <Badge className="security-badge">
                <CheckCircle className="h-4 w-4" />
                PCI DSS v4.0.1 Compliant
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">

              <li><a href="#" className="hover:text-white transition-colors">E-Skimming Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Posture Check</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PCI Inspect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Homepage Component
const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="mb-6">
                <Badge className="compliance-highlight mb-4">
                  PCI DSS v4.0.1 Compliant
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Digital Shield Against Malware & E-Skimming
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional malware detection, e-skimming protection, and website security posture checks 
                for e-commerce merchants and payment gateway providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-primary">
                  Start Free Scan
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="slide-in-right">
              <img 
                src={heroCybersecurity} 
                alt="Cybersecurity Protection" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your e-commerce platform with our advanced threat detection and compliance monitoring tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            <Card className="feature-card fade-in">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex space-x-2">
                    <Badge className="compliance-highlight">Req 6.4.3</Badge>
                    <Badge className="compliance-highlight">Req 11.6.1</Badge>
                  </div>
                </div>
                <CardTitle>E-Skimming Protection</CardTitle>
                <CardDescription>
                  Advanced protection against Magecart and other client-side attacks targeting payment pages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={eSkimmingProtection} 
                  alt="E-Skimming Protection" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Script integrity validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Tamper detection mechanisms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Client-side script monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card fade-in">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="compliance-highlight">Multi-Req</Badge>
                </div>
                <CardTitle>Security Posture Check</CardTitle>
                <CardDescription>
                  Comprehensive website security assessment including SSL, DMARC, and vulnerability scanning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={webSkimmingAttack} 
                  alt="Security Posture Check" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>SSL/TLS certificate validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>DMARC, SPF, DKIM analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Security header scanning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PCI DSS Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for PCI DSS v4.0.1 Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions directly address critical PCI DSS requirements for payment security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="compliance-highlight">Requirement 6.4.3</Badge>
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Payment Page Script Management</h3>
                <p className="text-gray-600 mb-4">
                  All scripts loaded/executed in the consumer's browser must be authorized, 
                  have integrity checks, and be inventoried with written justification for use.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Script authorization workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Integrity validation checks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Complete script inventory management</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="slide-in-right">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="compliance-highlight">Requirement 11.6.1</Badge>
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tamper Detection</h3>
                <p className="text-gray-600 mb-4">
                  A change-and-tamper-detection mechanism must be deployed for payment pages 
                  to detect unauthorized modifications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real-time change detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Unauthorized modification alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Payment page monitoring</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Payment Environment?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start protecting your e-commerce platform today with our comprehensive security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Start Free Security Scan
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Support Page Component
const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help with PCI Inspect services, compliance questions, and technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-in-left">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-2">Contact Support</CardTitle>
                <CardDescription>
                  Send us a message and our team will respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Support Information */}
          <div className="slide-in-right space-y-8">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Email Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 mb-4">
                  For technical support and general inquiries, reach out to our team:
                </p>
                <div className="space-y-2">
                  <p><strong>General Support:</strong> support@pciinspect.com</p>
                  <p><strong>Technical Issues:</strong> technical@pciinspect.com</p>
                  <p><strong>Sales Inquiries:</strong> sales@pciinspect.com</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Response time: Within 24 hours during business days
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle>Documentation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-600 mb-4">
                  Access our comprehensive documentation and guides:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      Getting Started Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      PCI DSS Compliance Checklist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      Security Best Practices
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center space-x-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How often should I run security scans?</h4>
                    <p className="text-gray-600 text-sm">
                      We recommend daily automated scans for production environments and weekly scans for development environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What PCI DSS requirements does PCI Inspect cover?</h4>
                    <p className="text-gray-600 text-sm">
                      Our platform specifically addresses Requirements 5.3.3, 6.4.3, and 11.6.1, with additional coverage for general security posture.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How do I integrate PCI Inspect with my existing systems?</h4>
                    <p className="text-gray-600 text-sm">
                      We provide REST APIs and webhooks for seamless integration. Check our API documentation for detailed implementation guides.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Services Page Coming Soon</h1></div>} />
            <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">About Page Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

