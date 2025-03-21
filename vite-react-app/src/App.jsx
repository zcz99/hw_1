import './App.css';
import GetImages from './components/GetImages.jsx';
import CurrentYear from './components/Current Year.jsx';
import GetInfo from './components/GetInfo.jsx';

function App() {
	// декларативный стиль и как и весь JSX

	return (
		<>
			<GetImages />
			{/* <div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div> */}
			<GetInfo />
			{/* <h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
				<CurrentYear />
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}
			<CurrentYear />
		</>
	);
}

export default App;
