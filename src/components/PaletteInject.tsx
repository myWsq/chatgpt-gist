import { useTheme } from "@geist-ui/core";
import Head from "next/head";

export const PaletteInject: React.FunctionComponent = () => {
  const { palette } = useTheme();
  const styleHtml = `
    :root {
      --geist-background: ${palette.background};
      --geist-foreground: ${palette.foreground};

      --geist-code: ${palette.code};
      --geist-border: ${palette.border};

      --geist-selection: ${palette.selection};
      --geist-alert: ${palette.alert};
      --geist-purple: ${palette.purple};
      --geist-magenta: ${palette.magenta};
      
      --geist-success: ${palette.success};
      --geist-success-lighter: ${palette.successLighter};
      --geist-success-light: ${palette.successLight};
      --geist-success-dark: ${palette.successDark};

      --geist-violet: ${palette.violet};
      --geist-violet-lighter: ${palette.violetLighter};
      --geist-violet-light: ${palette.violetLight};
      --geist-violet-dark: ${palette.violetDark};

      --geist-cyan: ${palette.cyan};
      --geist-cyan-lighter: ${palette.cyanLighter};
      --geist-cyan-light: ${palette.cyanLight};
      --geist-cyan-dark: ${palette.cyanDark};

      --geist-warning: ${palette.warning};
      --geist-warning-lighter: ${palette.warningLighter};
      --geist-warning-light: ${palette.warningLight};
      --geist-warning-dark: ${palette.warningDark};

      --geist-error: ${palette.error};
      --geist-error-lighter: ${palette.errorLighter};
      --geist-error-light: ${palette.errorLight};
      --geist-error-dark: ${palette.errorDark};

      --geist-accent-1: ${palette.accents_1};
      --geist-accent-2: ${palette.accents_2};
      --geist-accent-3: ${palette.accents_3};
      --geist-accent-4: ${palette.accents_4};
      --geist-accent-5: ${palette.accents_5};
      --geist-accent-6: ${palette.accents_6};
      --geist-accent-7: ${palette.accents_7};
      --geist-accent-8: ${palette.accents_8};
      --geist-link: ${palette.link};
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
