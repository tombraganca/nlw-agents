import fastifyCors from "@fastify/cors";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createRoomsRoute } from "./http/routes/create-room.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { getRoomsQuestionsRoute } from "./http/routes/get-rooms-questions.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
  return { status: "ok" };
});

app.register(getRoomsRoute);
app.register(createRoomsRoute);
app.register(getRoomsQuestionsRoute);

app.listen({
  port: process.env.PORT ? Number(env.PORT) : 3333,
});
