function formatScanResult(status, message, source = 'Internal') {
  return {
    status,
    message,
    checkedBy: source,
    checkedAt: new Date().toISOString(),
  };
}

module.exports = { formatScanResult };
