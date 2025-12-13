import { Card } from "@/components/ui/card";
import { Building2, Users, Award, Target } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Building2, value: "15+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Projects Completed" },
    { icon: Award, value: "100%", label: "Quality Assurance" },
    { icon: Target, value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center animate-slide-up">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Building Dreams Into <span className="text-gradient">Reality</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <h3 className="mb-6 text-2xl font-bold md:text-3xl">
                Introduction
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                A-1 Enterprises is a Civil Contracting company led by CEO <span className="font-semibold text-foreground">Mr. Arif A. S. Sayed</span>. 
                The Firm has more than 15 years of vast experience in the construction industry. 
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Company's motto is delivering qualities which we ensure we execute each step of the way. 
                Our diverse experience in the industry ranges from Residential, Commercial to Petrol pump and Banks. 
                We ensure commitment, quality and safety in all projects undertaken. The headquarters is based in Mumbai.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};