const operators = '+-*/^%'
const opRegex = '\\' + operators.split('').join('\\')
const validRegex = new RegExp(`^[\\d\(\)\.${opRegex}]+$`, 'g')

export function calculate(expression: string): number | undefined {
	expression = expression.replace(/\s+/g, '')
	if (!validRegex.test(expression)) return undefined
	expression = expression.replace(/\^/g, '**')

	let res: unknown

	try {
		res = eval(expression)
	} catch (e) {
		return undefined
	}

	return typeof res === 'number' ? res : undefined
}
