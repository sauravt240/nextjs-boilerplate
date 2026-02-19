import React from 'react';
import { Briefcase, Calendar, Users, GraduationCap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
             <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">UniOpportunities</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-700 font-medium hover:text-blue-600 transition">Login</button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50/50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Connect Students with <br />
            <span className="text-blue-600">Opportunities</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            A comprehensive platform where university members can post projects, 
            internships, and events, and students can discover and apply for amazing 
            opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition shadow-md">
              I'm a Student <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition shadow-sm">
              I'm a University Member <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything You Need in One Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projects & Internships Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm text-center hover:shadow-md transition group">
            <div className="flex justify-center mb-8">
              <Briefcase size={52} className="text-blue-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-4">Projects & Internships</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Discover research projects, internship opportunities, and real-world work experiences
            </p>
          </div>

          {/* Volunteer Events Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm text-center hover:shadow-md transition group">
            <div className="flex justify-center mb-8">
              <Calendar size={52} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-4">Volunteer Events</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Participate in campus events, competitions, and community service opportunities
            </p>
          </div>

          {/* Easy Application Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm text-center hover:shadow-md transition group">
            <div className="flex justify-center mb-8">
              <Users size={52} className="text-purple-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-4">Easy Application</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Simple application process with cover letters, resume uploads, and status tracking
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-20 text-slate-900">Join Our Growing Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-blue-600">500+</p>
              <p className="text-slate-500 font-medium text-lg">Active Students</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-emerald-500">150+</p>
              <p className="text-slate-500 font-medium text-lg">Opportunities Posted</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-purple-500">50+</p>
              <p className="text-slate-500 font-medium text-lg">University Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-blue-600 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Join thousands of students and university members already using our platform
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-50 transition-all hover:scale-105 shadow-xl">
            Create Your Account Today <ArrowRight size={20} />
          </button>
        </div>
      </section>
      
      {/* Simple Footer Placeholder */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        © 2026 UniOpportunities. All rights reserved.
      </footer>
    </div>
  );
}