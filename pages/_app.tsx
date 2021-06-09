import Analytics from "@components/analytics/Analytics";
import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import { Main } from "@components/main/Main";
import { ThemeContext, TransitionContext } from "@lib/context";
import "@styles/globals.scss";
import { useEffect, useMemo, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [transition, setTransition] = useState("transform 0.4s");
  const transitionMemo = useMemo(
    () => ({ transition, setTransition }),
    [transition, setTransition]
  );

  const [theme, setTheme] = useState("light");
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
  }, []);

  return (
    <TransitionContext.Provider value={transitionMemo}>
      <ThemeContext.Provider value={themeMemo}>
        <div className={themeMemo.theme} style={{ transition: transition }}>
          <Analytics />
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </TransitionContext.Provider>
  );
}

export default MyApp;
