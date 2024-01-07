type ComboOptionsProps = {
  children: React.ReactNode;
  flag?: string;
  value: string;
};

type ComboboxProps = {
  setValue: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

export type { ComboOptionsProps, ComboboxProps };
