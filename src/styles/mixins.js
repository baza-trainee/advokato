export const flexBox = () => {
  return `display: flex;
        justify-content: center;
        align-items: center;`;
};

export const container = () => {
  return `width: 100%;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;


        @media screen and (min-width: 768px) {
          padding-left: 40px;
          padding-right: 40px;
        }

        @media screen and (min-width: 1440px) {
          max-width: 1440px;
          padding-left: 160px;
          padding-right: 160px;
        }
    `;
};

export const mainButton = () => {
  return `  
        padding: 20px 32px;
        color: #ffffff;
        background-color: var(--darkBackground);
        cursor: pointer;
        border: 1px solid var(--greyText);
        font-family: inherit;
        font-size: 18px;
        font-weight: 500;
        line-height: calc(22 / 18);
        text-align: center;
        border-radius: 48px;
        transition: color var(--timing-function) var(--animation-duration), border var(--timing-function) var(--animation-duration), background-color var(--timing-function) var(--animation-duration);

        &:hover,
        &:focus {
          color: var(--mainText);
          background-color: #ffffff;
          border: 1px solid #ffffff;
        }

        &:active {
          color: var(--mainText);
          background-color: #e1e1e1; 
          border: 1px solid #e1e1e1;
        }

        &[disabled] {
          color: var(--greyText);   
          cursor: not-allowed;
        
        &:hover,
        &:focus {
          color: var(--greyText);
          background-color: var(--darkBackground);
          border: 1px solid var(--greyText);
          }
        }
    `;
};

export const secondaryButton = () => {
  return `  
        padding: 12px 24px;
        color: var(--lightText);
        background-color: #1c1c21;
        cursor: pointer;
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        line-height: calc(17 / 14);
        text-align: center;
        border-radius: 50px;
        transition: color var(--timing-function) var(--animation-duration), background-color var(--timing-function) var(--animation-duration);

        &:hover,
        &:focus {
          color: var(--mainText);
          background-color: #ffffff;        
        }

        &:active {
          color: var(--mainText);
          background-color: #e1e1e1;        
        }

        &[disabled] {
          color: var(--greyText);   
          cursor: not-allowed;
        
        &:hover,
        &:focus {
          color: var(--greyText);
          background-color: #1c1c21;          
          }
        }
    `;
};

export const fontDesktop = () => {
  return `
        font-family: PT Sans, sans-serif;
        font-size: 22px;
        font-weight: 400;
        line-height: calc(35 / 22);      
    `;
};

export const fontTablet = () => {
  return `
        font-size: 20px;
        font-weight: 500;
        line-height: 1.3;        
    `;
};

export const fontMobile = () => {
  return `
        font-size: 14px;
        font-weight: 400;
        line-height: 1.3;        
    `;
};

export const fontLayoutMenu = () => {
	return `     
        font-family: var(--Montserrat);
        font-size: 18px;
        font-weight: 400;
        line-height: 32.4px;  
        letter-spacing: 0em;    
    `;
};

export const fontLayoutCall = () => {
	return `     
        font-family: var(--Montserrat);
        font-size: 14px;
        font-weight: 500;
        line-height: 17.07px;  
        letter-spacing: 0em;    
    `;
};

export const fontHeroTitle = () => {
	return `     
        font-family: var(--Montserrat);
        font-size: 100px;
        font-weight: 700;
        line-height: 121.9px;  
        letter-spacing: 0em;    
    `;
};

export const fontSectionTitle = () => {
  return `     
        font-family: var(--Montserrat);
        font-size: 40px;
        font-weight: 500;
        line-height: calc(56 / 40);  
        letter-spacing: 0em;    
    `;
};

export const fontSectionText = () => {
  return `     
        font-family: var(--PTSans);
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;  
        letter-spacing: 0em;    
    `;
};

export const fontReviewName = () => {
  return `     
        font-family: var(--Montserrat);
        font-size: 28px;
        font-weight: 400;
        line-height: 42px;  
        letter-spacing: 0em;    
    `;
};

export const fontReview = () => {
  return `     
        font-family: var(--Raleway);
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;  
        letter-spacing: 0em;    
    `;
};
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1440px',
};

export const device = {
  mobileS: `min-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  laptop: `min-width: ${size.laptop}`,
  desktop: `min-width: ${size.desktop}`,
};
