/**
 * GET /
 * Home page
 */
export const index = (req, res) => res.send('We see everything! Now why are you here?');

/**
 * GET /health
 * Health check
 */
export const healthCheck = (req, res) => res.json({ Bravo: "You are healthy! 'I abubeker shamil declare that you are super fine'",success: true });
