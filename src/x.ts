import { TriggerClient, eventTrigger } from "@trigger.dev/sdk";
import Client, { auth } from "twitter-api-sdk";
import z from "zod";

const client = new TriggerClient({
  id: "api-reference",
});

// Initialize auth client first
const authClient = new auth.OAuth2Bearer(process.env.X_BEARER_TOKEN!);

// Pass auth credentials to the library client
const twitterClient = new Client(authClient);

twitterClient.tweets.createTweet({
  text: "🔥",
});

// client.defineJob({
//   id: "tweet-x",
//   name: "Tweet X",
//   version: "1.0.0",
//   trigger: eventTrigger({
//     name: "tweet-x",
//     schema: z.object({
//       text: z.string(),
//     }),
//   }),
//   run: async (payload, io, ctx) => {
//     const { text } = payload;

//     // Wrap an SDK call in io.runTask so it's resumable and displays in logs
//     await io.runTask(
//       "Tweet X",
//       async () => {
//         try {
//           await twitterClient.tweets.createTweet({ text });
//         } catch (e) {
//           console.log(e);
//         }
//       },

//       // Add metadata to the task to improve the display in the logs
//       { name: "Tweet X", icon: "twitter" }
//     );
//   },
// });

// // These lines can be removed if you don't want to use express
// import { createExpressServer } from "@trigger.dev/express";
// createExpressServer(client);
