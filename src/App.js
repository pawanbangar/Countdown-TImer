function App() {
  return (
    <div>
      <header>
        Count Down Timer
      </header>
      <div className='flex gap-x-1 justify-center'>
        <div className="flex-initial">Hours</div>
        <div className="flex-initial">Minutes</div>
        <div className="flex-initial">Seconds</div>
      </div>
      <div className='flex gap-x-1 justify-center'>
        <input min={0} max={60} maxLength={2} className="flex-initial">Hours</input>
        <input type="number" min={0} max={59} maxLength={2} className="flex-initial">Minutes</input>
        <input min={0} max={59} maxLength={2} className="flex-initial">Seconds</input>
      </div>
    </div>
  );
}

export default App;
