export const getIconType = tickDirection => {
  switch (tickDirection) {
    case 'MinusTick':
      return 'long-arrow-down';
    case 'ZeroMinusTick':
      return 'chevron-down';
    case 'ZeroPlusTick':
      return 'chevron-up';
    case 'PlusTick':
      return 'long-arrow-up';
    default:
      return 'spinner';
  }
}