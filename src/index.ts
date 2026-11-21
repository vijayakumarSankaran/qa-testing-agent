
import {
    PromptManager,
    AgentContext
} from "./prompts/prompt-manager.js";

const promptManager = new PromptManager();

const context: AgentContext = {
    applicationName: "Banking Portal",
    moduleName: "Login",
    framework: "Playwright",
    language: "TypeScript"
};

const userRequirement = `
Test the login functionality.

Requirements:
- Users must enter a username.
- Users must enter a password.
- Valid credentials should open the dashboard.
- Invalid credentials should display an error message.

Generate positive and negative test cases.
`;

try {

    const messages = promptManager.buildMessages(
        userRequirement,
        context
    );

    console.log("\n===== AI QA AGENT PROMPTS =====\n");

    for (const message of messages) {

        console.log(`ROLE: ${message.role}`);

        console.log("------------------------------");

        console.log(message.content);

        console.log("\n");
    }

    console.log("Prompt construction completed.");

} catch (error) {

    console.error("Prompt construction failed:", error);

   // process.exitCode = 1;
}
