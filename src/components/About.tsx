import { GraduationCap, Lightbulb, Wrench } from "lucide-react";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "M.S. Business Analytics from Sacred Heart University, USA (GPA 3.43). Strong foundation in statistics, data science, and business strategy.",
  },
  {
    icon: Lightbulb,
    title: "Technical Strengths",
    description: "Expertise in data analysis, visualization, predictive modeling, machine learning, and transforming complex data into actionable business insights.",
  },
  {
    icon: Wrench,
    title: "Tools Expertise",
    description: "Proficient in Python, SQL, Tableau, R, Excel, AWS, and various ML frameworks including Pandas, NumPy, and Scikit-learn.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 data-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Passionate About <span className="gradient-text">Data-Driven</span> Solutions
          </h2>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Masood Mirza is a Business Analytics graduate (GPA 3.43) from Sacred Heart University, USA, 
            with professional experience as a System Engineer where he collaborated with 30+ engineering 
            and product professionals to build financial technology platforms. He specializes in data analysis, 
            visualization, predictive modeling, machine learning, and business problem-solving.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
            He is passionate about transforming raw data into insights through Python, SQL, Tableau, and ML-based solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative p-8 rounded-2xl glass-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
