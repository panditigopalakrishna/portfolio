import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

function SkillBar({ skill, percentage, color = "primary" }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(percentage), 200);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-muted-foreground">{skill}</span>
        <span className={`text-${color} text-sm`}>{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`skill-bar h-2 rounded-full transition-all duration-2000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skills = {
    programming: [
      { name: "C#", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 88 },
    ],
    frontend: [
      { name: "Angular", level: 90 },
      { name: "React.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
    backend: [
      { name: ".NET Core", level: 92 },
      { name: "ASP.NET", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "RESTful APIs", level: 88 },
    ],
    database: [
      { name: "SQL Server", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Agile/Scrum", level: 88 },
      { name: "SDLC", level: 85 },
    ],
    ml: [
      { name: "Machine Learning", level: 75 },
      { name: "Deep Learning", level: 70 },
      { name: "Data Analytics", level: 80 },
    ],
  };

  const certifications = [
    {
      name: "HTML Certification",
      issuer: "University of Michigan (Coursera)",
      icon: "fab fa-html5",
      color: "text-orange-500",
    },
    {
      name: "Angular Certification",
      issuer: "HackerRank",
      icon: "fab fa-angular",
      color: "text-red-500",
    },
    {
      name: "SQL Certification",
      issuer: "HackerRank",
      icon: "fas fa-database",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background tech-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-card border-primary/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-primary text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">Programming Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.programming.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frontend */}
          <Card className="bg-card border-secondary/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-palette text-secondary text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="bg-card border-accent/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-server text-blue-400 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Database */}
          <Card className="bg-card border-purple-500/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-database text-purple-400 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">Database</h3>
              </div>
              <div className="space-y-4">
                {skills.database.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Development */}
          <Card className="bg-card border-orange-500/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-tools text-orange-400 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">Development</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI/ML */}
          <Card className="bg-card border-pink-500/20 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-pink-400 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-foreground font-inter">AI/ML</h3>
              </div>
              <div className="space-y-4">
                {skills.ml.map((skill) => (
                  <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center font-inter">Certifications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="text-center p-4 bg-muted/50 rounded-lg border border-primary/20">
                    <i className={`${cert.icon} text-3xl ${cert.color} mb-2`}></i>
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}