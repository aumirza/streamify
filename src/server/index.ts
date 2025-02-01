import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export function makeServer() {
  return createServer({
    models: {
      user: Model, // Todo: add relation
      // stream: Model.extend({
      //   user: belongsTo(),
      // }),
      stream: Model,
    },
    factories: {
      user: Factory.extend({
        name: () => faker.person.fullName(),
        email: () => faker.internet.email(),
        avatar: () => faker.image.avatarGitHub(),
        isActive: () => faker.datatype.boolean(),
        password: () => faker.internet.password(),
      }),
      stream: Factory.extend({
        id: () => faker.number.int({ min: 1, max: 10 }),
        songName: () => faker.music.songName(),
        artist: () => faker.person.fullName(),
        dateStreamed: () => faker.date.recent({ days: 7 }),
        genre: () => faker.music.genre(),
        streamCount: () => faker.number.int({ min: 1, max: 100 }),
        userId: () => faker.number.int({ min: 1, max: 10 }),
      }),
    },
    seeds(server) {
      server.createList("user", 10);
      server.createList("stream", 30);
    },
    routes() {
      this.namespace = "api";
      // get all users
      // this.get("/users", (schema) => {
      //   return schema.users.all();
      // });

      // Total Users: The total number of registered users on the platform.
      // Active Users: The number of users who have streamed at least one song in the last 30 days.
      // Total Streams: The total number of song streams on the platform.
      // Revenue: The total revenue generated from subscriptions and advertisements.
      this.get(
        "/analytics",
        (schema) => ({
          totalUsers: schema.users.all().length,
          activeUsers: schema.users.where({ isActive: true }).length,
          totalStreams: schema.streams.all().length,
          revenue: faker.number.int({ min: 1000, max: 10000 }),
        }),
        { timing: 1000 }
      );

      // User Growth Chart: A line chart that shows the growth in the number of total users and active users over the past 12 months.
      // Revenue Distribution: A pie chart that shows the breakdown of revenue from different sources (e.g., Subscriptions, Ads).
      // Top Artist: The artist with the most streams in the past 30 days.
      // Top 5 Streamed Songs: A bar chart that displays the top 5 most-streamed songs over the past 30 days.
      this.get("/charts", (schema) => {
        // Top artists with stream counts
        const topArtists = Array.from({ length: 5 }, () => ({
          name: faker.person.fullName(),
          streams: faker.number.int({ min: 400000, max: 1000000 }),
        })).sort((a, b) => b.streams - a.streams);

        // Top 5 streamed songs with details
        const top5 = schema.streams
          .all()
          .models.sort((a, b) => b.streamCount - a.streamCount)
          .slice(0, 5)
          .map((stream) => ({
            songName: stream.songName,
            artist: stream.artist,
            streams: stream.streamCount,
          }));

        // Generate monthly data for the past year
        const currentDate = new Date();
        const userGrowthData = Array.from({ length: 12 }, (_, index) => {
          const monthOffset = 11 - index;
          const month = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - monthOffset,
            1
          );
          return {
            month: month.toLocaleString("default", { month: "short" }),
            totalUsers: faker.number.int({
              min: 1000 + index * 100,
              max: 2000 + index * 100,
            }),
            activeUsers: faker.number.int({
              min: 500 + index * 50,
              max: 1000 + index * 50,
            }),
          };
        });

        // Revenue distribution for current month and quarter
        const revenueDistributionData = {
          currentMonth: {
            subscriptions: faker.number.int({ min: 50000, max: 100000 }),
            advertisements: faker.number.int({ min: 20000, max: 50000 }),
            inAppPurchases: faker.number.int({ min: 10000, max: 30000 }),
            donations: faker.number.int({ min: 5000, max: 15000 }),
          },
          currentQuarter: {
            subscriptions: faker.number.int({ min: 150000, max: 300000 }),
            advertisements: faker.number.int({ min: 60000, max: 150000 }),
            inAppPurchases: faker.number.int({ min: 30000, max: 90000 }),
            donations: faker.number.int({ min: 15000, max: 45000 }),
          },
        };

        return {
          topArtists,
          top5,
          userGrowthData,
          revenueDistributionData,
        };
      });

      this.get("/streams", (schema) =>
        schema.streams
          .all()
          .sort(
            (a, b) =>
              new Date(b.dateStreamed).getTime() -
              new Date(a.dateStreamed).getTime()
          )
      ),
        // this.get("/streams/:id", (schema, request) => {
        //   const id = request.params.id; //get id from request
        //   return schema.stream.find(id);
        // });
        this.get("/users"),
        this.get("/streams/:id");
    },
  });
}
