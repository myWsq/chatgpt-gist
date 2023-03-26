import { useTheme } from "@geist-ui/core";
import Head from "next/head";
import hexRgb from 'hex-rgb'

function hexToRgb(hex: string) {
  const { red, green, blue } = hexRgb(hex);
  return `${red} ${green} ${blue}`;
}

export const PaletteInject: React.FunctionComponent = () => {
  const { palette } = useTheme();

  const styleHtml = `
    :root {
      --geist-background: ${hexToRgb(palette.background)};
      --geist-foreground: ${hexToRgb(palette.foreground)};

      --geist-code: ${hexToRgb(palette.code)};
      --geist-border: ${hexToRgb(palette.border)};
    
      --geist-selection: ${hexToRgb(palette.selection)};
      --geist-alert: ${hexToRgb(palette.alert)};
      --geist-purple: ${hexToRgb(palette.purple)};
      --geist-magenta: ${hexToRgb(palette.magenta)};
      
      --geist-success: ${hexToRgb(palette.success)};
      --geist-success-lighter: ${hexToRgb(palette.successLighter)};
      --geist-success-light: ${hexToRgb(palette.successLight)};
      --geist-success-dark: ${hexToRgb(palette.successDark)};
    
      --geist-violet: ${hexToRgb(palette.violet)};
      --geist-violet-lighter: ${hexToRgb(palette.violetLighter)};
      --geist-violet-light: ${hexToRgb(palette.violetLight)};
      --geist-violet-dark: ${hexToRgb(palette.violetDark)};
    
      --geist-cyan: ${hexToRgb(palette.cyan)};
      --geist-cyan-lighter: ${hexToRgb(palette.cyanLighter)};
      --geist-cyan-light: ${hexToRgb(palette.cyanLight)};
      --geist-cyan-dark: ${hexToRgb(palette.cyanDark)};
    
      --geist-warning: ${hexToRgb(palette.warning)};
      --geist-warning-lighter: ${hexToRgb(palette.warningLighter)};
      --geist-warning-light: ${hexToRgb(palette.warningLight)};
      --geist-warning-dark: ${hexToRgb(palette.warningDark)};
    
      --geist-error: ${hexToRgb(palette.error)};
      --geist-error-lighter: ${hexToRgb(palette.errorLighter)};
      --geist-error-light: ${hexToRgb(palette.errorLight)};
      --geist-error-dark: ${hexToRgb(palette.errorDark)};
    
      --geist-accent-1: ${hexToRgb(palette.accents_1)};
      --geist-accent-2: ${hexToRgb(palette.accents_2)};
      --geist-accent-3: ${hexToRgb(palette.accents_3)};
      --geist-accent-4: ${hexToRgb(palette.accents_4)};
      --geist-accent-5: ${hexToRgb(palette.accents_5)};
      --geist-accent-6: ${hexToRgb(palette.accents_6)};
      --geist-accent-7: ${hexToRgb(palette.accents_7)};
      --geist-accent-8: ${hexToRgb(palette.accents_8)};
      --geist-link: ${hexToRgb(palette.link)};
    }
  `;

  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: styleHtml,
        }}
      ></style>
    </Head>
  );
};
