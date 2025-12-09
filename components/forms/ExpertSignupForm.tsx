"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  website: z.string().url({ message: "Please enter a valid URL." }).optional(),
  linkedIn: z.string().url({ message: "Please enter a valid LinkedIn URL." }).optional(),
  expertise: z.string({
    required_error: "Please select an area of expertise.",
  }),
});

type ExpertSignupFormProps = {
  setSignedUp: (joined: boolean) => void;
  signedUp: boolean;
};

const ExpertSignupForm = ({ setSignedUp }: ExpertSignupFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      linkedIn: "",
      expertise: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      // Demo mode: don't send real application data. Simulate success locally.
      console.info("Demo expert application (no external submission):", data);
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      setSignedUp(true);
      form.reset();
    } catch (error) {
      console.error("Demo submission error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 text-xl font-samPlayfair"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
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
                  <Input placeholder="janedoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="yourwebsite.com (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="linkedin.com/in/yourprofile (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expertise"
            
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area of Expertise</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of expertise" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      "Career/Executive",
                      "Finances",
                      "Dating/Relationships",
                      "Death",
                      "Illness",
                      "Faith",
                      "Gender/Sexuality",
                      "Personal Image/Style",
                      "Parenting",
                      "Divorce",
                      "Mid-Life",
                      "Retirement",
                      "Performance",
                      "Personal Training",
                      "Business",
                      "Creativity",
                      "Philanthropy",
                      "Interior Design",
                      "Other",
                    ].map((area) => (
                      <SelectItem key={area} value={area} className="font-samPlayfair">
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
      {isSuccess && (
        <p className="text-samGreenLight">
          Your application was successfully submitted!
        </p>
      )}
      {isError && (
        <p className="text-samRedLight">
          There was an error submitting your application. Please try again.
        </p>
      )}
    </div>
  );
};

export default ExpertSignupForm;