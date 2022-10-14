import type { FC, ReactElement } from 'react'

import React from "react";
import { VscSymbolArray } from "react-icons/vsc";

import './section.scss'

type SectionProps = {}

export default function Section(props: SectionProps): ReactElement<any, any> | null {
	return (
		<section id={'1'} className="section-comp flex-col">
			<article>
				<h3>You are in the<code>{'<title-prop>'}</code>section!</h3>
				<i>{<VscSymbolArray />}</i>
			</article>
			<article>
				<p>this is the <code> {'<section-name-prop>'}</code>section</p>
			</article>
		</section>
	)
}