export const size = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '768',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2560',
};

export const device = {
  mobileS: `(min-device-width: ${size.mobileS}px) and (max-device-height: 800px)`,
  mobile: `(max-device-width: ${size.mobileL}px)`,
  tablet: `(min-device-width: ${size.mobileL}px) and (max-device-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
