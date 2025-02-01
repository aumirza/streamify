import LoadingSpinner from "@/components/LoadingSpinner";
import { Card, CardContent } from "@/components/ui/card";
import { streamColumns } from "@/features/streams/columns";
import { StreamsTable } from "@/features/streams/StreamsTable";
import { useGetStreamsQuery } from "@/services/streamsApi";

export function Streams() {
  const { data, error, isLoading } = useGetStreamsQuery("");
  if (error) return <div>Error: {error.toString()}</div>;
  return (
    <Card className="w-full border-0 shadow-md">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CardContent className="p-6">
          <StreamsTable data={data?.streams ?? []} columns={streamColumns} />
        </CardContent>
      )}
    </Card>
  );
}
