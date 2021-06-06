import Analytics from "@components/analytics/Analytics";
import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import { Main } from "@components/main/Main";
import { ThemeContext } from "@lib/context";
import "@styles/globals.scss";
import { useEffect, useMemo, useState } from "react";

// static async getInitialProps(context) {
//   const response =
// }

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeMemo}>
      <div className={themeMemo.theme}>
        <Analytics />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
