export const flexBox = () => {
  return `display: flex;
        justify-content: center;
        align-items: center;`;
};

export const flexColumn = () => {
  return `flex-direction: column;
	justify-content: space-between;
	width: 100%;`;
};

export const container = () => {
  return `width: 100%;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;


        @media screen and (min-width: 768px) {
          padding-left: 60px;
          padding-right: 60px;
        }
        
        @media screen and (min-width: 1024px) {
          padding-left: 80px;
          padding-right: 80px;
        }

        @media screen and (min-width: 1440px) {
          padding-left: 160px;
          padding-right: 160px;
        }
    `;
};

export const mainButton = () => {
  return `  
        padding: 20px 32px;

        color: var(--btnBgHover);
        fill: var(--btnBgHover);
        background-color: var(--darkBackground);
        border: 1px solid var(--greyText);
        cursor: pointer;

        font-family: inherit;
        font-size: 18px;
        font-weight: 500;
        line-height: calc(22 / 18);
        text-align: center;
        border-radius: 48px;

        transition-property: color, fill, border, background-color;
        transition-duration: var(--timing-function) var(--animation-duration);
        transition-timing-function: var(--timing-function);

        &:hover,
        &:focus {
          color: var(--mainText);
          fill: var(--mainText);
          background-color: var(--btnBgHover);
          border: 1px solid var(--btnBgHover);
        }

        &:active {
          color: var(--mainText);
          fill: var(--mainText);
          background-color: var(--btnBgPressed); 
          border: 1px solid var(--btnBgPressed);
        }

        &[disabled] {
          color: var(--greyText);   
          fill: var(--greyText);
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
        fill: var(--lightText);
        background-color: var(--darkGrey);
        border: none;
        cursor: pointer;

        font-family: var(--Montserrat);
        font-size: 14px;
        font-weight: 500;
        line-height: calc(17 / 14);
        text-align: center;
        border-radius: 50px;

        transition-property: color, fill, background-color;
        transition-duration: var(--animation-duration);
        transition-timing-function: var(--timing-function);

        &:hover,
        &:focus {
          color: var(--mainText);
          fill: var(--mainText);
          background-color: var(--btnBgHover);        
        }
        
        &:active {
          color: var(--mainText);
          fill: var(--mainText);
          background-color: var(--btnBgPressed);        
        }

        &[disabled] {
          color: var(--greyText);   
          fill: var(--mainText);
          cursor: not-allowed;
        
        &:hover,
        &:focus {
          color: var(--greyText);
          fill: var(--mainText);
          background-color: var(--darkGrey);          
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

export const fontSliderCardName = () => {
  return `     
        font-family: var(--Raleway);
        font-size: 32px;
        font-weight: 400;
        line-height: 44.8px;  
        letter-spacing: 0em;    
    `;
};

export const sliderArrow = () => {
  return `
  button {
		fill: none;
		stroke: var(--reviewText);
		stroke-width: 2;
	}
	button:hover {
		fill: var(--btnBgHover);
		stroke: var(--mainText);
	}
	button:active {
		fill: var(--btnBgPressed);
		stroke: var(--mainText);
	}
  `;
};

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '768px',
  tablet: '1024px',
  burger: '1201px',
  laptop: '1280px',
  desktop: '1440px',
};

export const device = {
  mobileS: `min-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  burger: `min-width: ${size.burger}`,
  laptop: `min-width: ${size.laptop}`,
  desktop: `min-width: ${size.desktop}`,
};
