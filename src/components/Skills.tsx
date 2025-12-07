const skills = [
  { name: "Python", category: "Programming" },
  { name: "SQL", category: "Database" },
  { name: "Tableau", category: "Visualization" },
  { name: "R", category: "Programming" },
  { name: "Excel", category: "Analytics" },
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Data Visualization", category: "Analytics" },
  { name: "Pandas", category: "Library" },
  { name: "NumPy", category: "Library" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Cloud Computing", category: "Cloud" },
  { name: "C++", category: "Programming" },
  { name: "JIRA", category: "Tools" },
];

const categoryColors: Record<string, string> = {
  Programming: "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-500/50",
  Database: "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-500/50",
  Visualization: "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/50",
  Analytics: "from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-500/50",
  "AI/ML": "from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-500/50",
  Library: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-500/50",
  Cloud: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 hover:border-indigo-500/50",
  Tools: "from-amber-500/20 to-amber-600/10 border-amber-500/30 hover:border-amber-500/50",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 data-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and building data-driven solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative px-6 py-3 rounded-xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default ${
                categoryColors[skill.category]
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-foreground font-medium">{skill.name}</span>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl shadow-lg shadow-primary/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { value: "3.43", label: "GPA" },
            { value: "30+", label: "Team Collaborations" },
            { value: "5+", label: "Major Projects" },
            { value: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl glass-card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
