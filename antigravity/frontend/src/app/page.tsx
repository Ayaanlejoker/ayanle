import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* Navbar - To be extracted */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-neutral-900/80 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Nexus</span>Learn
          </Link>
          <div className="flex gap-4">
            <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-white transition-colors hover:text-indigo-400">
              Log in
            </Link>
            <Link href="/register" className="px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-transform active:scale-95">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[40rem] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New courses available now
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Unlock Your Potential with <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">World-Class Education</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master skills in Programming, Design, Business, and more.
            Join thousands of learners achieving their goals with real-world projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.6)]">
              Explore Courses
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-white/5 bg-neutral-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Learners", value: "10K+" },
              { label: "Expert Instructors", value: "200+" },
              { label: "Total Courses", value: "500+" },
              { label: "Satisfaction Rate", value: "99%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-gray-400">Hand-picked by our experts for you.</p>
            </div>
            <Link href="/courses" className="text-indigo-400 hover:text-indigo-300 font-medium">View all</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mock Course Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  {/* Placeholder for Image */}
                  <div className="w-full h-full bg-indigo-900/20 group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold border border-white/10">
                    Web Development
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Full Stack Web Development Bootcamp</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">Learn React, Node.js, and everything you need to become a professional developer.</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-700" />
                      <span className="text-sm text-gray-300">Dr. Angela Yu</span>
                    </div>
                    <span className="text-lg font-bold text-indigo-400">$12.99</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-neutral-900 text-gray-400 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">NexusLearn</Link>
            <p className="mb-4">Empowering learners worldwide.</p>
          </div>
          {/* ... Footer links ... */}
        </div>
        <div className="container mx-auto px-6 text-center pt-8 border-t border-white/5">
          © {new Date().getFullYear()} NexusLearn Inc. All rights reserved.
        </div>
      </footer>
    </div >
  );
}
