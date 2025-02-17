import { type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

// Simple in-memory storage implementation
export class MemStorage implements IStorage {
  private contactMessages: ContactMessage[] = [];
  private nextId = 1;

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const contactMessage: ContactMessage = {
      id: this.nextId++,
      ...message,
    };
    this.contactMessages.push(contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();