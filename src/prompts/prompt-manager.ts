
import { QA_SYSTEM_PROMPT } from "./qa-system-prompt.js";

export interface AgentContext {
    applicationName: string;
    moduleName: string;
    framework: string;
    language: string;
}

export interface ChatMessage {
    role: "system" | "user";
    content: string;
}

export class PromptManager {

    buildMessages(
        userRequirement: string,
        context: AgentContext
    ): ChatMessage[] {

        if (!userRequirement.trim()) {
            throw new Error(
                "User requirement cannot be empty"
            );
        }

        const contextPrompt = `
APPLICATION CONTEXT:

Application: ${context.applicationName}
Module: ${context.moduleName}
Automation Framework: ${context.framework}
Programming Language: ${context.language}

USER REQUIREMENT:

${userRequirement}

TASK:

Analyze the requirement and generate:
1. Positive test scenarios.
2. Negative test scenarios.
3. Boundary test scenarios.
4. Test cases.
5. Automation recommendations.

If information is missing, identify it
instead of inventing application behaviour.
`;

        return [
            {
                role: "system",
                content: QA_SYSTEM_PROMPT
            },
            {
                role: "user",
                content: contextPrompt
            }
        ];
    }
}
