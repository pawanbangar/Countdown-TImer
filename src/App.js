function App() {
  return (
    <div>
      <h3 className="text-center text-xl mb-5 mt-5">
        Count Down Timer
      </h3>
      <div className='flex gap-x-5 justify-center'>
        <div className="flex-initial">Hours <br/>
        <input type="number" min={0} max={60} maxLength={2} className="form-input" />
        </div>
        <div className="flex-initial">Minutes<br/>
        <input type="number" min={0} max={59} maxLength={2} className="form-input" />
        </div>
        <div className="flex-initial">Seconds<br/>
        <input type="number" min={0} max={59} maxLength={2} className="form-input" />
        </div>
       
      </div>
      <div className="flex justify-center gap-x-8 mt-4">
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Reset

        </button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start</button>
        </div>
    </div>
  );
}

export default App;
