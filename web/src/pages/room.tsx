import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};
export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      {params.roomId ? (
        <h1>Room ID: {params.roomId}</h1>
      ) : (
        <h1>No Room ID provided</h1>
      )}
    </div>
  );
}
