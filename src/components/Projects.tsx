import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sbiBanner from "@/assets/sbi-banner.jpg";
import auBankBanner from "@/assets/au-bank-banner.jpg";
import axisBankBanner from "@/assets/axis-bank-banner.jpg";
import tataAiaBanner from "@/assets/tata-aia-banner.jpg";
import peterEnglandBanner from "@/assets/peter-england-banner.jpg";
import louisPhilippeBanner from "@/assets/louis-philippe-banner.jpg";
import tajunHeights from "@/assets/tajun-heights.jpg";
import sewriSeaview from "@/assets/sewri-seaview.jpg";
export const Projects = () => {
  const ongoingProjects = [
    {
      title: "Tajun Heights",
      location: "Wadala, Mumbai",
      category: "Ongoing Project",
      description: "Premium residential development in Wadala featuring contemporary architecture with glass facades. State-of-the-art amenities and modern living spaces designed for urban lifestyle.",
      image: tajunHeights,
      status: "Under Construction",
    },
  ];

  const upcomingProjects = [
    {
      title: "Sewri Sea View Residences",
      location: "Sewri, Mumbai",
      category: "Upcoming Project",
      description: "Luxury waterfront residential project in prime Sewri location. Offering breathtaking Arabian Sea views with world-class amenities and contemporary design.",
      image: sewriSeaview,
      status: "Coming Soon",
    },
  ];

  const completedProjects = [
    {
      title: "SBI",
      category: "Banking & Finance",
      description: "Complete interior and exterior work for State Bank of India's banking unit with modern design and premium finishes.",
      image: sbiBanner,
    },
    {
      title: "Axis Bank",
      category: "Banking & Finance",
      description: "Premium Axis Bank branch with modern interiors and customer-centric design for seamless banking experience.",
      image: axisBankBanner,
    },
    {
      title: "Peter England",
      category: "Retail",
      description: "Peter England premium men's fashion retail store with elegant interiors and sophisticated display systems.",
      image: peterEnglandBanner,
    },
    {
      title: "LP (Louis Philippe)",
      category: "Retail",
      description: "Louis Philippe luxury retail store featuring high-end finishes and premium brand experience.",
      image: louisPhilippeBanner,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        {/* Milestone Achievement */}
        <div className="mb-16 text-center animate-slide-up">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Milestones
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Successfully Completed <span className="text-gradient">50+ Projects</span> Across India
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From residential to commercial, we have successfully delivered over 50 projects across India, transforming skylines and enriching lives with our expertise.
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <h3 className="mb-8 text-3xl font-bold">Ongoing Projects</h3>
          <div className="grid gap-8 md:grid-cols-1">
            {ongoingProjects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-primary text-primary-foreground">
                      {project.status}
                    </Badge>
                    <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </div>
                    <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{project.location}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="mb-16">
          <h3 className="mb-8 text-3xl font-bold">Upcoming Projects</h3>
          <div className="grid gap-8 md:grid-cols-1">
            {upcomingProjects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-accent text-accent-foreground">
                      {project.status}
                    </Badge>
                    <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </div>
                    <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{project.location}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <h3 className="mb-8 text-3xl font-bold">Completed Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {completedProjects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Projects = () => {
//   const ongoingProjects = [
//     {
//       title: "Tajun Heights",
//       location: "Wadala, Mumbai",
//       category: "Ongoing Project",
//       description: "Premium residential development in Wadala featuring contemporary architecture with glass facades. State-of-the-art amenities and modern living spaces designed for urban lifestyle.",
//       image: tajunHeights,
//       status: "Under Construction",
//     },
//   ];

//   const upcomingProjects = [
//     {
//       title: "Sewri Sea View Residences",
//       location: "Sewri, Mumbai",
//       category: "Upcoming Project",
//       description: "Luxury waterfront residential project in prime Sewri location. Offering breathtaking Arabian Sea views with world-class amenities and contemporary design.",
//       image: sewriSeaview,
//       status: "Coming Soon",
//     },
//   ];

//   const completedProjects = [
//     {
//       title: "SBI",
//       category: "Banking & Finance",
//       description: "Complete interior and exterior work for State Bank of India's banking unit with modern design and premium finishes.",
//       image: sbiBanner,
//     },
//     // {
//     //   title: "AU Bank",
//     //   category: "Banking & Finance",
//     //   description: "AU Small Finance Bank branch designed with contemporary aesthetics and functional banking environment.",
//     //   image: auBankBanner,
//     // },
//     {
//       title: "Axis Bank",
//       category: "Banking & Finance",
//       description: "Premium Axis Bank branch with modern interiors and customer-centric design for seamless banking experience.",
//       image: axisBankBanner,
//     },
//     // {
//     //   title: "Tata AIA Life",
//     //   category: "Insurance",
//     //   description: "Tata AIA Life Insurance office designed with professional aesthetics and welcoming environment for clients.",
//     //   image: tataAiaBanner,
//     // },
//     {
//       title: "Peter England",
//       category: "Retail",
//       description: "Peter England premium men's fashion retail store with elegant interiors and sophisticated display systems.",
//       image: peterEnglandBanner,
//     },
//     {
//       title: "LP (Louis Philippe)",
//       category: "Retail",
//       description: "Louis Philippe luxury retail store featuring high-end finishes and premium brand experience.",
//       image: louisPhilippeBanner,
//     },
//   ];

//   return (
//     <section className="py-16 md:py-20 bg-secondary/30">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="mb-16 text-center animate-slide-up">
//           <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
//             Our Portfolio
//           </span>
//           <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             Showcasing our excellence in delivering world-class infrastructure across various sectors
//           </p>
//         </div>

//         {/* Ongoing Projects */}
//         <div className="mb-16">
//           <h3 className="mb-8 text-3xl font-bold">Ongoing Projects</h3>
//           <div className="grid gap-8 md:grid-cols-1">
//             {ongoingProjects.map((project, index) => (
//               <Card 
//                 key={index}
//                 className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-8 flex flex-col justify-center">
//                     <Badge className="mb-4 w-fit bg-primary text-primary-foreground">
//                       {project.status}
//                     </Badge>
//                     <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
//                       {project.category}
//                     </div>
//                     <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
//                     <p className="mb-4 text-sm text-muted-foreground">{project.location}</p>
//                     <p className="text-muted-foreground">{project.description}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Upcoming Projects */}
//         <div className="mb-16">
//           <h3 className="mb-8 text-3xl font-bold">Upcoming Projects</h3>
//           <div className="grid gap-8 md:grid-cols-1">
//             {upcomingProjects.map((project, index) => (
//               <Card 
//                 key={index}
//                 className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-8 flex flex-col justify-center">
//                     <Badge className="mb-4 w-fit bg-accent text-accent-foreground">
//                       {project.status}
//                     </Badge>
//                     <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
//                       {project.category}
//                     </div>
//                     <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
//                     <p className="mb-4 text-sm text-muted-foreground">{project.location}</p>
//                     <p className="text-muted-foreground">{project.description}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Completed Projects */}
//         <div>
//           <h3 className="mb-8 text-3xl font-bold">Completed Projects</h3>
//           <div className="grid gap-8 md:grid-cols-2">
//             {completedProjects.map((project, index) => (
//               <Card 
//                 key={index}
//                 className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-elegant"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
//                     {project.category}
//                   </div>
//                   <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
//                   <p className="text-muted-foreground">{project.description}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };