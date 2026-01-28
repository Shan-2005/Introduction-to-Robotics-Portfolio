import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../data/assignments';
import { getYouTubeEmbedUrl, NothingCard, DotAccent, VideoPlayer } from '../components/UI';
import { ArrowLeft, Play, FileText, Brain } from 'lucide-react';

const AssignmentDetail = () => {
    const { id } = useParams();
    const assignment = assignments.find(a => a.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!assignment) {
        return (
            <div className="min-h-screen flex items-center justify-center pointer-events-auto">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-white doto-font">Assignment Not Found</h2>
                    <Link to="/" className="text-[#FF2D2D] hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const embedUrl = getYouTubeEmbedUrl(assignment.videoUrl);

    return (
        <main className="relative z-10 pt-32 px-6 md:px-12 max-w-5xl mx-auto pb-32 pointer-events-none">

            {/* Back Navigation */}
            <div className="mb-8 pointer-events-auto inline-block">
                <Link to="/#activities" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest">Back to Activities</span>
                </Link>
            </div>

            <div className="space-y-12 pointer-events-auto">

                {/* Header */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 border border-[#FF2D2D] rounded-full text-[#FF2D2D] text-xs font-bold uppercase tracking-widest doto-font bg-[#FF2D2D]/10">
                            Assignment {String(assignment.id).padStart(2, '0')}
                        </div>
                        <div className="h-px bg-zinc-800 flex-1" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white doto-font uppercase tracking-tighter leading-none">
                        {assignment.title}
                    </h1>
                </div>

                {/* Video Player */}
                <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <VideoPlayer videoUrl={assignment.videoUrl} title={assignment.title} />
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Description */}
                    <div className="md:col-span-2 space-y-8">
                        <NothingCard className="bg-zinc-900/50 border-zinc-800">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6 doto-font uppercase">
                                <FileText className="w-5 h-5 text-[#FF2D2D]" /> Description
                            </h3>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">
                                    {assignment.description}
                                </p>
                            </div>
                        </NothingCard>

                        <NothingCard className="bg-zinc-900/50 border-zinc-800">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6 doto-font uppercase">
                                <Brain className="w-5 h-5 text-[#FF2D2D]" /> Inference & Analysis
                            </h3>
                            <div className="pl-4 border-l-2 border-[#FF2D2D]">
                                <p className="text-zinc-300 leading-relaxed italic">
                                    "{assignment.inference}"
                                </p>
                            </div>
                        </NothingCard>
                    </div>

                    {/* Sidebar / Meta */}
                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border border-white/5 space-y-6">
                            <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Meta Data</h4>

                            <div>
                                <span className="block text-[10px] text-zinc-600 uppercase mb-1">Status</span>
                                <div className="flex items-center gap-2">
                                    <DotAccent />
                                    <span className="text-white doto-font text-sm">COMPLETED</span>
                                </div>
                            </div>

                            <div>
                                <span className="block text-[10px] text-zinc-600 uppercase mb-1">System ID</span>
                                <span className="text-zinc-400 mono-font text-xs">SYS-00{assignment.id}</span>
                            </div>

                            <div>
                                <span className="block text-[10px] text-zinc-600 uppercase mb-1">Source</span>
                                <span className="text-[#FF2D2D] font-bold text-xs uppercase cursor-pointer hover:underline truncate block">
                                    {assignment.videoUrl}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default AssignmentDetail;
