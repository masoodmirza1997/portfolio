import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Smooth scroll to #contact
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid opacity-50" />

      {/* Floating Data Elements */}
      <div className="absolute top-1/4 left-[10%] w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float opacity-30" />
      <div className="absolute top-1/3 right-[15%] w-16 h-16 border border-primary/30 rounded-full animate-float-delayed opacity-40" />
      <div className="absolute bottom-1/4 left-[20%] w-24 h-24 border border-accent/20 rounded-lg -rotate-12 animate-float opacity-20" />
      <div className="absolute top-[60%] right-[10%] w-12 h-12 bg-primary/10 rounded-lg animate-pulse-slow" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px] animate-pulse-slow" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-up">
            <div
              className="
                w-32 h-32 md:w-40 md:h-40 mx-auto
                rounded-full
                border-[3px] border-primary/50
                shadow-[0_0_35px_rgba(59,130,246,0.45)]
                overflow-hidden
                flex items-center justify-center
                bg-[#0d1b2a]
              "
            >
              <img
                src="/profile.JPG"
                alt="Masood Mirza"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="animate-fade-up-delayed">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-4">
              Masood Mirza
            </h1>
            <p className="text-lg md:text-xl text-hero-muted mb-8">
              Data Analyst <span className="text-primary">|</span> Business Analyst{" "}
              <span className="text-primary">|</span> Python Developer
            </p>
          </div>

          {/* Headline */}
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            Turning Data Into <span className="gradient-text">Insights</span>
            <br />
            That Drive Decisions
          </h2>

          {/* Subtext */}
          <p
            className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            Business Analytics graduate skilled in Python, SQL, Tableau, and Machine Learning
            with experience in financial analytics and system engineering.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* View Resume (open in new tab) */}
            <Button variant="hero" size="xl" asChild className="group">
              <a
                href="https://drive.google.com/file/d/1NLflPli9lH0dFgXyTlfXdK-PQEtQOKqg/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download
                  className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                View Resume
              </a>
            </Button>

            {/* Contact Me (smooth scroll) */}
            <Button
              variant="heroOutline"
              size="xl"
              type="button"
              onClick={scrollToContact}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
