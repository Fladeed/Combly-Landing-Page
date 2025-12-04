"use client";

import React, { useState } from 'react';
import { FiChrome, FiMaximize2, FiMinus, FiX } from 'react-icons/fi';
import './BrowserWindow.css';

interface BrowserTab {
  id: string;
  title: string;
  url: string;
  active: boolean;
}

interface BrowserWindowProps {
  children: React.ReactNode;
  initialUrl?: string;
  tabs?: BrowserTab[];
}

export default function BrowserWindow({ 
  children, 
  initialUrl = 'https://medical-portal.example.com',
  tabs: initialTabs 
}: BrowserWindowProps) {
  const [tabs, setTabs] = useState<BrowserTab[]>(
    initialTabs || [
      { id: '1', title: 'Patient Data Analysis', url: initialUrl, active: true }
    ]
  );

  const activeTab = tabs.find(tab => tab.active);

  return (
    <div className="browser-window">
      {/* Browser Chrome */}
      <div className="browser-chrome">
        <div className="browser-controls">
          <div className="browser-dot red"></div>
          <div className="browser-dot yellow"></div>
          <div className="browser-dot green"></div>
        </div>
        <div className="browser-tabs">
          {tabs.map(tab => (
            <div 
              key={tab.id} 
              className={`browser-tab ${tab.active ? 'active' : ''}`}
            >
              <FiChrome className="tab-icon" />
              <span className="tab-title">{tab.title}</span>
              <FiX className="tab-close" />
            </div>
          ))}
        </div>
        <div className="browser-window-controls">
          <FiMinus className="window-control" />
          <FiMaximize2 className="window-control" />
          <FiX className="window-control" />
        </div>
      </div>

      {/* Address Bar */}
      <div className="browser-addressbar">
        <div className="address-input">
          <svg className="lock-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 7H11V5C11 3.34 9.66 2 8 2C6.34 2 5 3.34 5 5V7H4C3.45 7 3 7.45 3 8V13C3 13.55 3.45 14 4 14H12C12.55 14 13 13.55 13 13V8C13 7.45 12.55 7 12 7ZM8 11C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10C9 10.55 8.55 11 8 11ZM9.1 7H6.9V5C6.9 4.29 7.29 3.9 8 3.9C8.71 3.9 9.1 4.29 9.1 5V7Z" fill="currentColor"/>
          </svg>
          <span className="address-url">{activeTab?.url}</span>
        </div>
      </div>

      {/* Browser Content */}
      <div className="browser-content">
        {children}
      </div>
    </div>
  );
}
