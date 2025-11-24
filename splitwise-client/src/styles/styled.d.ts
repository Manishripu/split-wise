import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
      error: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    radius: string;
  }
}
