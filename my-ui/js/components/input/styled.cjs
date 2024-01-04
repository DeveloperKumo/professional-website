module.exports = {
  ".input": {
    "borderRadius": "var(--ice-rounded-btn, 0.5rem)",
    "borderWidth": "1px",
    "borderColor": "rgba(var(--ice-base-content) / var(--tw-border-opacity))",
    "--tw-border-opacity": "0",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-100) / var(--tw-bg-opacity))",
    "fontSize": "1rem",
    "lineHeight": "1.5rem"
  },
  ".input input:focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ".input[list]::-webkit-calendar-picker-indicator": {
    "lineHeight": "1em"
  },
  ".input-bordered": {
    "--tw-border-opacity": "0.2"
  },
  ".input:focus,.input:focus-within": {
    "--tw-shadow": [
      "0 0 0 2px",
      "var(--tw-shadow-colored)"
    ],
    "--tw-shadow-colored": "0 0 0 2px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "--tw-shadow-color": "rgba(var(--ice-base-content) / 0.1)",
    "outlineWidth": "0px"
  },
  ".input-ghost": {
    "--tw-bg-opacity": "0.05"
  },
  ".input-ghost:focus,.input-ghost:focus-within": {
    "--tw-bg-opacity": "1",
    "--tw-text-opacity": "1",
    "color": "rgba(var(--ice-base-content) / var(--tw-text-opacity))",
    "boxShadow": "none"
  },
  ".input-primary": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-primary) / var(--tw-border-opacity))"
  },
  ".input-primary:focus,.input-primary:focus-within": {
    "--tw-shadow-color": "rgba(var(--ice-primary) / 0.1)",
    "--tw-shadow": "var(--tw-shadow-colored)"
  },
  ".input-success": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-success) / var(--tw-border-opacity))"
  },
  ".input-success:focus,.input-success:focus-within": {
    "--tw-shadow-color": "rgba(var(--ice-success) / 0.1)",
    "--tw-shadow": "var(--tw-shadow-colored)"
  },
  ".input-warning": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-warning) / var(--tw-border-opacity))"
  },
  ".input-warning:focus,.input-warning:focus-within": {
    "--tw-shadow-color": "rgba(var(--ice-warning) / 0.1)",
    "--tw-shadow": "var(--tw-shadow-colored)"
  },
  ".input-error": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-error) / var(--tw-border-opacity))"
  },
  ".input-error:focus,.input-error:focus-within": {
    "--tw-shadow-color": "rgba(var(--ice-error) / 0.1)",
    "--tw-shadow": "var(--tw-shadow-colored)"
  },
  ".input-neutral": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-neutral) / var(--tw-border-opacity))"
  },
  ".input-neutral:focus,.input-neutral:focus-within": {
    "--tw-shadow-color": "rgba(var(--ice-neutral) / 0.1)",
    "--tw-shadow": "var(--tw-shadow-colored)"
  },
  ".input-disabled,.input:disabled,.input[disabled]": {
    "cursor": "not-allowed",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(var(--ice-base-200) / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(var(--ice-base-200) / var(--tw-bg-opacity))",
    "--tw-text-opacity": "0.2"
  },
  ".input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder": {
    "color": "rgba(var(--ice-base-content) / var(--tw-placeholder-opacity))",
    "--tw-placeholder-opacity": "0.2"
  }
}