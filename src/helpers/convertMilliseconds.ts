export const millisecondsToDate = (number : number): string => {
  const date = new Date(number * 1000);
  return date.toLocaleDateString('en-GB');
};

export const millisecondsToHours = (number : number): string => {
  const date = new Date(number * 1000);
  return date.getHours().toString();
};

export const getDayOfWeek = (number: number): string => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short'}).format(number * 1000);
};
