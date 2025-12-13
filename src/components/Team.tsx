// import { Card } from "@/components/ui/card";
// import arifCeo from "@/assets/arif-ceo.jpg";
// import sannanTanaji from "@/assets/sannan-tanaji.jpg";

// export const Team = () => {
//   const team = [
//     { 
//       name: "Mr. Arif A. S. Sayed", 
//       role: "CEO", 
//       image: arifCeo 
//     },
//     { 
//       name: "Sannan Tanaji", 
//       role: "Sr. Project Manager", 
//       image: sannanTanaji 
//     },
//   ];

//   return (
//     <section className="relative py-16 md:py-20 overflow-hidden">
//       {/* Background with gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
      
//       <div className="container relative mx-auto px-6 md:px-12">
//         <div className="mb-20 text-center animate-slide-up">
//           <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
//             Our Leadership
//           </span>
//           <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
//             Meet Our <span className="text-gradient">Team</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             Led by experienced professionals with a dedicated team of 50+ employees committed to excellence
//           </p>
//         </div>

//         <div className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto mb-16">
//           {team.map((member, index) => (
//             <Card 
//               key={index}
//               className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-elegant hover:-translate-y-2"
//             >
//               <div className="aspect-[3/4] overflow-hidden relative">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <img 
//                   src={member.image} 
//                   alt={member.name}
//                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-8 text-center relative">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <h3 className="mb-2 text-2xl font-bold group-hover:text-primary transition-colors duration-300">{member.name}</h3>
//                 <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">{member.role}</p>
//                 <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center">
//           <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-lg hover:shadow-elegant transition-all duration-300">
//             <div className="flex -space-x-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background shadow-md"></div>
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 border-2 border-background shadow-md"></div>
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/30 border-2 border-background shadow-md"></div>
//             </div>
//             <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
//             <p className="text-lg font-bold">
//               <span className="text-gradient">50+ Dedicated Employees</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { Award, Briefcase, Users, Star } from "lucide-react";
// import arifCeo from "@/assets/arif-ceo.jpg";
// import sannanTanaji from "@/assets/sannan-tanaji.jpg";

// export const Team = () => {
//   return (
//     <section className="relative py-16 md:py-20 overflow-hidden">
//       {/* Background with gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
      
//       <div className="container relative mx-auto px-6 md:px-12">
//         <div className="mb-16 text-center animate-slide-up">
//           <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
//             Our Leadership
//           </span>
//           <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
//             Meet Our <span className="text-gradient">Team</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             Led by experienced professionals with a dedicated team of 50+ employees committed to excellence
//           </p>
//         </div>

//         {/* CEO Section - Featured */}
//         <div className="mb-16 max-w-6xl mx-auto">
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
//             <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
//               <div className="grid md:grid-cols-2 gap-0">
//                 {/* CEO Image */}
//                 <div className="relative h-80 md:h-auto">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20 z-10"></div>
//                   <img 
//                     src={arifCeo} 
//                     alt="Mr. Arif A. S. Sayed - CEO"
//                     className="h-full w-full object-cover object-top"
//                   />
//                   <div className="absolute bottom-4 left-4 md:hidden z-20">
//                     <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
//                       Founder & CEO
//                     </span>
//                   </div>
//                 </div>
                
//                 {/* CEO Details */}
//                 <div className="p-8 md:p-12 flex flex-col justify-center">
//                   <div className="hidden md:inline-block mb-4">
//                     <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-bold uppercase tracking-wider rounded-full border border-primary/30">
//                       Founder & CEO
//                     </span>
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold mb-2">Mr. Arif A. S. Sayed</h3>
//                   <p className="text-primary font-semibold mb-6">Chief Executive Officer</p>
                  
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     A visionary leader with over 15+ years of experience in the construction and real estate industry. 
//                     Under his leadership, A-1 Enterprises has grown from a small firm to a trusted name in civil contracting, 
//                     delivering excellence across residential, commercial, and infrastructure projects.
//                   </p>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
//                       <div className="p-2 rounded-lg bg-primary/10">
//                         <Briefcase className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-2xl font-bold text-primary">15+</p>
//                         <p className="text-xs text-muted-foreground">Years Experience</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10">
//                       <div className="p-2 rounded-lg bg-accent/10">
//                         <Award className="w-5 h-5 text-accent" />
//                       </div>
//                       <div>
//                         <p className="text-2xl font-bold text-accent">100+</p>
//                         <p className="text-xs text-muted-foreground">Projects Delivered</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Project Manager Section */}
//         <div className="max-w-5xl mx-auto mb-16">
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur-lg opacity-15 group-hover:opacity-30 transition duration-500"></div>
//             <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
//               <div className="grid md:grid-cols-3 gap-0">
//                 {/* Image */}
//                 <div className="relative h-72 md:h-auto">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/10 z-10"></div>
//                   <img 
//                     src={sannanTanaji} 
//                     alt="Sannan Tanaji - Sr. Project Manager"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>
                
