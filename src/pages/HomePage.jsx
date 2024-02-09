import { useEffect, useState } from 'react';
import { isObjectEmpty } from '../helpers';
import { getContent } from '../api';

import { HomeHero } from '../components/HomeHero';
import { Information } from '../components/Information';
import { Owner } from '../components/Owner';
import { FeedBackForm } from '../components/FeedBackForm';
import { ProBono } from '../components/ProBono/ProBono';
import { TeamGallery } from '../components/TeamGallery';
import { Practice } from '../components/Practice';
import { Results } from '../components/Results';
import ClientsBlock from "../components/ClientsBlock/ClientsBlock.jsx";
import ClientReviews from "../components/ClientReviews/ClientReviews.jsx";


const HomePage = () => {
  const [company, setCompany] = useState({});
  const [hero, setHero] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('hero');

      if (!isObjectEmpty(data)) {
        setCompany(() => data.company);
        setHero(() => data.hero);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/*<HomeHero data={hero} />*/}
      {/*<Owner data={company} />*/}
			{/*<Practice />*/}
			{/*<TeamGallery />*/}
      {/*<Information />*/}
      {/*<ProBono />*/}
      {/*<Results />*/}
      {/*<ClientsBlock />*/}
      <ClientReviews />
      <FeedBackForm />
    </>
  );
};

export default HomePage;
