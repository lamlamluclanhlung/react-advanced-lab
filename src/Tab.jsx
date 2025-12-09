// Tab.jsx – Compound Tabs component cho bài 3.1
import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

export function Tabs({ defaultIndex = 0, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const value = {
    activeIndex,
    setActiveIndex,
  };

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs.* components must be used inside <Tabs>");
  }
  return ctx;
}

function List({ children }) {
  return <div className="tabs-list">{children}</div>;
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const isActive = activeIndex === index;

  return (
    <button
      type="button"
      className={isActive ? "tab active" : "tab"}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

function Panel({ index, children }) {
  const { activeIndex } = useTabsContext();
  if (activeIndex !== index) return null;
  return <div className="tab-panel">{children}</div>;
}

// Gắn subcomponents
Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
