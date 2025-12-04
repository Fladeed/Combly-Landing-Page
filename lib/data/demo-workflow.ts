// Demo workflow data

import { Workflow } from '../types/workflow';

export const DEMO_WORKFLOW: Workflow = {
  name: "Patient Data Analysis",
  description: "Extract patient information, analyze with AI, and display results",
  version: "1.0.0",
  elements: [
    {
      id: "input-1",
      name: "Patient Info",
      type: "input",
      position: { x: 100, y: 200 },
      inputSelector: {
        selector: "#patient-data",
        xpath: "//textarea[@id='patient-data']",
        tagName: "TEXTAREA",
        id: "patient-data",
        description: "Patient information textarea"
      }
    },
    {
      id: "process-1",
      name: "Medical Analysis",
      type: "prompt",
      position: { x: 400, y: 150 },
      promptConfig: {
        systemPrompt: "You are a medical AI assistant. Analyze patient data professionally.",
        userPrompt: "Analyze the patient information and provide: 1) Summary, 2) Risk factors, 3) Recommendations"
      }
    },
    {
      id: "process-2",
      name: "Generate Report",
      type: "prompt",
      position: { x: 400, y: 280 },
      promptConfig: {
        userPrompt: "Create a concise medical report summary"
      }
    },
    {
      id: "output-1",
      name: "Analysis Result",
      type: "output",
      position: { x: 700, y: 120 },
      outputConfig: {
        type: "popup",
        clearBeforeWrite: false
      }
    },
    {
      id: "output-2",
      name: "Full Report",
      type: "output",
      position: { x: 700, y: 240 },
      outputConfig: {
        type: "page",
        clearBeforeWrite: true
      }
    },
    {
      id: "output-3",
      name: "Save to Clipboard",
      type: "output",
      position: { x: 700, y: 360 },
      outputConfig: {
        type: "clipboard"
      }
    }
  ],
  connections: [
    {
      sourceElementId: "input-1",
      targetElementId: "process-1",
      connectionType: "direct"
    },
    {
      sourceElementId: "input-1",
      targetElementId: "process-2",
      connectionType: "direct"
    },
    {
      sourceElementId: "process-1",
      targetElementId: "output-1",
      connectionType: "direct"
    },
    {
      sourceElementId: "process-2",
      targetElementId: "output-2",
      connectionType: "direct"
    },
    {
      sourceElementId: "process-2",
      targetElementId: "output-3",
      connectionType: "direct"
    }
  ],
  metadata: {
    author: "Combly Demo",
    tags: ["medical", "demo", "analysis"],
    category: "Healthcare",
    documentation: "Demo workflow showing medical data analysis pipeline"
  }
};
