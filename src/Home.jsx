import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Cart from './Cart';
import LargeList from './LargeList';
import { Tabs } from './Tab';
import Modal from './Modal';

const fakeItems = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

export default function Home() {
  const [userId, setUserId] = useState(1);
  const [theme, setTheme] = useState('light');
  const [sortKey] = useState('name');
  const [items, setItems] = useState(fakeItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDelete(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <h1>React Advanced Lab Demo</h1>

      <section>
        <h2>1. UserProfile (useReducer fetch machine)</h2>
        <button type="button" onClick={() => setUserId(1)}>User 1</button>
        <button type="button" onClick={() => setUserId(2)}>User 2</button>
        <UserProfile userId={userId} />
      </section>

      <hr />

      <section>
        <h2>2. Cart (Redux Toolkit)</h2>
        <Cart />
      </section>

      <hr />

      <section>
        <h2>3. Large List (useMemo, React.memo, useCallback)</h2>
        <button
          type="button"
          onClick={() =>
            setTheme((t) => (t === 'light' ? 'dark' : 'light'))
          }
        >
          Toggle theme
        </button>
        <LargeList items={items} sortKey={sortKey} onDelete={handleDelete} />
      </section>

      <hr />

      <section>
        <h2>4. Tabs (Compound Components)</h2>
        <Tabs defaultIndex={0}>
          <Tabs.List>
            <Tabs.Tab index={0}>React</Tabs.Tab>
            <Tabs.Tab index={1}>Redux</Tabs.Tab>
          </Tabs.List>

          <div style={{ margin: '8px 0' }}>--- Divider ---</div>

          <Tabs.Panel index={0}>React is a UI library...</Tabs.Panel>
          <Tabs.Panel index={1}>Redux is a state container...</Tabs.Panel>
        </Tabs>
      </section>

      <hr />

      <section>
        <h2>5. Modal (Portal)</h2>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3>Modal content</h3>
          <p>Đây là modal render qua Portal.</p>
        </Modal>
      </section>
    </div>
  );
}
