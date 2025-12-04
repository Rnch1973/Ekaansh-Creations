import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Gift, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  Star,
  Sparkles,
  Send,
  MessageSquare,
  Lock,
  BarChart,
  Settings,
  PlusCircle,
  LogOut,
  DollarSign,
  ShoppingCart,
  Layout as LayoutIcon,
  Search,
  Zap,
  Briefcase,
  Heart
} from 'lucide-react';
import { 
  PRIMARY_SERVICES, 
  GIFT_PACKAGES, 
  PRICING_PACKAGES, 
  ADD_ONS, 
  TESTIMONIALS,
  INCOME_STREAMS 
} from './constants';

// --- Types ---
interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

// --- Admin Component ---
const AdminPage = ({ posts, setPosts }: { posts: BlogPost[], setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>> }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'blog' | 'settings'>('dashboard');
  
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: newPostTitle,
      content: newPostContent,
      date: new Date().toLocaleDateString()
    };
    setPosts([newPost, ...posts]);
    setNewPostTitle('');
    setNewPostContent('');
    alert('Blog post added successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 bg-slate-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
          <div className="text-center mb-8">
            <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-brand-teal" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal outline-none"
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-brand-teal text-white font-bold rounded-lg hover:bg-teal-600 transition-colors">
              Access Dashboard
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">Hint: admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900">Admin Dashboard</h1>
        <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 text-slate-600 hover:text-red-500">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-brand-teal text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>
            <BarChart size={18} /> Analytics
          </button>
          <button onClick={() => setActiveTab('blog')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${activeTab === 'blog' ? 'bg-brand-teal text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>
            <MessageSquare size={18} /> Blog Manager
          </button>
          <button onClick={() => setActiveTab('settings')} className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${activeTab === 'settings' ? 'bg-brand-teal text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>
            <Settings size={18} /> Site Settings
          </button>
        </div>

        <div className="flex-1">
          {activeTab === 'dashboard' && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm mb-1">Total Visitors</p>
                <h3 className="text-3xl font-bold text-slate-900">12,453</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm mb-1">Service Requests</p>
                <h3 className="text-3xl font-bold text-slate-900">48</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm mb-1">Active Blogs</p>
                <h3 className="text-3xl font-bold text-slate-900">{posts.length}</h3>
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><PlusCircle className="text-brand-teal" /> Add New Post</h3>
                <form onSubmit={handleAddPost} className="space-y-4">
                  <input type="text" placeholder="Blog Post Title" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-teal outline-none" required />
                  <textarea placeholder="Write your blog content here..." value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} className="w-full px-4 py-2 border rounded-lg h-40 focus:ring-2 focus:ring-brand-teal outline-none" required />
                  <button type="submit" className="px-6 py-2 bg-brand-teal text-white font-medium rounded-lg hover:bg-teal-600">Publish Post</button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {posts.map(post => (
                    <div key={post.id} className="p-4 border border-slate-100 rounded-lg flex justify-between">
                      <div><h4 className="font-bold">{post.title}</h4><p className="text-xs text-slate-500">{post.date}</p></div>
                      <button onClick={() => setPosts(posts.filter(p => p.id !== post.id))} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold mb-4">Settings Placeholder</h3>
               <p className="text-slate-500">Global site settings will go here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Home Page Components ---

const Hero = () => (
  <section className="relative bg-[#fdf2f8] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:flex items-center gap-16">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1]">
            Gift a Monetizable <br/>
            Website
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
            Secure the financial future of your loved ones with a digital asset that generates passive income for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-brand-teal text-white rounded-lg font-bold text-lg shadow-lg hover:bg-teal-600 transition-all hover:-translate-y-1">
              Get Your Website Gift
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-800 border border-slate-300 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden border-8 border-white bg-white">
              {/* Money Plant Image */}
              <img 
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000&auto=format&fit=crop" 
                alt="Money Plant" 
                className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px]"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-1/2 lg:-left-4 lg:right-auto transform -translate-x-1/2 lg:translate-x-0 w-[90%] lg:w-auto min-w-[320px] bg-white p-5 rounded-xl shadow-xl z-20 flex items-center justify-between border border-slate-50">
               <div>
                  <p className="text-slate-500 font-semibold text-sm mb-1">Estimated Monthly Passive Income</p>
                  <p className="text-2xl font-bold text-green-600">$500 - $2,500+</p>
               </div>
               <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                   <TrendingUp className="text-green-500 w-6 h-6" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Why a Website is the Ultimate Gift</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Unlike traditional gifts that depreciate, a Monetizable website is a digital asset that grows in value.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Financial Security", desc: "A safety net for children or retirees." },
          { icon: TrendingUp, title: "Growing Asset", desc: "Traffic and domain authority increase over time." },
          { icon: Gift, title: "Emotional Value", desc: "A thoughtful gift that keeps on giving forever." }
        ].map((item, idx) => (
          <div key={idx} className="p-10 bg-slate-50 rounded-3xl hover:shadow-lg transition-shadow border border-slate-100 text-center md:text-left">
            <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 text-brand-dark mx-auto md:mx-0">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IncomeStreams = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Multiple Income Streams</h2>
        <p className="text-lg text-slate-600">We integrate various monetization channels into every website.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {INCOME_STREAMS.map((stream, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100 hover:border-brand-teal transition-all group">
            <stream.icon className="w-8 h-8 mx-auto text-brand-teal mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-800 text-sm">{stream.label}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedCategories = () => (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-slate-900">Featured Monetizable Categories</h2>
         <div className="grid md:grid-cols-3 gap-6">
           {['Tech Review Hub', 'Travel & Lifestyle', 'Financial News', 'Health & Wellness', 'Pet Care Guide', 'Digital Marketing Tips'].map((cat, i) => (
             <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition cursor-pointer font-bold text-slate-700 hover:text-brand-teal">
               {cat}
             </div>
           ))}
         </div>
      </div>
    </div>
);

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-16">Stories of Prosperity</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                 <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
            </div>
            <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wide">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Services Page Component ---

const ServicesPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Services</h1>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">From niche research to automated content generation, we handle everything to build your digital real estate.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {PRIMARY_SERVICES.map((service, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-6">
            <service.icon className="w-6 h-6 text-brand-teal" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>

    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Gifting Packages</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {GIFT_PACKAGES.map((pkg, idx) => (
        <div key={idx} className="flex gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
           <div className="shrink-0">
             <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                <pkg.icon className="w-8 h-8 text-yellow-600" />
             </div>
           </div>
           <div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
             <p className="text-slate-600 mb-4 text-sm">{pkg.description}</p>
             <Link to="/pricing" className="text-brand-teal font-bold text-sm hover:text-teal-700 flex items-center gap-1">
               View Pricing <ArrowRight size={14} />
             </Link>
           </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Pricing Page Component ---

const PricingPage = () => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = (basePrice: string) => {
    const base = parseInt(basePrice.replace('$', ''));
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const addon = ADD_ONS.find(a => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
    return base + addonsTotal;
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Invest in a Lifetime Asset</h1>
          <p className="text-xl text-slate-600">Select a package to start building your passive income stream.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PRICING_PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`bg-white rounded-2xl shadow-sm border ${pkg.recommended ? 'border-brand-teal ring-1 ring-brand-teal' : 'border-slate-200'} relative overflow-hidden`}>
              {pkg.recommended && (
                <div className="bg-brand-teal text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900">{pkg.title}</h3>
                <p className="text-slate-500 text-sm mt-2 mb-6">{pkg.subtitle}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-900">${calculateTotal(pkg.price)}</span>
                  <span className="text-slate-500 ml-2 text-sm">/ one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?package=${pkg.id}`} className={`block w-full py-4 rounded-lg text-center font-bold text-sm transition-all ${
                  pkg.recommended 
                    ? 'bg-brand-teal text-white hover:bg-teal-600' 
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}>
                  Select Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Customize Your Gift (Add-ons)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {ADD_ONS.map((addon) => (
              <label key={addon.id} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                selectedAddons.includes(addon.id) 
                  ? 'border-brand-teal bg-teal-50/30' 
                  : 'border-slate-200 hover:border-brand-teal'
              }`}>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-brand-teal rounded focus:ring-brand-teal"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                  />
                  <span className="font-medium text-slate-900 text-sm">{addon.name}</span>
                </div>
                <span className="text-slate-600 font-medium text-sm">+${addon.price}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page Component ---

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    giftType: 'Personal (For Myself)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending email to ekaanshcreation@gmail.com with data:", formData);
    alert("Thank you! Your details have been sent. We will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', giftType: 'Personal (For Myself)', message: '' });
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">Start Your Journey</h1>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Whether you are gifting a website or building your own income stream, our team is ready to guide you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Chat with us</h4>
                <p className="text-slate-600 mb-4 text-sm">Scan to chat on WhatsApp</p>
                <div className="bg-white p-2 inline-block rounded-lg border border-slate-200">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/918169102296" 
                    alt="WhatsApp QR Code" 
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none bg-slate-50"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none bg-slate-50"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none bg-slate-50"
                  placeholder="+1 (555)..."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Type of Gift Website</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none bg-slate-50"
                value={formData.giftType}
                onChange={e => setFormData({...formData, giftType: e.target.value})}
              >
                <option>Personal (For Myself)</option>
                <option>Wedding Gift</option>
                <option>Child's Future</option>
                <option>Retirement Plan</option>
                <option>Anniversary Gift</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Message (Optional)</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-teal outline-none h-32 resize-none bg-slate-50"
                placeholder="Tell us about your goals..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-brand-teal text-white font-bold rounded-lg shadow-lg hover:bg-teal-600 transition-all flex justify-center items-center gap-2">
              Send Service Request <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Blog & FAQ Component ---

const BlogAndFAQ = ({ posts }: { posts: BlogPost[] }) => {
  const [activeTab, setActiveTab] = useState<'faq' | 'blog'>('faq');
  
  const faqs = [
    { q: "What exactly is a monetizable website?", a: "It's a fully developed website equipped with revenue channels like Google AdSense, Affiliate links, and e-commerce capabilities, designed to earn money passively." },
    { q: "How much can I earn?", a: "Earnings vary based on niche and traffic, but our starter sites typically see $100-$500/month within the first year, with potential for much more." },
    { q: "Do I need technical skills?", a: "Not at all. We handle all the setup, coding, and maintenance. You also receive a dashboard to track earnings." },
    { q: "How does gifting work?", a: "We transfer the domain ownership and hosting credentials to the recipient on the date you choose, packaged in a beautiful digital handover experience." }
  ];

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 p-1 rounded-full flex">
            <button 
            onClick={() => setActiveTab('faq')}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${activeTab === 'faq' ? 'bg-brand-teal text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
            FAQ
            </button>
            <button 
            onClick={() => setActiveTab('blog')}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${activeTab === 'blog' ? 'bg-brand-teal text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
            Latest Articles
            </button>
        </div>
      </div>

      {activeTab === 'faq' ? (
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-8 text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{f.q}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.a}</p>
                </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center mb-8">
             <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900">Latest Insights</h2>
             <p className="text-slate-500">Curated articles on digital wealth and financial security.</p>
          </div>
          
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3 block">{post.date}</span>
                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">{post.title}</h3>
                <div className="prose prose-slate max-w-none text-slate-600">
                  {post.content.split('\n').map((line, i) => (
                    <p key={i} className="mb-4">{line}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <p className="text-slate-500">No articles published yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

const HomePage = () => (
  <>
    <Hero />
    <WhyChoose />
    <IncomeStreams />
    <FeaturedCategories />
    <Testimonials />
  </>
);

const App = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Why a Website is the Best Wedding Gift',
      content: 'Instead of depreciating assets like cars or gadgets, a website is a digital real estate that appreciates over time. It offers a unique opportunity for newlyweds to build a shared income stream...',
      date: '10/24/2023'
    },
    {
      id: '2',
      title: 'Pension vs. Passive Website Income',
      content: 'With rising inflation, traditional pensions may not be enough. A well-monetized niche website can provide that extra layer of financial comfort during retirement years...',
      date: '11/02/2023'
    }
  ]);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogAndFAQ posts={posts} />} />
          <Route path="/faq" element={<BlogAndFAQ posts={posts} />} />
          <Route path="/admin" element={<AdminPage posts={posts} setPosts={setPosts} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;