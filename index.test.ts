import { InducedAi } from "./index";

describe("induced-ai-typescript-sdk", () => {
    it("initialize client", async () => {
        const inducedai = new InducedAi({
            apiKey: "API_KEY",
        });
    });
});
