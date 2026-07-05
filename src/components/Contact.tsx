import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_8ugwkcg",      // ✔ Service ID
        "template_c9m0myi",     // ✔ Template ID
        formRef.current,
        "pzFWH2fdJ5iKYI4mV"     // ✔ Public Key
      )
      .then(() => {
        alert("Message Sent Successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message");
      });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center animate-slide-up">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ready to start your next project? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="p-8">
              <h3 className="mb-6 text-2xl font-bold">Send us a message</h3>

              {/* ★★★ FORM STARTS HERE ★★★ */}
              <form ref={formRef} onSubmit={handleSendEmail} className="space-y-6">

                {/* ✅ FIXED: hidden fields for EmailJS */}
                <input
                  type="hidden"
                  name="form_type"
                  value="Contact Enquiry"
                />
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      className="bg-secondary/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      className="bg-secondary/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-secondary/50"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-secondary/50"
                    required
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
                  Send Message
                </Button>
              </form>
              {/* ★★★ FORM ENDS HERE ★★★ */}

            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Headquarters</h3>
                <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Email</h3>
                <p className="text-muted-foreground">a1enterprises37@gmail.com</p>
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Phone</h3>
                <p className="text-muted-foreground">+91 88988 56014</p>
              </div>
            </Card>

            <Card className="border-border/50 bg-primary/10 backdrop-blur-sm">
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">Director</h3>
                <p className="text-lg">Mr. Arif A. S. Sayed</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leading with 15+ years of expertise
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
