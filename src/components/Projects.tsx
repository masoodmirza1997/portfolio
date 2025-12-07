import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Apple Stock Analysis",
    description:
      "Time-series analysis and data visualization of Apple stock performance using Python (Pandas, Matplotlib). Identifies volatility, trends, and investor behavior patterns.",
    tags: ["Python", "Data Analysis", "Visualization"],
    image: "📈",
    github: "https://github.com/masoodmirza1997",
  },
  {
    title: "Car Price Predictor",
    description:
      "Regression-based ML model predicting car prices using feature engineering and performance evaluation techniques. Achieved high accuracy through hyperparameter tuning.",
    tags: ["Machine Learning", "Regression", "Python"],
    image: "🚗",
    github: "https://github.com/masoodmirza1997",
  },
  {
    title: "AI Sudoku Solver",
    description:
      "Sudoku solver using AI algorithms such as backtracking and constraint satisfaction for automated puzzle solving. Optimized for complex puzzles.",
    tags: ["AI", "Algorithms", "Python"],
    image: "🧩",
    github: "https://github.com/masoodmirza1997",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 data-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of data analysis and machine learning projects showcasing practical problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-2xl glass-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  className="w-full group/btn"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
