module.exports = {
  ".tooltip": {
    "position": "relative",
    "display": "inline-block",
    "--ice-tooltip-offset": "calc(100% + 1px + var(--tooltip-tail, 0px))"
  },
  ".tooltip:before": {
    "position": "absolute",
    "pointerEvents": "none",
    "zIndex": 1,
    "content": "var(--tw-content)",
    "--tw-content": "attr(data-tip)"
  },
  ".tooltip:before,.tooltip-top:before": {
    "transform": "translateX(-50%)",
    "top": "auto",
    "left": "50%",
    "right": "auto",
    "bottom": "var(--ice-tooltip-offset)"
  },
  ".tooltip-bottom:before": {
    "transform": "translateX(-50%)",
    "top": "var(--ice-tooltip-offset)",
    "left": "50%",
    "right": "auto",
    "bottom": "auto"
  },
  ".tooltip-left:before": {
    "transform": "translateY(-50%)",
    "top": "50%",
    "left": "auto",
    "right": "var(--ice-tooltip-offset)",
    "bottom": "auto"
  },
  ".tooltip-right:before": {
    "transform": "translateY(-50%)",
    "top": "50%",
    "left": "var(--ice-tooltip-offset)",
    "right": "auto",
    "bottom": "auto"
  }
}