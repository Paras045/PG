import { z } from "zod";

// Contact message schema for form validation
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;