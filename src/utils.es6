var NO_SEARCH_IN_SCOPE = 'Contains search attribute, but the search function not found';
var INVALID_ARRAY = `Invalid array. Expect:
1) Strings
2) {id, text}
3) Look for properties: 'x-prop-id', 'x-prop-text'
`;
var warn_ = console.warn.bind(console, 'A:Typeahead');