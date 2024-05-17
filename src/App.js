import './App.css';
import { ChakraProvider, Switch } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Brands from './Components/Brands';
import Contact from './Components/Contact';
import About from './Components/About';
import { IntlProvider } from 'react-intl';
import translations from "./translations";
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState("tr");

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  }

  const messages = translations[locale];

  return (
    <ChakraProvider>
      <IntlProvider locale={locale} messages={messages}>
        <main>
          <Header sw={<LanguageSelector onLanguageChange={handleLanguageChange}/>}/>
          <Brands />
          <About />
          <Contact locale={locale}/>
          <Footer />
        </main>
      </IntlProvider>  
    </ChakraProvider>
  );
}

function LanguageSelector({ onLanguageChange }) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.checked ? "en" : "tr";
    onLanguageChange(selectedLocale);
  };

  return (
    <Switch onChange={handleLanguageSelect}/>
  );
}

export default App;
