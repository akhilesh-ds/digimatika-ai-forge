
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().optional(),
});

const BookAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      console.log("Booking data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Consultation booking successful! We'll confirm your appointment shortly.");
      form.reset();
    } catch (error) {
      toast.error("Booking failed. Please try again or contact us directly.");
      console.error("Booking submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-10"
      >
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-8 text-center">
            Book a <span className="text-accent-coral">Consultation</span>
          </h1>
          <div className="w-24 h-1 bg-accent-coral mx-auto mb-12"></div>
          <p className="text-xl text-center text-secondary-slate max-w-3xl mx-auto mb-16">
            Schedule a free discovery call with our automation experts to discuss how we can help transform your business.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left side - Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary-navy to-secondary-slate p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-4">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">30-Minute Call</h3>
                        <p className="text-white/80">A focused discussion about your business needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-4">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Expert Insights</h3>
                        <p className="text-white/80">Get tailored advice from our automation specialists.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-4">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Custom Plan</h3>
                        <p className="text-white/80">Receive a follow-up with tailored automation recommendations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-6 border-t border-white/20">
                    <p className="italic text-white/80">
                      "Our discovery calls helped us understand how AI can automate our customer service, saving us 20+ hours weekly."
                    </p>
                    <p className="mt-2 font-semibold">— Maria L., Marketing Director</p>
                  </div>
                </div>
                
                {/* Right side - Form */}
                <div className="lg:col-span-3 p-8">
                  <h2 className="text-2xl font-bold text-primary-navy mb-6">Book Your Session</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ai-chatbots">AI Chatbots</SelectItem>
                                <SelectItem value="voice-agents">AI Voice Agents</SelectItem>
                                <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                                <SelectItem value="business-automation">Business Automation</SelectItem>
                                <SelectItem value="general-consultation">General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={`w-full pl-3 text-left font-normal ${
                                        !field.value ? "text-muted-foreground" : ""
                                      }`}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => 
                                      date < new Date() || 
                                      date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please share any specific questions or information about your needs"
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-accent-coral hover:bg-accent-coral/90 py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Booking Consultation..." : "Book Your Consultation"}
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        By booking a consultation, you agree to our{" "}
                        <a href="/terms-and-conditions" className="text-accent-coral hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-accent-coral hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default BookAppointment;
