// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/hooks/use-toast";

// interface QuoteDialogProps {
//   buttonClassName?: string;
//   buttonText?: string;
//   variant?: "default" | "outline" | "ghost";
// }

// export const QuoteDialog = ({ buttonClassName, buttonText = "Get Quote", variant = "default" }: QuoteDialogProps) => {
//   const [open, setOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     purpose: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate submission
//     await new Promise(resolve => setTimeout(resolve, 800));
    
//     toast({
//       title: "Quote Request Submitted!",
//       description: "We'll get back to you within 24 hours.",
//     });
    
//     // Reset form and close dialog with animation
//     setFormData({
//       name: "",
//       contact: "",
//       purpose: "",
//     });
    
//     setIsSubmitting(false);
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className={buttonClassName} variant={variant}>
//           {buttonText}
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[450px] animate-slide-in-top rounded-2xl p-6">
//         <DialogHeader>
//           <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
//           <DialogDescription>
//             Fill in your details and we'll contact you shortly.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className={`space-y-4 mt-4 transition-all duration-500 ${isSubmitting ? 'animate-slide-out-bottom opacity-0' : ''}`}>
//           <div className="space-y-2">
//             <Label htmlFor="name">Name *</Label>
//             <Input
//               id="name"
//               placeholder="Your full name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               required
//               className="rounded-lg"
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="contact">Contact *</Label>
//             <Input
//               id="contact"
//               type="tel"
//               placeholder="+91 XXXXX XXXXX"
//               value={formData.contact}
//               onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
//               required
//               className="rounded-lg"
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="purpose">Purpose *</Label>
//             <Textarea
//               id="purpose"
//               placeholder="Tell us about your project..."
//               value={formData.purpose}
//               onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
//               required
//               rows={3}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="flex gap-3 pt-2">
//             <Button 
//               type="button" 
//               variant="outline" 
//               className="flex-1 rounded-lg"
//               onClick={() => setOpen(false)}
//             >
//               Back
//             </Button>
//             <Button 
//               type="submit" 
//               className="flex-1 bg-gradient-to-r from-primary to-accent text-white rounded-lg"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };


import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface QuoteDialogProps {
  buttonClassName?: string;
  buttonText?: string;
  variant?: "default" | "outline" | "ghost";
}

export const QuoteDialog = ({
  buttonClassName,
  buttonText = "Get Quote",
  variant = "default",
}: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      purpose: formData.purpose,
    };

    emailjs
      .send(
        "service_8ugwkcg",      // ✔ Your service ID
        "template_c9m0myi",     // ✔ Your template ID
        templateParams,
        "pzFWH2fdJ5iKYI4mV"     // ✔ Your public key
      )
      .then(() => {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({ name: "", contact: "", purpose: "" });
        setOpen(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        toast({
          title: "Failed to submit",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName} variant={variant}>
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px] animate-slide-in-top rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll contact you shortly.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className={`space-y-4 mt-4 transition-all duration-500 ${
            isSubmitting ? "animate-slide-out-bottom opacity-0" : ""
          }`}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact *</Label>
            <Input
              id="contact"
              name="contact"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              required
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose *</Label>
            <Textarea
              id="purpose"
              name="purpose"
              placeholder="Tell us about your project..."
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              required
              rows={3}
              className="rounded-lg"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Back
            </Button>

            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-accent text-white rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
