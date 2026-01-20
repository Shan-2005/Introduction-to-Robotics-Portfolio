
import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Settings,
  Zap,
  ChevronRight,
  Activity,
  Layers,
  Box,
  Terminal,
  Calendar,
  FlaskConical,
  Waypoints,
  ArrowUpRight,
  Circle,
  Plus,
  X,
  Upload,
  Trash2,
  Mail
} from 'lucide-react';
import Spline from '@splinetool/react-spline';

// --- Custom Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference rounded-full border border-white transition-transform duration-100 ease-out"
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})` }}
      />
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-[#FF2D2D] rounded-full pointer-events-none z-[9999]"
        style={{ transform: `translate(${position.x - 2}px, ${position.y - 2}px)` }}
      />
    </>
  );
};

const DotAccent = ({ animate = true }: { animate?: boolean }) => (
  <span className={`inline-block w-2 h-2 rounded-full bg-[#FF2D2D] mr-2 ${animate ? 'animate-pulse' : ''}`} />
);

const NothingCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`glass rounded-2xl p-6 hover:border-[#FF2D2D]/30 transition-all duration-500 group relative overflow-hidden ${className}`}>
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-4 h-4 text-[#FF2D2D]" />
    </div>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 border-l border-[#FF2D2D] pl-6 pointer-events-auto">
    <h2 className="text-4xl md:text-5xl font-bold doto-font uppercase tracking-tighter mb-2">{title}</h2>
    {subtitle && <p className="text-zinc-500 mono-font text-sm uppercase tracking-widest">{subtitle}</p>}
  </div>
);

const BackgroundGeometry = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Spline scene="https://prod.spline.design/Loui2fRDebTE58VR/scene.splinecode" />
      {/* Mask "Built with Spline" logo */}
      {/* Mask "Built with Spline" logo */}
      <div className="absolute bottom-4 right-4 w-48 h-12 bg-black z-50 flex items-center justify-center px-4 pointer-events-auto cursor-default rounded-l-full border-l border-white/10">
        <span className="text-sm font-bold text-zinc-200 doto-font uppercase tracking-widest">Shan Neeraj</span>
      </div>
    </div>
  );
};

// --- Dynamic Activity Components ---

interface Assignment {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  inference: string;
}

