import React from 'react';
import { SectionTitle, NothingCard, VideoPlayer } from './UI';
import { Cpu, Box, Activity, Settings, Zap, Terminal, Shield, Target, MousePointer2 } from 'lucide-react';

export const ProjectSection = () => {
    return (
        <section id="project" className="scroll-mt-32">
            <SectionTitle title="Featured Project" subtitle="KINETECH: AI Pick & Place" />
            
            <div className="space-y-12 pointer-events-auto">
                {/* Hero Project Card */}
                <NothingCard className="p-0 border-none bg-zinc-900/40 overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 md:p-12 space-y-6">
                            <div className="flex items-center gap-2 text-[#FF2D2D] mono-font text-xs uppercase tracking-[0.3em]">
                                <Activity className="w-4 h-4" />
                                Articulated Robotic System
                            </div>
                            <h3 className="text-4xl md:text-6xl font-bold doto-font leading-tight uppercase">
                                KINE<span className="text-[#FF2D2D]">TECH</span>
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                An AI-based 6-DOF articulated robotic arm designed for precision pick-and-place operations. 
                                Integrated with computer vision and inverse kinematics for fully autonomous workflow.
                            </p>
                            
                            <div className="flex flex-wrap gap-3">
                                {["6-DOF", "ESP32", "OpenCV", "Python", "Inverse Kinematics"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] mono-font text-zinc-300 uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-video bg-black relative group">
                            <VideoPlayer 
                                videoUrl="/videos/KineTech.mp4" 
                                title="KineTech Demonstration" 
                                className="group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </NothingCard>

                {/* Detail Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Introduction */}
                    <NothingCard className="col-span-1 md:col-span-2">
                        <h4 className="text-xl font-bold doto-font uppercase mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#FF2D2D]" /> Problem Statement
                        </h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">The Challenge</p>
                                <ul className="space-y-2 text-zinc-400 text-sm">
                                    <li className="flex gap-2"><span>•</span> Manual pick-and-place is time-consuming and error-prone.</li>
                                    <li className="flex gap-2"><span>•</span> Existing industrial systems are expensive and complex to setup.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">The Solution</p>
                                <ul className="space-y-2 text-zinc-400 text-sm">
                                    <li className="flex gap-2"><span>•</span> High-speed, accurate automation for repetitive tasks.</li>
                                    <li className="flex gap-2"><span>•</span> Low-cost intelligent system using vision-based detection.</li>
                                </ul>
                            </div>
                        </div>
                    </NothingCard>

                    {/* Team */}
                    <NothingCard>
                        <h4 className="text-xl font-bold doto-font uppercase mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-[#FF2D2D]" /> The Team
                        </h4>
                        <div className="space-y-2">
                            {["Pranay Idhaya", "Shan Neeraj", "M. Shemil K M", "Shalini Kumari", "Reshma K"].map((name) => (
                                <div key={name} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                                    <span className="text-zinc-300 uppercase">{name}</span>
                                    <span className="text-[10px] text-[#FF2D2D] mono-font">MEMBER</span>
                                </div>
                            ))}
                        </div>
                    </NothingCard>
                </div>

                {/* System Architecture */}
                <div className="grid md:grid-cols-4 gap-6">
                    <NothingCard>
                        <Cpu className="w-8 h-8 text-[#FF2D2D] mb-4" />
                        <h5 className="font-bold doto-font uppercase mb-2">Hardware</h5>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            ESP32 & Raspberry Pi 5, 6-DOF Robotic Arm, Servo Motors, USB Webcam, and Power Supply Unit.
                        </p>
                    </NothingCard>
                    <NothingCard>
                        <Terminal className="w-8 h-8 text-[#FF2D2D] mb-4" />
                        <h5 className="font-bold doto-font uppercase mb-2">Software</h5>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Python-based control system utilizing OpenCV for real-time image processing and coordinate extraction.
                        </p>
                    </NothingCard>
                    <NothingCard>
                        <Settings className="w-8 h-8 text-[#FF2D2D] mb-4" />
                        <h5 className="font-bold doto-font uppercase mb-2">Kinematics</h5>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Inverse Kinematics (IK) algorithm converts (X, Y, Z) coordinates into precise joint angles (θ1-θ6).
                        </p>
                    </NothingCard>
                    <NothingCard>
                        <Zap className="w-8 h-8 text-[#FF2D2D] mb-4" />
                        <h5 className="font-bold doto-font uppercase mb-2">Control</h5>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Angles sent from Raspberry Pi 5 to ESP32 via Serial/WiFi for high-speed servo motor synchronization.
                        </p>
                    </NothingCard>
                </div>

                {/* Technical Pipeline */}
                <NothingCard className="bg-black/40 border-white/5">
                    <h4 className="text-xl font-bold doto-font uppercase mb-8 text-center">Technical Pipeline</h4>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
                        {[
                            { name: "Camera", icon: Activity },
                            { name: "Image Processing", icon: MousePointer2 },
                            { name: "Pos Detection", icon: Target },
                            { name: "Angle Calc", icon: Settings },
                            { name: "ESP32", icon: Cpu },
                            { name: "Robotic Arm", icon: Box },
                        ].map((step, idx, arr) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center gap-3 relative z-10">
                                    <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[#FF2D2D]">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-center">{step.name}</span>
                                </div>
                                {idx < arr.length - 1 && (
                                    <div className="hidden md:block flex-1 h-px bg-zinc-800 relative top-[-14px]" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </NothingCard>
            </div>
        </section>
    );
};
