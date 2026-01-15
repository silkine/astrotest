import { useState, useRef } from 'preact/hooks';

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);

  const renderCount = useRef(0);
  renderCount.current += 1;

  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  console.log(randomMessage());

  return (
    <>
      <p>Render count: {renderCount.current}</p>

      <h3>{greeting}! Danke für deinen Besuch!</h3>

      <button onClick={() => setGreeting(randomMessage())}>New greeting</button>
    </>
  );
}
