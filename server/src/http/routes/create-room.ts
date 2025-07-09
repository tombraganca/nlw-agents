import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms",
    {
      schema: {
        body: z.object({
          name: z.string().min(1, "Room name is required"),
          description: z.string().optional(),
        }),
      },
    },
    async (request, reply) => {
      const { name, description } = request.body;

      const result = await db
        .insert(schema.rooms)
        .values({
          name,
          description: description || null,
        })
        .returning();

      const insertedRoom = result[0];

      if (!insertedRoom) {
        throw new Error("Failed to create room");
      }

      if (!result) {
        throw new Error("Failed to create room");
      }

      return reply.status(201).send({
        roomId: insertedRoom.id,
      });
    }
  );
};
