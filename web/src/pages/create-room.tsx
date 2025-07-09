import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = {
  id: string;
  name: string;
};

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["create-room"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse[] = await response.json();
      return result;
    },
  });

  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <p>Loading...</p>}

      {data?.map((room) => (
        <div key={room.id}>
          <Link to={`/room/${room.id}`}>{room.name}</Link>
        </div>
      ))}

      <Link className="btn btn-primary" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
