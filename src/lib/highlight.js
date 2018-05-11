import { h } from 'preact';

export function substringHighlight(text, substring) {
  return highlighted(text, findSubstringMatches(text, substring))
}

function findSubstringMatches(text, substring) {
  if (substring.length === 0 || text.length < substring.length) return []
  const matches = []
  let i = 0
  for (;;) {
    i = text.indexOf(substring, i)
    if (i === -1) return matches
    const end = i + substring.length
    matches.push([i, end - 1])
    i = end
  }
}

export function highlight (text, key, matches) {
  const matchesForKey = matches && matches.find((match) => match.key === key);
  return matchesForKey
    ? highlighted(text, matchesForKey.indices)
    : text;
}

function highlighted (text, indices) {
  const out = [];
  let unit = '';
  let pairIndex = 0;
  let pair = indices[pairIndex++];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (pair && i === pair[0]) {
      out.push(unit);
      unit = '';
    }
    unit += char;
    if (pair && i === pair[1]) {
      out.push(<span style='font-weight: bold'>{unit}</span>);
      unit = '';
      pair = indices[pairIndex++];
    }
  }
  if (unit !== '') out.push(unit);
  return out;
}
