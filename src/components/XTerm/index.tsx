import { useState } from 'react';

import {
	XTerm
	XTHeader,
	XTShell,
	XTBtns,
	ClsBtn,
	MaxBtn,
	MinBtn,
	XTScreen,
	XTSpan,
	Shebang,
} from './XTerm';
import { Main } from '../global/index';
import { XTShell, XTerminal, XTHeader } from './XTerm';

type XTermCols = 120 | 100 | 80 | 60 | 40 | 0;
type XTermRows = 100 | 90 | 80 | 70 | 60 | 50 | 40;
type XTermArea = (cols: XTermCols, rows: XTermRows) => number;

interface XTermSize {
	readonly cols?: XTermCols;
	readonly rows?: XTermRows;
	readonly area?: XTermArea;
}

type XTermProps = XTermSize;

export default function XTerm({ cols = 80, rows = 100, area }: XTermProps) {
	console.log(area, cols, rows);
	return (
		<Main>
			<XTerminal>
				<XTHeader>
					<XTBtns id="xterm-btns">
						<ClsBtn
							id="xterm-close"
							type="reset"
							onClick={(evt) =>
								console.info('xterm-close clicked', evt.target)
							}>
							{'[X]'}
						</ClsBtn>
						<MaxBtn
							id="xterm-maxmz"
							type="button"
							onClick={(evt) =>
								console.info('xterm-maxmz clicked', evt.target)
							}>
							{'[O]'}
						</MaxBtn>
						<MinBtn
							id="xterm-minmz"
							type="button"
							onClick={(evt) =>
								console.info('xterm-minmz clicked', evt.target)
							}>
							{'[_]'}
						</MinBtn>
					</XTBtns>
					<span>
						<code>Area: {area?.toString()} </code>
					</span>
				</XTHeader>
				<XTShell>
					<XTSpan>
						<Shebang />
					</XTSpan>
					<XTScreen
						name="xterm-txt"
						id="xterm-txt"
						cols={cols}
						rows={rows}
						autoCapitalize="off"
						autoCorrect="off"
						spellCheck={false}
						onSubmitCapture={(evt) =>
							console.info('xterm-txt submit capture', evt.target)
						}
						onChange={(evt) => console.info('xterm-txt changed', evt.target)}
					/>
				</XTShell>
			</XTerminal>
		</Main>
	);
}

{
	/* <span
className="xterm-row"
id="row-1">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
id="row-2">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
id="row-3">
<code>{'>'}</code>
</span>
<span
className="xterm-row"
				id="row-4">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-5">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-6">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-7">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-8">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-9">
				<code>{'>'}</code>
				</span>
				<span
				className="xterm-row"
				id="row-9">
			<code>{'>'}</code> */
}
{
	/* </span> */
}

{
	/* <section id="xterm-shell">
				<span id="xterm-shebang">
					<code>#!/usr/bin/env bash</code>
				</span>
				<span id="prompt">
					<code>
						{'<<<[visitor@https://bleek.dev:]>>> press Y to continue'}
					</code>
				</span> */
}
