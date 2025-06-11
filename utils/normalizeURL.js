function normalizeURL(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = '';
    parsed.search = '';
    return parsed.toString();
  } catch (_) {
    return url;
  }
}

module.exports = { normalizeURL };
