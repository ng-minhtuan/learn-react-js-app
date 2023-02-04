import React, { useReducer } from "react";

const styleDiv = {
	margin: '0 2%',
	marginBottom: '16px',
	border: '1px solid #c4c4c4',
	borderRadius: '4px',
	width: '96%',
	minHeight: '100px',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	alignItems: 'center',
	flexWrap: 'nowrap',
}

const styleInput = {
	width: '94.6%',
	margin: '16px 3.7%',
	borderRadius: '4px',
	height: '32px',
	padding: '0 12px'
}

const styleButton = {
	fontSize: '16px',
	color: '#fb7800',
	fontWeight: "600",
	height: '40px',
	width: '50%',
	margin: '0 2%',
	backgroundColor: "#fff",
	borderRadius: "4px",
	cursor: "pointer",
	display: 'flex',
	alignItems: 'center',
	placeContent: 'center',
	padding: "8px",
	border: "1px solid #fb7800"
}

const styleTasklist = {
	display: 'flex',
	flexDirection: 'row',
	alignContent: 'center',
	alignItems: 'center',
	flexWrap: 'nowrap',
	width: '100%',
	paddingLeft: '16px',
}

/**
 * Init State
 */
const initStateJobs = {
	job: '',
	listJobs: []
}

/**
 * Action
 */
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const REMOVE_JOB = 'remove_job';

/**
 * Reducer
 */
const reducerTodoApp = (state, action) => {
	return state;
}

/**
 * Dispatch
 */

export default function TodoAppUseReducer() {
	const [state, dispatchTodoApp] = useReducer(reducerTodoApp, initStateJobs);

	const {job, listJobs} = state;

	return (
		<div
			style={styleDiv}
		>
			<h4 style={{margin: '8px 0', padding: 0}}>TODO APP</h4>
			<div style={{ ...styleDiv, marginTop: 0, overflowX: 'hidden', height: '120px', overflowY: 'auto' }}>
				{
					listJobs.map((contentJob, ind)=>
								<div style={styleTasklist} key={ind}>
									<input
										type="checkbox"
										onChange={(e) => {}}
									/>
									<b
										style={
											{ textAlign: 'left', width: '90%' }
									}>
										{contentJob}
									</b>
								</div>
					)
				}
			</div>

			<input
				type="text"
				placeholder="Task...."
				value={job}
				onChange				
				style={styleInput}
			/>

			<div style={{ ...styleDiv, border: '', flexDirection: 'row', height: 'fit-content', minHeight: '' }}>
				<button
					style={styleButton}
					onClick
				>
					Add Task
				</button>
				<button
					style={{ ...styleButton, border: '1px solid green', color: 'green' }}
					onClick
				>
					Remove Task
				</button>
			</div>
		</div>
	)
}