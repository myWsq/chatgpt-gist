const colorNames = [
  "background",
  "foreground",
  "code",
  "border",
  "selection",
  "alert",
  "purple",
  "magenta",
  "success",
  "success-lighter",
  "success-light",
  "success-dark",
  "violet",
  "violet-lighter",
  "violet-light",
  "violet-dark",
  "cyan",
  "cyan-lighter",
  "cyan-light",
  "cyan-dark",
  "warning",
  "warning-lighter",
  "warning-light",
  "warning-dark",
  "error",
  "error-lighter",
  "error-light",
  "error-dark",
  "accent-1",
  "accent-2",
  "accent-3",
  "accent-4",
  "accent-5",
  "accent-6",
  "accent-7",
  "accent-8",
  "link",
];

module.exports = () => {
  const colors = {};
  colorNames.forEach((name) => {
    colors["geist" + "-" + name] = `var(--geist-${name})`;
  });
  return colors;
};
