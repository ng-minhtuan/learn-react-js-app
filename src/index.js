import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ElementTypes } from './excercise-react-element-types/App';
import ExerciseProps from './exercise-props/App';
import ExerciseDomEvents from './exercise-dom-events/App';
import HookUseState from './exercise-hook-useState/App';
import BaiTapUseState from './bai-tap-hook-useState/App';
import ExerciseTwoWayBinding from './exercise-two-way-binding/App';
import ExerciseTodoListWithUseState from './exerciese-to-do-list-with-useState/App';
import ExerciseMountedAndUnmounted from './exercise-mounted-and-unmounted/App';
import ExerciseUseEffectHook from './exercise-hook-useEffect/App';
import ExerciseUseLayoutEffect from './exercise-hook-useLayoutEffect/App';
import ExerciseUseRef from './exercise-hook-useRef/App';
import ExerciseReactMemoHOC from './exercise-react-memo/App';

/* ------------------ Bài : React Element types------------------ */
const rootExerciseElementTypes = ReactDOM.createRoot(document.getElementById('exercise-element-types'));
rootExerciseElementTypes.render(
<React.StrictMode>
    <ElementTypes />
</React.StrictMode>
);

/* ------------------ Bài : React Props ------------------------- */
const rootExerciseProps=ReactDOM.createRoot(document.getElementById('exercise-props'));
rootExerciseProps.render(
<React.StrictMode>
    <ExerciseProps />
</React.StrictMode>
)

const rootExerciseDomEvents=ReactDOM.createRoot(document.getElementById('exercise-dom-events'));
rootExerciseDomEvents.render(
<React.StrictMode>
    <ExerciseDomEvents />
</React.StrictMode>
)

const rootExerciseHookUseState=ReactDOM.createRoot(document.getElementById('exercise-hook-use-state'));
rootExerciseHookUseState.render(
    <React.StrictMode>
        <HookUseState/>
    </React.StrictMode>
)

const rootBaiTapUseState=ReactDOM.createRoot(document.getElementById('bai-tap-hook-use-state'));
rootBaiTapUseState.render(
    <React.StrictMode>
        <BaiTapUseState/>
    </React.StrictMode>
)

const rootExerciseTwoWayBinding=ReactDOM.createRoot(document.getElementById('exercise-two-way-binding'));
rootExerciseTwoWayBinding.render(
    <React.StrictMode>
        <ExerciseTwoWayBinding/>
    </React.StrictMode>
)

const rootExerciseTodoListWithUseState=ReactDOM.createRoot(document.getElementById('exercise-to-do-list-with-use-state'));
rootExerciseTodoListWithUseState.render(
    <React.StrictMode>
        <ExerciseTodoListWithUseState/>
    </React.StrictMode>
)

const rootExerciseMountedAndUnmounted=ReactDOM.createRoot(document.getElementById('exercise-mounted-and-unmounted'));
rootExerciseMountedAndUnmounted.render(
    <React.StrictMode>
        <ExerciseMountedAndUnmounted/>
    </React.StrictMode>
)

const rootExerciseUseEffectHook=ReactDOM.createRoot(document.getElementById('exercise-use-effect-hook'));
rootExerciseUseEffectHook.render(
    <React.StrictMode>
        <ExerciseUseEffectHook/>
    </React.StrictMode>
)

// Function cho bài useEffect with Fake Chat App
const emitComment = (id) => {
	setInterval(()=>{
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`,{
				detail: `Đây là comment của lesson-${id}`
			})
		);
	}, 9000)
}
emitComment(1)
emitComment(2)
emitComment(3)
// End

const rootExerciseUseLayoutEffectHook=ReactDOM.createRoot(document.getElementById('exercise-use-layout-effect-hook'));
rootExerciseUseLayoutEffectHook.render(
    <React.StrictMode>
        <ExerciseUseLayoutEffect/>
    </React.StrictMode>
)

const rootExerciseUseRefHook=ReactDOM.createRoot(document.getElementById('exercise-use-ref-hook'));
rootExerciseUseRefHook.render(
    <React.StrictMode>
        <ExerciseUseRef/>
    </React.StrictMode>
)

const rootExerciseReactMemo=ReactDOM.createRoot(document.getElementById('exercise-react-memo'));
rootExerciseReactMemo.render(
    <React.StrictMode>
        <ExerciseReactMemoHOC/>
    </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
