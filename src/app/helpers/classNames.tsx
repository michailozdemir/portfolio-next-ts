type Props = (string | string[])[];

const classNames = (...args: Props): string => {
  return args
    .filter(Boolean)
    .map((arg) =>
      Array.isArray(arg)
        ? classNames(...arg)
        : typeof arg === 'object' && arg !== null 
        ? Object.entries(arg)
            .filter(([key, value]) => value)
            .map(([key]) => key)
            .join(' ')
        : String(arg)
    )
    .filter(Boolean)
    .join(' ');
};

export default classNames;
