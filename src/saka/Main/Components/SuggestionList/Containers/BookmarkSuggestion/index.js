import { h } from 'preact';
import Suggestion from '../../Components/Suggestion';
import { substringHighlight } from 'lib/highlight';

export default ({
  suggestion: { type, title, url, prettyURL },
  searchText,
  selected,
  index,
  onClick
}) =>
  <Suggestion
    type={'bookmark'}
    title={substringHighlight(title, searchText)}
    titleColor={'#000000'}
    secondary={substringHighlight(prettyURL, searchText)}
    secondaryColor={'rgba(63, 81, 245, 1.0)'}
    url={url}
    icon={'star_border'}
    selected={selected}
    index={index}
    onClick={onClick}
  />;
