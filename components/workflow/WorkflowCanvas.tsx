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
import { FaPlay, FaStop, FaSave, FaDownload, FaUndo, FaRedo, FaEdit, FaCopy, FaFileImport, FaFileExport } from 'react-icons/fa';
import { FiDownload, FiSettings, FiGitBranch, FiPlusSquare, FiMessageSquare } from 'react-icons/fi';
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
        {/* Create Nodes Group */}
        <div className="toolbar-button-group node-creation-group">
          <div className="group-title">CREATE NODES</div>
          <div className="group-buttons">
            <button className="toolbar-btn" title="Add Input Node">
              <FiDownload size={12} />
              <span>Input</span>
              <span className="shortcut-badge">1</span>
            </button>
            <button className="toolbar-btn" title="Add Process Node">
              <FiSettings size={12} />
              <span>Process</span>
              <span className="shortcut-badge">2</span>
            </button>
            <button className="toolbar-btn" title="Add Output Node">
              <FiMessageSquare size={12} />
              <span>Output</span>
              <span className="shortcut-badge">3</span>
            </button>
            <button className="toolbar-btn" title="Add Action Node">
              <FiGitBranch size={12} />
              <span>Action</span>
              <span className="shortcut-badge">4</span>
            </button>
            <button className="toolbar-btn" title="Add Workflow Node">
              <FiPlusSquare size={12} />
              <span>Workflow</span>
              <span className="shortcut-badge">5</span>
            </button>
          </div>
        </div>

        {/* Edit Nodes Group */}
        <div className="toolbar-button-group node-editing-group">
          <div className="group-title">EDIT NODES</div>
          <div className="group-buttons">
            <button className="toolbar-btn" title="Undo">
              <FaUndo size={12} />
              <span>Undo</span>
              <span className="shortcut-badge">Z</span>
            </button>
            <button className="toolbar-btn" title="Redo">
              <FaRedo size={12} />
              <span>Redo</span>
              <span className="shortcut-badge">Y</span>
            </button>
            <button className="toolbar-btn" title="Edit">
              <FaEdit size={12} />
              <span>Edit</span>
              <span className="shortcut-badge">E</span>
            </button>
            <button className="toolbar-btn" title="Duplicate">
              <FaCopy size={12} />
              <span>Duplicate</span>
              <span className="shortcut-badge">D</span>
            </button>
          </div>
        </div>

        {/* Workflow Actions Group */}
        <div className="toolbar-button-group workflow-actions-group">
          <div className="group-title">WORKFLOW ACTIONS</div>
          <div className="group-buttons">
            <button className="toolbar-btn" title="Import Workflow">
              <FaFileImport size={12} />
              <span>Import</span>
              <span className="shortcut-badge">I</span>
            </button>
            <button className="toolbar-btn" title="Export Workflow">
              <FaFileExport size={12} />
              <span>Export</span>
              <span className="shortcut-badge">E</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="toolbar-divider"></div>

        {/* Execute Button */}
        <button
          className={`execute-btn ${isExecuting ? 'executing' : ''}`}
          onClick={handleExecute}
          title={isExecuting ? 'Stop execution' : 'Execute workflow'}
        >
          {isExecuting ? <FaStop size={14} /> : <FaPlay size={14} />}
          <span>{isExecuting ? 'Stop' : 'Execute'}</span>
        </button>
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
