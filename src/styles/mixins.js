export const flexBox = () => {
	return `display: flex;
        justify-content: center;
        align-items: center;`;
};

export const container = () => {
	return `width: 100%;
        margin: 0 auto;
        padding: 0 20px;
    
        @media screen and (min-width: 768px) {
          padding: 0 40px;
        }

        @media screen and (min-width: 1440px) {
          max-width: 1440px;
          padding: 0 160px;
        }`;
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