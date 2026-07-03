import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Construction, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import stageLand from "@/assets/progress/stage-1-land.jpg";
import stageFoundation from "@/assets/progress/stage-2-foundation.jpg";
import floor6 from "@/assets/progress/floor-6.jpeg";
import floor10 from "@/assets/progress/floor-10.jpeg";
import floor12 from "@/assets/progress/floor-12.jpeg";
import approval from "@/assets/progress/approval.jpeg";

import tajunHero from "@/assets/tajun-heights.jpg";

const timeline = [
  {
    date: "Phase 01",
    title: "Land Acquisition & Site Clearance",
    description:
      "The journey began with the acquisition of a prime plot in Wadala. Site was cleared, surveyed and prepared for the first stroke of construction.",
    image: stageLand,
    status: "Completed",
  },
  {
    date: "Phase 02",
    title: "Regulatory Approvals & MHADA Documentation",
    description:
      "All statutory approvals, MHADA project documentation and RERA compliance completed — the foundation of a legally sound project.",
    image: approval,
    status: "Completed",
  },
  {
    date: "Phase 03",
    title: "Excavation & Foundation Laying",
    description:
      "Deep foundation excavation began. Steel reinforcement, RCC raft foundation and structural core work initiated with precision engineering.",
    image: stageFoundation,
    status: "Completed",
  },
  {
    date: "Phase 04",
    title: "6th Floor Slab Cast",
    description:
      "The structure rises. Sixth floor RCC slab successfully cast — a defining milestone marking the vertical journey of Tajun Heights.",
    image: floor6,
    status: "Completed",
  },
  {
    date: "Phase 05",
    title: "10th Floor Structure Complete",
    description:
      "Tenth floor structural work completed. Brickwork and internal partitions running in parallel across lower floors.",
    image: floor10,
    status: "Completed",
  },
  {
    date: "Phase 06",
    title: "12th Floor & Beyond — Current Stage",
    description:
      "Construction advancing through monsoon with full safety netting. Twelfth floor slab in progress. On track for handover.",
    image: floor12,
    status: "Ongoing",
  },
  {
    date: "Phase 07",
    title: "Finishing, Facade & Handover",
    description:
      "Glass facade, premium interiors, landscaping and amenities to follow. The final vision of Tajun Heights takes shape.",
    image: tajunHero,
    status: "Upcoming",
  },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-primary text-primary-foreground",
  Ongoing: "bg-accent text-accent-foreground",
  Upcoming: "bg-muted text-muted-foreground border border-border",
};

const TajunProgress = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src={tajunHero}
          alt="Tajun Heights"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-6 py-8 md:px-12">
          <Link to="/">
            <Button
              variant="ghost"
              className="w-fit text-white hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="max-w-3xl text-white">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Ongoing Project · Under Construction
            </Badge>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
              Tajun <span className="text-gradient">Heights</span>
            </h1>
            <div className="mb-4 flex items-center gap-2 text-lg text-white/90">
              <MapPin className="h-5 w-5" />
              Wadala, Mumbai
            </div>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
              From an empty plot to a landmark residential tower — witness the journey of
              Tajun Heights, brick by brick, floor by floor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/30 py-10">
        <div className="container mx-auto grid grid-cols-3 gap-6 px-6 md:px-12">
          {[
            { label: "Total Floors", value: "15+", icon: Construction },
            { label: "Project Start", value: "2022", icon: Calendar },
            { label: "Location", value: "Wadala", icon: MapPin },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold md:text-3xl">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center animate-slide-up">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Construction Journey
            </span>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              From Ground <span className="text-gradient">to Skyline</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every phase captured, every milestone documented — real progress, real
              craftsmanship.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-glow ring-4 ring-background md:left-1/2" />

                  {/* Image */}
                  <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-6">
                    <div className="group overflow-hidden rounded-2xl border border-border shadow-elegant">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-6">
                    <Badge
                      className={`mb-3 ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </Badge>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                      {item.date}
                    </p>
                    <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
        <div className="container mx-auto px-6 text-center md:px-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Interested in Tajun Heights?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Get in touch for site visits, pricing and detailed project brochure.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TajunProgress;