const AddAssignmentModal = ({
  isOpen,
  onClose,
  onAdd
}: {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (assignment: Omit<Assignment, 'id'>) => void;
}) => {
  const [formData, setFormData] = useState({ title: '', videoUrl: '', description: '', inference: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', videoUrl: '', description: '', inference: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-auto p-4">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold doto-font uppercase mb-6 text-white">Add Assignment</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Details</label>
            <div className="grid grid-cols-1 gap-4">
              <input
                required
                placeholder="Title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:border-[#FF2D2D] outline-none transition-colors"
              />
              <input
                required
                placeholder="Video URL (YouTube)"
                value={formData.videoUrl}
                onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:border-[#FF2D2D] outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Content</label>
            <textarea
              required
              placeholder="Description"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:border-[#FF2D2D] outline-none transition-colors h-24 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Inference</label>
            <textarea
              required
              placeholder="What was your inference?"
              value={formData.inference}
              onChange={e => setFormData({ ...formData, inference: e.target.value })}
              className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:border-[#FF2D2D] outline-none transition-colors h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF2D2D] hover:bg-[#FF2D2D]/90 text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02]"
          >
            Add Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

const getYouTubeEmbedUrl = (url: string) => {
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
  } catch (e) {
    return null;
  }
};

const App: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch assignments from JSON server
  useEffect(() => {
    fetch('/api/assignments')
      .then(res => res.json())
      .then(data => setAssignments(data))
      .catch(err => console.error("Failed to load assignments:", err));
  }, []);

  const handleAddAssignment = (newAssignment: Omit<Assignment, 'id'>) => {
    const assignment = { ...newAssignment, id: Date.now().toString() };

    fetch('/api/assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assignment)
    })
      .then(res => res.json())
      .then(savedAssignment => {
        setAssignments(prev => [savedAssignment, ...prev]);
      })
      .catch(err => console.error("Failed to add assignment:", err));
  };

  const handleDeleteAssignment = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Delete this assignment?')) {
      fetch(`/api/assignments/${id}`, { method: 'DELETE' })
        .then(() => {
          setAssignments(prev => prev.filter(p => p.id !== id));
        })
        .catch(err => console.error("Failed to delete assignment:", err));
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden">
      <CustomCursor />

      {/* Background */}
      <BackgroundGeometry />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md rounded-full px-8 py-4 border border-white/5 pointer-events-auto">
          <span className="text-xl font-bold doto-font uppercase tracking-tighter">SN.</span>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#about" className="hover:text-[#FF2D2D] transition-colors">About</a>
            <a href="#activities" className="hover:text-[#FF2D2D] transition-colors">Activities</a>
            <a href="#academic" className="hover:text-[#FF2D2D] transition-colors">Academic</a>
            <a href="#contact" className="hover:text-[#FF2D2D] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">Status</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-500">Available</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32 pb-32 pointer-events-none">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center border-b border-white/5 pb-20 pointer-events-none">
          <div className="space-y-4 pointer-events-none">
            <div className="flex items-center gap-2 text-[#FF2D2D] mono-font text-sm uppercase tracking-widest mb-6">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>System Online: v2.5.0</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold doto-font leading-none tracking-tighter uppercase pointer-events-none">
              Intro to <br />
              <span className="border-text">Robotics</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed pointer-events-none">
                  Exploring the synergy of <span className="text-white">Sensors</span>, <span className="text-white">Actuators</span>, and <span className="text-white">Control Systems</span> to build the next generation of automation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
                  <div className="px-4 py-2 glass rounded-full flex items-center gap-2 text-lg doto-font">
                    <DotAccent />
                    STUDENT: SHAN NEERAJ
                  </div>
                  <div className="px-4 py-2 border border-white/10 rounded-full flex items-center gap-2 text-lg doto-font">
                    REG: RA2311003012089
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <button className="interactive group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-bold uppercase heading-font text-sm transition-all hover:pr-12 pointer-events-auto">
                  Explore Concepts
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div>
              <SectionTitle title="The Maker" subtitle="Profile & Vision" />
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-white">Shan Neeraj</span>, a Computer Science student at the intersection of bits and bolts. My journey in robotics is driven by a fascination with how code can transcend the screen to influence the physical world.
                </p>
                <p>
                  Specializing in <span className="text-white">Embedded Systems</span> and <span className="text-white">Automation</span>, I focus on creating efficient, intelligent machines that solve real-world problems with minimal complexity.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-12">
                  <NothingCard className="p-4 border-none bg-zinc-900/50">
                    <h4 className="text-white doto-font text-3xl font-bold mb-1">01+</h4>
                    <p className="text-[10px] mono-font uppercase text-zinc-500">Years Experience</p>
                  </NothingCard>
                  <NothingCard className="p-4 border-none bg-zinc-900/50">
                    <h4 className="text-white doto-font text-3xl font-bold mb-1">10+</h4>
                    <p className="text-[10px] mono-font uppercase text-zinc-500">Robotic Concepts</p>
                  </NothingCard>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[80%] h-[80%] border border-zinc-700 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-[60%] h-[60%] border border-zinc-600 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-1/2 h-1/2 rounded-2xl glass flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-[#FF2D2D] opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITIES / ASSIGNMENTS SECTION */}
        <AddAssignmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddAssignment}
        />

        <section id="activities" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Activities" subtitle="Assignments & Research" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#FF2D2D]/50 transition-all group"
            >
              <Plus className="w-4 h-4 text-[#FF2D2D] group-hover:rotate-90 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Add Assignment</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 pointer-events-auto">
            {assignments.map((assignment, i) => {
              const embedUrl = getYouTubeEmbedUrl(assignment.videoUrl);
              return (
                <NothingCard key={assignment.id} className="relative group flex flex-col h-full bg-zinc-900/50 border-zinc-800">
                  {/* Delete Button */}
                  <button
                    onClick={(e) => handleDeleteAssignment(assignment.id, e)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/80 text-white opacity-0 group-hover:opacity-100 hover:text-[#FF2D2D] transition-all rounded-full pointer-events-auto"
                    title="Delete Assignment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Video Embed */}
                  <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-6 border border-white/5 relative">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={assignment.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-600">
                        <span className="text-xs uppercase tracking-widest">No Video Available</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 leading-tight doto-font uppercase">
                        ASSIGNMENT {String(i + 1).padStart(2, '0')}
                      </h3>
                      <p className="text-sm text-[#FF2D2D] font-bold uppercase tracking-widest mb-4">{assignment.title}</p>

                      <div className="p-3 bg-black/30 rounded-lg border border-white/5">
                        <p className="text-sm text-zinc-400 leading-relaxed">{assignment.description}</p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-[#FF2D2D] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <DotAccent /> Inference
                      </h4>
                      <p className="text-sm text-zinc-500 leading-relaxed border-l-2 border-zinc-800 pl-4">
                        {assignment.inference}
                      </p>
                    </div>
                  </div>
                </NothingCard>
              );
            })}

            {assignments.length === 0 && (
              <div className="col-span-full py-20 text-center border border-dashed border-zinc-800 rounded-2xl">
                <p className="text-zinc-500 doto-font uppercase">No assignments added.</p>
              </div>
            )}
          </div>
        </section>

        {/* CONCEPTS SECTION */}
        <section id="concepts" className="scroll-mt-32">
          <SectionTitle title="Core Concepts" subtitle="Foundational Robotics" />
          <div className="grid md:grid-cols-4 gap-6 pointer-events-auto">
            {[
              { title: "Sensors", desc: "Ultrasonic, PIR, Temperature & Light sensors for environment perception.", icon: Activity },
              { title: "Actuators", desc: "Servo, DC, and Stepper motors for precise mechanical movement.", icon: Settings },
              { title: "Controllers", desc: "Microcontrollers like Arduino & Raspberry Pi as the central brain.", icon: Cpu },
              { title: "Control Logic", desc: "Closed-loop feedback and PID algorithms for stable automation.", icon: Zap },
            ].map((item, idx) => (
              <NothingCard key={idx}>
                <item.icon className="w-8 h-8 text-[#FF2D2D] mb-4" />
                <h3 className="text-xl font-bold doto-font uppercase mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex gap-2">
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                  <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                  <span className="w-1 h-1 bg-white rounded-full" />
                </div>
              </NothingCard>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}


        {/* ACADEMIC CONTENT SECTION */}
        <section id="academic" className="scroll-mt-32">
          <SectionTitle title="Academic Roadmap" subtitle="Curriculum & Progress" />

          <div className="grid md:grid-cols-2 gap-12 pointer-events-auto">
            <div className="space-y-12">
              <div>
                <h4 className="flex items-center gap-2 doto-font text-sm uppercase text-white mb-6">
                  <Calendar className="w-4 h-4 text-[#FF2D2D]" /> Upcoming Tasks
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Inverse Kinematics Quiz", status: "IN PROGRESS", date: "Oct 24" },
                    { name: "Actuator Selection Lab", status: "NOT STARTED", date: "Oct 28" },
                    { name: "Final Bot Assembly", status: "LOCKED", date: "Nov 15" }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
                      <div>
                        <p className="font-bold uppercase doto-font text-sm tracking-tight">{task.name}</p>
                        <p className="text-[10px] text-zinc-500 mono-font">{task.date}</p>
                      </div>
                      <span className={`text-[10px] mono-font px-2 py-1 rounded-sm ${task.status === 'IN PROGRESS' ? 'bg-[#FF2D2D]/20 text-[#FF2D2D]' : 'bg-zinc-800 text-zinc-400'}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 doto-font text-sm uppercase text-white mb-6">
                  <FlaskConical className="w-4 h-4 text-[#FF2D2D]" /> Research & Exploration
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl space-y-2 border-l-2 border-l-[#FF2D2D]">
                    <p className="text-[10px] mono-font text-zinc-500 uppercase">Topic 01</p>
                    <h5 className="font-bold doto-font uppercase text-sm">Swarm Intelligence</h5>
                    <p className="text-[10px] text-zinc-400">Collaborative robotic systems study.</p>
                  </div>
                  <div className="glass p-4 rounded-xl space-y-2">
                    <p className="text-[10px] mono-font text-zinc-500 uppercase">Topic 02</p>
                    <h5 className="font-bold doto-font uppercase text-sm">Soft Robotics</h5>
                    <p className="text-[10px] text-zinc-400">Bio-inspired compliant mechanisms.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-12 border-l border-zinc-800 space-y-12">
              <h4 className="flex items-center gap-2 doto-font text-sm uppercase text-white mb-6">
                <Waypoints className="w-4 h-4 text-[#FF2D2D]" /> Learning Timeline
              </h4>
              {[
                { phase: "PHASE 01", title: "Introduction & Sensing", desc: "Completed basics of electronics and signal processing.", active: false },
                { phase: "PHASE 02", title: "Actuation & Control", desc: "Currently exploring PID loops and motor control drivers.", active: true },
                { phase: "PHASE 03", title: "AI & Perception", desc: "Integration of computer vision and basic neural nets.", active: false },
                { phase: "PHASE 04", title: "Final Prototype", desc: "Modular multi-terrain exploration unit build.", active: false }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[54px] top-1 w-3 h-3 rounded-full border-2 ${step.active ? 'bg-[#FF2D2D] border-[#FF2D2D]' : 'bg-black border-zinc-700'}`} />
                  <p className="text-[10px] mono-font text-[#FF2D2D] uppercase tracking-[0.2em] mb-1">{step.phase}</p>
                  <h5 className="text-xl font-bold doto-font uppercase tracking-tight">{step.title}</h5>
                  <p className="text-sm text-zinc-500 mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK IN PROGRESS SECTION */}
        <section id="wip" className="scroll-mt-32">
          <SectionTitle title="Lab Bench Status" subtitle="System Diagnostic" />
          <div className="grid md:grid-cols-2 gap-6 pointer-events-auto">
            <div className="glass p-8 rounded-2xl border-dashed border-zinc-700 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 animate-pulse">
                <Box className="w-8 h-8 text-zinc-600" />
              </div>
              <div>
                <h5 className="font-bold doto-font uppercase text-lg">Next-Gen Chassis Design</h5>
                <p className="text-zinc-500 text-[10px] doto-font">3D Printing Phase • 45% Ready</p>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl border-dashed border-zinc-700 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                <Terminal className="w-8 h-8 text-zinc-600" />
              </div>
              <div>
                <h5 className="font-bold doto-font uppercase text-lg">Neural Pathfinding API</h5>
                <p className="text-zinc-500 text-[10px] doto-font">Development Phase • 20% Ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS & TECH */}
        <section id="tools" className="scroll-mt-32">
          <SectionTitle title="Toolbox" subtitle="Technology Stack" />
          <div className="flex flex-wrap gap-4 pointer-events-auto">
            {["Arduino", "C / C++", "Python", "Fusion 360", "MATLAB", "ROS2", "OpenCV", "Embedded C"].map((tool, i) => (
              <div key={i} className="px-6 py-3 border border-white/5 rounded-full hover:border-[#FF2D2D]/50 hover:bg-white/5 transition-all cursor-default">
                <span className="text-sm doto-font text-zinc-300 uppercase">{tool}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 pointer-events-auto">
          <SectionTitle title="Get In Touch" subtitle="Collaborate & Connect" />
          <div className="glass p-12 rounded-2xl border border-white/5 text-center space-y-8">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
              <Mail className="w-10 h-10 text-[#FF2D2D]" />
            </div>
            <div>
              <h3 className="text-3xl font-bold doto-font uppercase mb-2">Ready to Build?</h3>
              <p className="text-zinc-500 max-w-lg mx-auto">
                Open to research collaborations, robotics projects, and technical discussions.
              </p>
            </div>
            <a
              href="mailto:sn0760@srmist.edu.in"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF2D2D] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#FF2D2D]/90 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              sn0760@srmist.edu.in
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-20 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="heading-font font-bold tracking-tighter uppercase text-3xl">Robotics.OS</span>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm">
              Exploring the convergence of computer science and physical robotics. Built with precision and minimal design.
            </p>
          </div>
          <div className="text-left md:text-right space-y-4">
            <p className="text-xs doto-font text-[#FF2D2D] animate-pulse uppercase tracking-wider">
              <DotAccent /> STATUS: DISCONNECTED (IDLE)
            </p>
            <p className="text-sm text-zinc-400">
              © 2024 PORTFOLIO FOR INTRO TO ROBOTICS <br />
              <span className="text-white font-bold doto-font uppercase text-lg">SHAN NEERAJ • RA2311003012089</span>
            </p>
            <div className="flex gap-4 md:justify-end">
              <Circle className="w-4 h-4 text-zinc-800" fill="currentColor" />
              <Circle className="w-4 h-4 text-zinc-800" fill="currentColor" />
              <Circle className="w-4 h-4 text-[#FF2D2D]" fill="currentColor" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
