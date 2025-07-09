import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRooms } from "../http/use-rooms";
import { dayjs } from "../lib/dayjs";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function RoomList() {
  const { data, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle> Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido às salas que você criou recentemente.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <div className="flex items-center justify-center">
            <span>Carregando...</span>
          </div>
        )}

        {data?.map((room) => {
          return (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2">
                  <Badge variant={"secondary"}>
                    {dayjs(room.createdAt).fromNow()}
                  </Badge>
                  <Badge variant={"secondary"}>
                    {room.questionsCount} pergunstas
                  </Badge>
                </div>
              </div>

              <span>
                Entrar
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
