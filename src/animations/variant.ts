export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5 } },
};

export const moveAndScale = {
  hidden: { x: 0, scale: 1 },
  visible: { x: 100, scale: 1.2, transition: { type: "spring", stiffness: 100 } },
};

export const entryAnim = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
