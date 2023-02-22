import { spawn } from 'child_process'

import { calculate } from './calculator'

interface Data {
	method?: string
	parameters: unknown[]
}

const { method, parameters } = JSON.parse(process.argv[2] as string) as Data
const param = parameters[0]

if (method === 'query' && typeof param === 'string') {
	const res = calculate(param)

	if (typeof res === 'number') {
		const formattedRes = res.toLocaleString(undefined, {
			maximumFractionDigits: 10,
		})

		const result = {
			Title: formattedRes,
			Subtitle: 'Copy this number to the clipboard',
			JsonRPCAction: {
				method: 'copy',
				parameters: [res],
			},
			IcoPath: 'Images\\calculator.png',
			score: 100,
		}

		console.log(JSON.stringify({ result: [result] }))
	} else {
		console.log('{}')
	}
}

if (method === 'copy' && typeof param === 'number') {
	spawn('clip').stdin.end(String(param))
}
