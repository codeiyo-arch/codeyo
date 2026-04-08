const SchoolsPage = () => {
    return (
        <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto min-h-screen">
            <div className="max-w-3xl mb-16 space-y-6">
                <h1 className="text-4xl md:text-7xl font-bold text-gradient">Partner with Excellence.</h1>
                <p className="text-gray-400 text-xl leading-relaxed">
                    Bring world-class coding education to your school. Join our partnership program to empower your students
                    and scale your technology curriculum seamlessly.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                    { title: "Scalable Curriculum", desc: "Integrate our battle-tested roadmap into your existing timetable.", icon: "📚" },
                    { title: "Teacher Insights", desc: "Advanced dashboards to track student performance and engagement.", icon: "📊" },
                    { title: "Revenue Sharing", desc: "Earn commissions for every student that joins through your institution.", icon: "🤝" },
                ].map((benefit, idx) => (
                    <div key={idx} className="glass p-8 rounded-3xl space-y-4">
                        <div className="text-4xl">{benefit.icon}</div>
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm">{benefit.desc}</p>
                    </div>
                ))}
            </div>

            <div className="glass p-12 rounded-[3rem] border-primary/20 bg-primary/5 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to transform your school?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Scale your school&apos;s technical output and give your students a global competitive edge.
                </p>
                <button className="btn-primary px-12 py-4 text-xl">Apply for Partnership</button>
            </div>
        </div>
    );
};

export default SchoolsPage;

