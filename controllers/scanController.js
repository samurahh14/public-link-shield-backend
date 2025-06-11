const { analyzeLink } = require('../services/phishingChecker');
const { isValidURL } = require('../utils/validateURL');
const { normalizeURL } = require('../utils/normalizeURL');
const { formatScanResult } = require('../utils/formatResponse');

exports.scanLink = async (req, res) => {
  const { url } = req.body;

  if (!url || !isValidURL(url)) {
    return res.status(400).json(formatScanResult('Invalid', 'Please enter a valid link.'));
  }

  const cleanURL = normalizeURL(url);

  try {
    const result = await analyzeLink(cleanURL);
    return res.json(result);
  } catch (error) {
    console.error('Scan error:', error);
    return res.status(500).json(formatScanResult('Error', 'Failed to scan link.'));
  }
};
