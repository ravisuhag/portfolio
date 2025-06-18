/**
 * Format a date string into a human-readable format
 * @param {string} dateString - Date string in various formats
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = {}) {
	if (!dateString) return "";

	const {
		includeYear = true,
		includeDay = true,
		format = "short", // 'long', 'short', 'medium'
	} = options;

	try {
		const date = new Date(dateString);

		// Check if date is valid
		if (Number.isNaN(date.getTime())) {
			console.warn(`Invalid date format: ${dateString}`);
			return dateString; // Return original if can't parse
		}

		const formatOptions = {
			year: includeYear ? "numeric" : undefined,
			month: format === "short" ? "short" : "long",
			day: includeDay ? "numeric" : undefined,
		};

		// Remove undefined values
		Object.keys(formatOptions).forEach((key) => {
			if (formatOptions[key] === undefined) {
				delete formatOptions[key];
			}
		});

		return date.toLocaleDateString("en-US", formatOptions);
	} catch (error) {
		console.warn(`Error formatting date: ${dateString}`, error);
		return dateString;
	}
}

/**
 * Get relative time string (e.g., "2 years ago", "3 months ago")
 * @param {string} dateString - Date string
 * @returns {string} Relative time string
 */
export function getRelativeTime(dateString) {
	if (!dateString) return "";

	try {
		const date = new Date(dateString);
		const now = new Date();

		if (Number.isNaN(date.getTime())) {
			return "";
		}

		const diffInMs = now.getTime() - date.getTime();
		const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
		const diffInMonths = Math.floor(diffInDays / 30);
		const diffInYears = Math.floor(diffInDays / 365);

		if (diffInYears > 0) {
			return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
		} else if (diffInMonths > 0) {
			return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
		} else if (diffInDays > 0) {
			return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
		} else {
			return "Today";
		}
	} catch (error) {
		console.warn(`Error calculating relative time: ${dateString}`, error);
		return "";
	}
}

/**
 * Format reading time
 * @param {number} minutes - Reading time in minutes
 * @returns {string} Formatted reading time string
 */
export function formatReadingTime(minutes) {
	if (!minutes || minutes < 1) return "";

	if (minutes === 1) {
		return "1 min read";
	}

	return `${minutes} min read`;
}

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
	if (!str) return "";

	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 160) {
	if (!text || text.length <= maxLength) return text;

	return `${text.substring(0, maxLength - 3)}...`;
}

/**
 * Generate excerpt from content
 * @param {string} content - Full content
 * @param {number} maxLength - Maximum length for excerpt
 * @returns {string} Generated excerpt
 */
export function generateExcerpt(content, maxLength = 160) {
	if (!content) return "";

	// Remove markdown syntax
	const cleanContent = content
		.replace(/^---[\s\S]*?---/, "") // Remove frontmatter
		.replace(/^#+\s+/gm, "") // Remove headings
		.replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
		.replace(/\*(.*?)\*/g, "$1") // Remove italic
		.replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links, keep text
		.replace(/!\[.*?\]\(.*?\)/g, "") // Remove images
		.replace(/```[\s\S]*?```/g, "") // Remove code blocks
		.replace(/`([^`]+)`/g, "$1") // Remove inline code
		.replace(/\n+/g, " ") // Replace newlines with spaces
		.trim();

	return truncateText(cleanContent, maxLength);
}
