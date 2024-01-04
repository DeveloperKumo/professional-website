module.exports = {
  ".table": {
    "position": "relative",
    "width": "100%"
  },
  ".table :where(.table-pin-rows thead tr)": {
    "position": "sticky",
    "top": "0px",
    "zIndex": 1,
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))"
  },
  ".table :where(.table-pin-rows tfoot tr)": {
    "position": "sticky",
    "bottom": "0px",
    "zIndex": 1,
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))"
  },
  ".table :where(.table-pin-cols tr th)": {
    "position": "sticky",
    "left": "0px",
    "right": "0px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))"
  },
  ".table-zebra tbody tr:nth-child(even) :where(.table-pin-cols tr th)": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))"
  }
}