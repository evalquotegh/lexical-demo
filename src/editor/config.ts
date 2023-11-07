import { ThemeProps, theme } from "./theme";
import { ErrorProps, onError } from "./utils/onError";

export type ConfigProps = {
  namespace: string;
  theme: ThemeProps;
  onError: (error: ErrorProps) => void;
};

export const config: ConfigProps = {
  namespace: "MyEditor",
  theme,
  onError,
};
