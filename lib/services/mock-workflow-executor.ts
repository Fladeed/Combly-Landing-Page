// Mock workflow execution service for demo purposes

import { Workflow, WorkflowElement, ExecutionStatus } from '../types/workflow';

export class MockWorkflowExecutor {
  private static executionCallbacks: Map<string, (status: ExecutionStatus) => void> = new Map();
  private static isExecuting = false;

  static onExecutionUpdate(callback: (status: ExecutionStatus) => void): string {
    const id = Date.now().toString();
    this.executionCallbacks.set(id, callback);
    return id;
  }

  static offExecutionUpdate(id: string) {
    this.executionCallbacks.delete(id);
  }

  private static notifyUpdate(status: ExecutionStatus) {
    this.executionCallbacks.forEach(callback => callback(status));
  }

  static async executeWorkflow(workflow: Workflow): Promise<boolean> {
    if (this.isExecuting) {
      return false;
    }

    this.isExecuting = true;
    const { elements, connections } = workflow;

    try {
      // Build execution order based on connections
      const executionOrder = this.determineExecutionOrder(elements, connections);

      // Execute each element in order
      for (const elementId of executionOrder) {
        const element = elements.find(e => e.id === elementId);
        if (!element) continue;

        // Notify running status
        this.notifyUpdate({
          elementId,
          status: 'running',
          message: `Executing ${element.name}...`,
          timestamp: Date.now()
        });

        // Simulate execution time
        await this.simulateElementExecution(element);

        // Notify success status
        this.notifyUpdate({
          elementId,
          status: 'success',
          message: `${element.name} completed`,
          timestamp: Date.now()
        });

        // Wait a bit before next element
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      return true;
    } catch (error) {
      console.error('Workflow execution error:', error);
      return false;
    } finally {
      this.isExecuting = false;
    }
  }

  private static determineExecutionOrder(
    elements: WorkflowElement[],
    connections: { sourceElementId: string; targetElementId: string }[]
  ): string[] {
    const order: string[] = [];
    const visited = new Set<string>();
    const visiting = new Set<string>();

    const visit = (elementId: string) => {
      if (visited.has(elementId)) return;
      if (visiting.has(elementId)) {
        throw new Error('Circular dependency detected');
      }

      visiting.add(elementId);

      // Find all elements that this element depends on
      const dependencies = connections
        .filter(c => c.targetElementId === elementId)
        .map(c => c.sourceElementId);

      // Visit dependencies first
      dependencies.forEach(depId => visit(depId));

      visiting.delete(elementId);
      visited.add(elementId);
      order.push(elementId);
    };

    // Start with input nodes (nodes with no incoming connections)
    const inputNodes = elements
      .filter(e => e.type === 'input')
      .map(e => e.id);

    inputNodes.forEach(id => visit(id));

    // Visit any remaining unvisited nodes
    elements.forEach(e => {
      if (!visited.has(e.id)) {
        visit(e.id);
      }
    });

    return order;
  }

  private static async simulateElementExecution(element: WorkflowElement): Promise<void> {
    // Simulate different execution times based on element type
    const executionTimes = {
      input: 800,
      prompt: 2000,
      output: 600,
      action: 1000,
      workflow: 1500
    };

    const delay = executionTimes[element.type] || 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  static stopExecution() {
    this.isExecuting = false;
  }

  static isCurrentlyExecuting(): boolean {
    return this.isExecuting;
  }
}
