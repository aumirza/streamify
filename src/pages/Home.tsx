import { InfoCard } from "@/components/InfoCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import RevenueChart from "@/components/RevenueChart";
import { TopStreamedSongs } from "@/components/TopStreamedSongs";
import { AudioLinesIcon } from "@/components/ui/audio-lines";
import { CircleDollarSignIcon } from "@/components/ui/circle-dollar-sign";
import { UsersIcon } from "@/components/ui/users";
import { UserChart } from "@/components/UserChart";
import { useBreadCrumb } from "@/hooks/useBreadCrumb";
import { useGetAnalyticsQuery } from "@/services/anlyticsApi";
import { useGetChartsQuery } from "@/services/chartsApi";

export function Home() {
  const { data, isLoading } = useGetAnalyticsQuery("");
  const { data: chartsData, isLoading: isChartsLoading } =
    useGetChartsQuery("");

  useBreadCrumb([
    {
      name: "Home",
      path: "/",
    },
  ]);

  return (
    <div className="flex flex-col gap-10">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <InfoCard
            icon={<UsersIcon />}
            caption="Total Users"
            value={data?.totalUsers}
          />
          <InfoCard
            icon={<UsersIcon />}
            caption="Active Users"
            value={data?.activeUsers}
          />
          <InfoCard
            icon={<AudioLinesIcon />}
            caption="Total Streams"
            value={data?.totalStreams}
          />
          <InfoCard
            icon={<CircleDollarSignIcon />}
            caption="Revenue"
            value={data?.revenue}
          />
        </div>
      )}
      {isChartsLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <RevenueChart data={chartsData?.revenueDistributionData} />
          <div className="grid gap-5 lg:grid-cols-2">
            <UserChart data={chartsData?.userGrowthData} />
            <TopStreamedSongs data={chartsData?.top5} />
          </div>
        </>
      )}
    </div>
  );
}
