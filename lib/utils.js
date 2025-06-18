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
