import React from 'react';
import { Activity, ChevronRight, Cpu, Mail, Calendar, FlaskConical, Waypoints, Box, Terminal, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assignments } from '../data/assignments';
import { DotAccent, NothingCard, SectionTitle, getYouTubeEmbedUrl, VideoPlayer } from '../components/UI';

const HomePage = () => {
    return (
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
                            <a href="#activities" className="interactive group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-bold uppercase heading-font text-sm transition-all hover:pr-12 pointer-events-auto">
                                Explore Activities
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                            </a>
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

            {/* ACTIVITIES SECTION */}
            <section id="activities" className="scroll-mt-32">
                <div className="flex justify-between items-end mb-12">
                    <SectionTitle title="Activities" subtitle="Assignments & Research" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 pointer-events-auto">
                    {assignments.map((assignment, i) => {
                        const embedUrl = getYouTubeEmbedUrl(assignment.videoUrl);
                        return (
                            <Link to={`/assignment/${assignment.id}`} key={assignment.id} className="pointer-events-auto block">
                                <NothingCard className="relative group flex flex-col h-full bg-zinc-900/50 border-zinc-800 cursor-pointer">
                                    {/* Video Thumbnail/Embed */}
                                    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-6 border border-white/5 relative pointer-events-none">
                                        <VideoPlayer
                                            videoUrl={assignment.videoUrl}
                                            title={assignment.title}
                                            className="grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-transparent" /> {/* Overlay to prevent iframe interaction on list view */}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1 leading-tight doto-font uppercase">
                                                ASSIGNMENT {String(i + 1).padStart(2, '0')}
                                            </h3>
                                            <p className="text-sm text-[#FF2D2D] font-bold uppercase tracking-widest mb-4">{assignment.title}</p>

                                            <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest mt-auto">
                                                <span>Click to view details</span>
                                                <ChevronRight className="w-4 h-4 text-[#FF2D2D] opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </NothingCard>
                            </Link>
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

            {/* ACADEMIC SECTION */}
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
                                    { name: "Inverse Kinematics Analysis", status: "DONE", date: "Jan 28" },
                                    { name: "Actuator & Gripper Setup", status: "DONE", date: "Jan 28" },
                                    { name: "Path Planning Algorithm", status: "IN PROGRESS", date: "Feb 05" }
                                ].map((task, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
                                        <div>
                                            <p className="font-bold uppercase doto-font text-sm tracking-tight">{task.name}</p>
                                            <p className="text-[10px] text-zinc-500 mono-font">{task.date}</p>
                                        </div>
                                        <span className={`text-[10px] mono-font px-2 py-1 rounded-sm ${task.status === 'IN PROGRESS' ? 'bg-[#FF2D2D]/20 text-[#FF2D2D]' : task.status === 'DONE' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-zinc-800 text-zinc-400'}`}>
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

                    <div className="relative pl-12 border-l border-zinc-800 space-y-12">
                        <h4 className="flex items-center gap-2 doto-font text-sm uppercase text-white mb-6">
                            <Waypoints className="w-4 h-4 text-[#FF2D2D]" /> Learning Timeline
                        </h4>
                        {[
                            { phase: "PHASE 01", title: "Introduction & Sensing", desc: "Completed basics of electronics and signal processing.", active: false },
                            { phase: "PHASE 02", title: "Actuation & Control", desc: "Completed PID loops and motor control drivers.", active: false },
                            { phase: "PHASE 03", title: "AI & Perception", desc: "Currently integrating computer vision and basic neural nets.", active: true },
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

            {/* TOOLS SECTION */}
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
    );
};

export default HomePage;
