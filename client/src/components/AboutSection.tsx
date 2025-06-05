import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-inter">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-inter">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Enthusiastic Full Stack Developer with 1.5 years of experience in .NET Full Stack Development, specializing in C# and .NET Core. 
              Adept at developing web applications using modern frameworks like Angular. Proficient in full SDLC and Agile methodologies, 
              with additional project experience in Node.js, JavaScript, and Machine Learning using Python.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Passionate about problem-solving, continuous learning, and delivering high-quality, scalable solutions. 
              Recognized for strong ownership, adaptability, and mentorship in collaborative environments. 
              Received the <span className="text-primary font-semibold">Ace Award</span> for outstanding performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Dublin, Ireland</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-muted-foreground">1.5+ Years</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                  <p className="text-muted-foreground">English, Telugu, Hindi</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Award</h4>
                  <p className="text-muted-foreground">Ace Award Recipient</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace with multiple monitors" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 font-inter">Key Competencies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Strong problem-solving and analytical skills
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Passion for learning new technologies
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Excellent prioritization and task management
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Effective communicator and team player
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    Adaptability in fast-paced environments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}