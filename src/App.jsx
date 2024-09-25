import React from "react";
import { Suspense, lazy } from "react";
import Loading from "./Loading.jsx";
const Component1 = lazy(() => import(
	'../src/Component1'))
const Component2 = lazy(() => import(
	'../src/Component2'))
function App() {
	return (
		<>
			<h1> Lazy Load</h1>
			<Suspense fallback=
{<Loading/>}>
				<Component1 />
			</Suspense>
			<Suspense fallback=
{<div>Component2 are loading please wait...</div>}>
				<Component2 />
			</Suspense>
		</>
	);
}

export default App;