//                 {/* Details */}
//                 <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
//                   <div className="inline-block mb-3 w-fit">
//                     <span className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-primary/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/30">
//                       Sr. Project Manager
//                     </span>
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-bold mb-2">Sannan Tanaji</h3>
//                   <p className="text-accent font-semibold mb-4">Senior Project Manager</p>
                  
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     A dedicated professional with expertise in project planning, execution, and team coordination. 
//                     Sannan ensures every project is delivered on time with uncompromising quality standards. 
//                     His hands-on approach and attention to detail have been instrumental in our project success.
//                   </p>
                  
//                   <div className="flex flex-wrap gap-3">
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
//                       <Star className="w-4 h-4 text-accent" />
//                       <span className="text-sm font-medium">Project Planning</span>
//                     </div>
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
//                       <Users className="w-4 h-4 text-primary" />
//                       <span className="text-sm font-medium">Team Leadership</span>
//                     </div>
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
//                       <Award className="w-4 h-4 text-accent" />
//                       <span className="text-sm font-medium">Quality Control</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Stats */}
//         <div className="text-center">
//           <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-lg hover:shadow-elegant transition-all duration-300">
//             <div className="flex -space-x-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background shadow-md"></div>
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 border-2 border-background shadow-md"></div>
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/30 border-2 border-background shadow-md"></div>
//             </div>
//             <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
//             <p className="text-lg font-bold">
//               <span className="text-gradient">50+ Dedicated Employees</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Award, Briefcase, Users, Star } from "lucide-react";
import arifCeo from "@/assets/arif-ceo.jpg";
import sannanTanaji from "@/assets/sannan-tanaji.jpg";

export const Team = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>

      <div className="container relative mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 text-center animate-slide-up">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Leadership
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Led by experienced professionals with a dedicated team of 50+ employees committed to excellence.
          </p>
        </div>

        {/* CEO Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">

                {/* CEO Image */}
                <div className="relative h-80 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20 z-10"></div>

                  <img 
                    src={arifCeo} 
                    alt="Mr. Arif A. S. Sayed - CEO"
                    className="w-full h-full object-cover object-top"
                  />

                  <div className="absolute bottom-4 left-4 md:hidden z-20">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                      Founder & CEO
                    </span>
                  </div>
                </div>

                {/* CEO Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="hidden md:inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-bold uppercase tracking-wider rounded-full border border-primary/30">
                      Founder & CEO
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Mr. Arif A. S. Sayed</h3>
                  <p className="text-primary font-semibold mb-6">Chief Executive Officer</p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A visionary leader with over 15+ years of experience in the construction and real estate industry.
                    Under his leadership, A-1 Enterprises has grown from a small firm to a trusted name in civil contracting.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">15+</p>
                        <p className="text-xs text-muted-foreground">Years Experience</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-accent">100+</p>
                        <p className="text-xs text-muted-foreground">Projects Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Project Manager Section — FIXED & IMPROVED */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur-lg opacity-15 group-hover:opacity-30 transition duration-500"></div>

            <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">

              <div className="grid md:grid-cols-3">

                {/* FIXED IMAGE — PERFECT MOBILE VIEW */}
                <div className="h-[380px] md:h-full w-full flex items-center justify-center bg-white">
                  <img
                    src={sannanTanaji}
                    alt="Sannan Tanaji - Sr. Project Manager"
                    className="h-full w-auto object-contain"
                  />
                </div>

               

                {/* DETAILS */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">

                  <span className="inline-block mb-3 px-3 py-1.5 bg-gradient-to-r from-accent/20 to-primary/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/30">
                    Sr. Project Manager
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Sannan Tanaji</h3>
                  <p className="text-accent font-semibold mb-4">Senior Project Manager</p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A dedicated professional with expertise in project planning, execution, and team coordination. 
                    Ensures timely delivery with uncompromising quality and strong leadership.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Project Planning</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Team Leadership</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Quality Control</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-lg">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary/30 border-2 border-background"></div>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

            <p className="text-lg font-bold">
              <span className="text-gradient">50+ Dedicated Employees</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
