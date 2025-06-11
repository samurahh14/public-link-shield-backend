const axios = require('axios');
const { formatScanResult } = require('../utils/formatResponse');

exports.analyzeLink = async (url) => {
  const encoded = Buffer.from(url).toString('base64').replace(/=+$/, '');
  const headers = { 'x-apikey': process.env.VIRUSTOTAL_API_KEY };

  const scanURL = `https://www.virustotal.com/api/v3/urls/${encoded}`;
  const response = await axios.get(scanURL, { headers });

  const malicious = response.data.data.attributes.last_analysis_stats.malicious;

  return malicious > 0
    ? formatScanResult('Dangerous', 'This link is flagged as malicious.', 'VirusTotal')
    : formatScanResult('Safe', 'This link appears safe.', 'VirusTotal');
};
