import React, { useState } from "react";

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, setActiveTab })
  );
};

export const TabsList = ({ children }) => <div className="flex gap-2">{children}</div>;

export const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-3 py-1 rounded ${
      activeTab === value ? "bg-blue-500 text-white" : "bg-gray-200"
    }`}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value, activeTab }) =>
  activeTab === value ? <div className="mt-4">{children}</div> : null;
