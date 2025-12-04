"use client";

import React from 'react';
import BrowserWindow from './BrowserWindow';
import WorkflowCanvas from './WorkflowCanvas';
import { DEMO_WORKFLOW } from '@/lib/data/demo-workflow';
import { FiZap, FiLayers, FiPlayCircle } from 'react-icons/fi';

export default function WorkflowPreview() {
  return (
    <section id="workflow-preview" className="py-20 px-6 bg-gradient-to-b from-bg-secondary to-white dark:from-gray-900 dark:to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
            <FiLayers className="text-primary" />
            <span className="text-sm font-medium text-primary">Visual Workflow Builder</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Design Complex Workflows
            <span className="block text-primary mt-2">Without Writing Code</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create sophisticated automation workflows with our intuitive drag-and-drop builder.
            Connect inputs, AI processing, and outputs visually. See your workflow execute in real-time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-medical-green/10 dark:bg-medical-green/20 rounded-lg flex items-center justify-center mb-4">
              <FiPlayCircle className="w-6 h-6 text-medical-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Execution</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Watch your workflow execute step-by-step with real-time visual feedback and status updates.
            </p>
          </div>

          <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-medical-blue/10 dark:bg-medical-blue/20 rounded-lg flex items-center justify-center mb-4">
              <FiLayers className="w-6 h-6 text-medical-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Modular Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Build with reusable nodes: inputs, AI processing, outputs, actions, and nested workflows.
            </p>
          </div>

          <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <FiZap className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrate OpenAI, Anthropic, or Groq models directly into your workflow nodes.
            </p>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-8">
          <BrowserWindow initialUrl="https://workflow-builder.combly.app">
            <WorkflowCanvas workflow={DEMO_WORKFLOW} />
          </BrowserWindow>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-primary/5 to-medical-green/5 dark:from-primary/10 dark:to-medical-green/10 rounded-xl p-8 border border-primary/20 dark:border-primary/30">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FiPlayCircle className="text-primary" />
            Try the Demo
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-medical-blue">Interactive Features:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span><strong>Execute:</strong> Click the play button to simulate workflow execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span><strong>Drag nodes:</strong> Rearrange workflow elements by dragging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span><strong>Connect nodes:</strong> Drag from node handles to create connections</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-medical-green">Workflow Nodes:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-medical-green mt-0.5">📥</span>
                  <span><strong>Input:</strong> Extract data from webpage elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-medical-blue mt-0.5">🤖</span>
                  <span><strong>Process:</strong> AI-powered data analysis and transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">📤</span>
                  <span><strong>Output:</strong> Display results in popups, pages, or clipboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
