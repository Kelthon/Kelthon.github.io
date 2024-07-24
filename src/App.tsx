import Message from '@cards/Message/Message';
import { LanguageProvider } from '@hooks/language';
import { ThemeProvider } from '@hooks/theme';
import Navbar from '@navs/Navbar/Navbar';
import AboutMeSection from '@pages/AboutMe/AboutMe';
import Projects from '@pages/MyProjects/MyProjects';
import { messages } from '@services/data';
import { ColorScheme, Language } from '@utils/properties';
import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState<ColorScheme>(ColorScheme.Light);
  const [language, setLanguage] = useState<Language>(Language.English);

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <LanguageProvider value={{ language, setLanguage }}>
        <main>
          <div className="container">
            <aside className='messages'>
              <Message
                title={messages[0].title}
                message={messages[0].message!}
              />
            </aside>
            <Navbar />
            <AboutMeSection />
          </div>
          <div className="container">
            <Projects />
          </div>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
