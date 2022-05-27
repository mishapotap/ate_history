import { css } from 'styled-components'

export default css`
  /****************************
 Generic Margins and Paddings
 ****************************/
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr {
    margin: 0;
    padding: 0;
  }

  /*******************
 Lists
 *******************/
  ul {
    list-style: none;
  }

  /*******************
 Forms and buttons
 *******************/
  input,
  textarea,
  select,
  button {
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
  }

  /* I usually expand input and textarea to full-width */
  input[type='text'],
  textarea {
    width: 100%;
  }

  /* More friendly border */
  input,
  textarea,
  button {
    border: 1px solid gray;
  }

  /* Some defaults for one-liner buttons */
  button {
    padding: 0.75em 1em;
    border-radius: 0;
    line-height: 1;
    background-color: transparent;
  }

  button * {
    pointer-events: none;
  }

  /***********************************
 Easy responsive for media elements
 ***********************************/
  img,
  svg,
  iframe,
  video,
  object,
  embed {
    display: block;
    max-width: 100%;
  }

  /*******************
 Useful table styles
 *******************/
  table {
    table-layout: fixed;
    width: 100%;
  }

  /*******************
 The hidden attribute
 *******************/
  [hidden] {
    display: none !important;
  }

  /*******************
 Noscript
 *******************/
  noscript {
    display: block;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  /*******************
 Tabindex
 *******************/
  [tabindex='-1'] {
    outline: none !important;
  }

  /*******************
 Modern Normalize IE 10-11 addons
 *******************/

  /**
 * Render the 'main' element consistently in IE.
 */

  main {
    display: block;
  }

  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

  hr {
    box-sizing: content-box; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
 * Remove the gray background on active links in IE 10.
 */

  a {
    background-color: transparent;
  }

  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
  }

  /**
 * Remove the border on images inside links in IE 10.
 */

  img {
    border-style: none;
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
  }

  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

  details {
    display: block;
  }

  /* Misc
   ========================================================================== */

  /**
 * Add the correct display in IE 10+.
 */

  template {
    display: none;
  }

  /**
 * Add the correct display in IE 10.
 */

  [hidden] {
    display: none;
  }
`
