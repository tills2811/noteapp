import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const $notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  imageUrl: text("imageUrl"), // for dalle image url
  userId: text("user_Id").notNull(), // will come from clerk
  editorState: text("editor_state"), // all the content in the notes will come in this field
});

export type NoteType = typeof $notes.$inferInsert;
