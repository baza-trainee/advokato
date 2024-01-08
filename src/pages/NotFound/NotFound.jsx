import { useTranslation } from 'react-i18next';

import {
  TopBackground,
  Container,
  Title,
  Text,
  Button,
} from './NotFound.styled';

const NotFound = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <Container>
      <TopBackground />
      <Title>{t('errorPage.title')}</Title>

      <Text>{t('errorPage.subTitle')}</Text>

      <Button to="/" aria-label="кнопка повернення на головну сторінку">
        {t('errorPage.button')}
      </Button>
    </Container>
  );
};

export default NotFound;
