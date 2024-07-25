/**
 * Divides text into paragraphs and converts parentheses content to span tags.
 *
 * @param text - The input text to process.
 * @param targetLength - The approximate desired length of each paragraph. Defaults to 350.
 * @returns An array of processed paragraph strings.
 */
export function processText(
	text: string,
	targetLength: number = 350
): string[] {
	const paragraphs = divideTextIntoParagraphs(text, targetLength)
	return paragraphs.map(convertParenthesesToSpans)
}

/**
 * Converts text within parentheses to span tags with a specific class.
 * Only converts properly closed parentheses.
 *
 * @param text - The input text to process.
 * @returns The processed text with span tags replacing parentheses content.
 */
export function convertParenthesesToSpans(text: string): string {
	const regex = /\(([^()]+)\)/g

	return text.replace(regex, (match, content) => {
		return `<span class="text-gray-400">(${content})</span>`
	})
}

/**
 * Divides a large text into paragraphs of approximately the specified length,
 * ensuring that splits occur at the next period after the target length.
 *
 * @param text - The input text to be divided into paragraphs.
 * @param targetLength - The approximate desired length of each paragraph. Defaults to 350.
 * @returns An array of strings, where each string is a paragraph.
 */
export function divideTextIntoParagraphs(
	text: string,
	targetLength: number = 350
): string[] {
	const paragraphs: string[] = []
	let startIndex: number = 0

	while (startIndex < text.length) {
		let endIndex: number = startIndex + targetLength

		// If we're not at the end of the text, look for the next period
		if (endIndex < text.length) {
			const nextPeriod: number = text.indexOf(".", endIndex)
			if (nextPeriod !== -1) {
				endIndex = nextPeriod + 1 // Include the period in this paragraph
			} else {
				// If no period is found, just use the end of the text
				endIndex = text.length
			}
		} else {
			endIndex = text.length
		}

		// Extract the paragraph and trim any leading/trailing whitespace
		const paragraph: string = text.slice(startIndex, endIndex).trim()
		if (paragraph) {
			paragraphs.push(paragraph)
		}

		startIndex = endIndex
	}

	return paragraphs
}
