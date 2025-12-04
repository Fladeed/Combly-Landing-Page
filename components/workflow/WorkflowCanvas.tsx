"use client";

import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  Controls,
  Connection,
  useNodesState,
  useEdgesState,
  MarkerType,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Workflow, WorkflowElement, ExecutionStatus } from '@/lib/types/workflow';
import { MockWorkflowExecutor } from '@/lib/services/mock-workflow-executor';
import { FaPlay, FaStop, FaSave, FaDownload } from 'react-icons/fa';
import './WorkflowCanvas.css';

// Custom node components
const InputNodeComponent = ({ data }: { data: any }) => (
  <div className={`workflow-node input-node ${data.isExecuting ? 'executing' : ''} ${data.isSuccess ? 'success' : ''}`}>
    <div className="node-header">
      <span className="node-icon">📥</span>
      <span className="node-title">{data.label}</span>
    </div>
    <div className="node-content">
      {data.inputSelector?.description && (
        <div className="node-description">{data.inputSelector.description}</div>
      )}
    </div>
    {data.isExecuting && <div className="node-pulse"></div>}
  </div>
);

const ProcessNodeComponent = ({ data }: { data: any }) => (
  <div className={`workflow-node process-node ${data.isExecuting ? 'executing' : ''} ${data.isSuccess ? 'success' : ''}`}>
    <div className="node-header">
      <span className="node-icon">🤖</span>
      <span className="node-title">{data.label}</span>
    </div>
    <div className="node-content">
      <div className="node-description">AI Processing</div>
    </div>
    {data.isExecuting && <div className="node-pulse"></div>}
  </div>
);

const OutputNodeComponent = ({ data }: { data: any }) => (
  <div className={`workflow-node output-node ${data.isExecuting ? 'executing' : ''} ${data.isSuccess ? 'success' : ''}`}>
    <div className="node-header">
      <span className="node-icon">📤</span>
      <span className="node-title">{data.label}</span>
    </div>
    <div className="node-content">
      {data.outputConfig?.type && (
        <div className="node-badge">{data.outputConfig.type}</div>
      )}
    </div>
    {data.isExecuting && <div className="node-pulse"></div>}
  </div>
);

const nodeTypes: NodeTypes = {
  input: InputNodeComponent,
  prompt: ProcessNodeComponent,
  output: OutputNodeComponent,
};

interface WorkflowCanvasProps {
  workflow: Workflow;
  onWorkflowChange?: (workflow: Workflow) => void;
}

export default function WorkflowCanvas({ workflow, onWorkflowChange }: WorkflowCanvasProps) {
  const [executionStatuses, setExecutionStatuses] = useState<Map<string, ExecutionStatus>>(new Map());
  const [isExecuting, setIsExecuting] = useState(false);

  // Convert workflow elements to React Flow nodes
  const initialNodes: Node[] = workflow.elements.map((element) => ({
    id: element.id,
    type: element.type,
    position: element.position,
    data: {
      label: element.name,
      ...element,
      isExecuting: false,
      isSuccess: false,
    },
  }));

  // Convert workflow connections to React Flow edges
  const initialEdges: Edge[] = workflow.connections.map((conn, index) => ({
    id: `edge-${index}`,
    source: conn.sourceElementId,
    target: conn.targetElementId,
    type: 'smoothstep',
    animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--medical-blue))',
    },
    style: { stroke: 'hsl(var(--medical-blue))' },
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handle execution status updates
  useEffect(() => {
    const callbackId = MockWorkflowExecutor.onExecutionUpdate((status) => {
      setExecutionStatuses((prev) => new Map(prev).set(status.elementId, status));

      // Update node visual state
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === status.elementId) {
            return {
              ...node,
              data: {
                ...node.data,
                isExecuting: status.status === 'running',
                isSuccess: status.status === 'success',
              },
            };
          }
          return node;
        })
      );

      // Animate edges when execution flows through them
      if (status.status === 'running') {
        setEdges((eds) =>
          eds.map((edge) => {
            if (edge.source === status.elementId) {
              return { ...edge, animated: true };
            }
            return edge;
          })
        );
      }
    });

    return () => {
      MockWorkflowExecutor.offExecutionUpdate(callbackId);
    };
  }, [setNodes, setEdges]);

  // Handle edge connections
  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        ...params,
        type: 'smoothstep',
        animated: false,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'hsl(var(--medical-blue))',
        },
        style: { stroke: 'hsl(var(--medical-blue))' },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  // Execute workflow
  const handleExecute = async () => {
    if (isExecuting) {
      MockWorkflowExecutor.stopExecution();
      setIsExecuting(false);
      return;
    }

    // Reset all node states
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: { ...node.data, isExecuting: false, isSuccess: false },
      }))
    );
    setEdges((eds) => eds.map((edge) => ({ ...edge, animated: false })));
    setExecutionStatuses(new Map());

    setIsExecuting(true);
    await MockWorkflowExecutor.executeWorkflow(workflow);
    setIsExecuting(false);
  };

  return (
    <div className="workflow-canvas-container">
      <div className="workflow-toolbar">
        <div className="workflow-info">
          <h3>{workflow.name}</h3>
          <p>{workflow.description}</p>
        </div>
        <div className="workflow-actions">
          <button
            className={`workflow-btn ${isExecuting ? 'executing' : ''}`}
            onClick={handleExecute}
            title={isExecuting ? 'Stop execution' : 'Execute workflow'}
          >
            {isExecuting ? <FaStop /> : <FaPlay />}
            <span>{isExecuting ? 'Stop' : 'Execute'}</span>
          </button>
          <button className="workflow-btn" title="Save workflow">
            <FaSave />
            <span>Save</span>
          </button>
          <button className="workflow-btn" title="Export workflow">
            <FaDownload />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="workflow-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#aaa" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
