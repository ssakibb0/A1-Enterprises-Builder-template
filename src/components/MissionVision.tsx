import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import missionBg from "@/assets/mission-vision-bg.jpg";

export const MissionVision = () => {
  return (
    <section className="relative py-16 md:py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${missionBg})` }}
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-16 text-center animate-slide-up">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Foundation
          </span>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Mission, Vision & <span className="text-gradient">Values</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-elegant">
            <div className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Mission</h3>
              <p className="leading-relaxed text-muted-foreground">
                Our mission is to be one of the top civil constructions company as well as infrastructure arm in India. 
                We aim to grow indigenously, as well as internationally by ensuring we provide high quality products through various services.
              </p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-elegant">
            <div className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Vision</h3>
              <p className="leading-relaxed text-muted-foreground">
                The company vision is to successfully deliver to customers' high quality, cost effective products and services on time, 
                every time on a global scale.
              </p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-elegant">
            <div className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Values</h3>
              <ul className="space-y-2 leading-relaxed text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Quality & Commitment
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Safety First
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Customer Satisfaction
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Innovation & Excellence
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};