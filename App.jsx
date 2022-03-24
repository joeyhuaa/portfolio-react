
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|home)">
            <Home {...homeData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const imageBlock1Data = {
    imageAssetSmallSizeDefaultStateDefa: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-small--size-default--state-default-@1x.png",
};

const imageBlock2Data = {
    imageAssetSmallSizeDefaultStateDefa: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-small--size-default--state-default--1@1x.png",
    className: "image-block-1",
};

const imageBlock3Data = {
    imageAssetSmallSizeDefaultStateDefa: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-small--size-default--state-default--2@1x.png",
    className: "image-block-2",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU2Data = {
    className: "button-display_eleme-5",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU3Data = {
    className: "button-display_eleme-6",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU4Data = {
    className: "button-display_eleme-7",
};

const homeData = {
    h6TagH41: "Featured Products",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/line-1@1x.png",
    hero: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-hero--size-default--state-default-@1x.png",
    loremIpsumDolorSi1: "Design is the silent ambassador of your brand",
    heroText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label1: "Contact",
    video: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-panel--state-default-@1x.png",
    h6TagH42: "Product Spotlight",
    h6: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
    e5B5C0F00Dc34718A366755De7E05038: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/e5b5c0f0-0dc3-4718-a366-755de7e05038@1x.png",
    promotionBox: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/placement-area--asset-desktop-panel--size-default--state-default@1x.png",
    loremIpsumDolorSi2: <>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</>,
    weBelieveThatPaym: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    h6TagH43: "Featured Solutions",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/line-1@1x.png",
    x90C99DfbB29048DcA01B69395B923925: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/90c99dfb-b290-48dc-a01b-69395b923925@1x.png",
    x94526F671Ce9414291Fa36D85523A75B: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/94526f67-1ce9-4142-91fa-36d85523a75b@1x.png",
    h6TagH51: "Solution",
    h6TagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    b114854DCc4C49E7Ad70590E4363Fabd: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/b114854d-cc4c-49e7-ad70-590e4363fabd@1x.png",
    x725847C98B9342B684144Bcfdb5C4B55: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/725847c9-8b93-42b6-8414-4bcfdb5c4b55@1x.png",
    h6TagH52: "Solution",
    h6TagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    c50Ace6EBf164C068C38C19Bd2B6E17E: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/c50ace6e-bf16-4c06-8c38-c19bd2b6e17e@1x.png",
    h6TagH53: "Solution",
    h6TagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    newsletterTagH4: "Newsletter",
    duisAuteIrureDolo: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    value: "Your email",
    label2: "Subscribe",
    companyStyleStyle3TagH4: "Mockup Company",
    descriptionStyleStyle3TagP: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    e237636DEe3640708769978831E65154: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/e237636d-ee36-4070-8769-978831e65154@1x.png",
    dcf52Dc75A0542A9Ab8BE2436C52716D: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/dcf52dc7-5a05-42a9-ab8b-e2436c52716d@1x.png",
    ceeb59DfA49C40F79568732Ad223Ae7F: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/ceeb59df-a49c-40f7-9568-732ad223ae7f@1x.png",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/c31ff59a-d7e1-4247-9b5e-6b24119dd95e@1x.png",
    b7127Ec1A44543D2A8Ea2Cf0A620000B: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/b7127ec1-a445-43d2-a8ea-2cf0a620000b@1x.png",
    iconCall: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/8c0e80be-6307-44dc-b677-d0a6bca98db4@1x.png",
    productsStyleStyle3TagH5: "Products",
    productStyleStyle3TagUi_L1: "Product 1",
    productStyleStyle3TagUi_L2: "Product 2",
    productStyleStyle3TagUi_L3: "Product 3",
    productStyleStyle3TagUi_L4: "Product 4",
    servicesStyleStyle3TagH5: "Services",
    serviceStyleStyle3TagUi_L1: "Service 1",
    serviceStyleStyle3TagUi_L2: "Service 2",
    serviceStyleStyle3TagUi_L3: "Service 3",
    serviceStyleStyle3TagUi_L4: "Service 4",
    resourcesStyleStyle3TagH5: "Resources",
    resourceStyleStyle3TagUi_L1: "News",
    resourceStyleStyle3TagUi_L2: "Blog",
    resourceStyleStyle3TagUi_L3: "Videos",
    resourceStyleStyle3TagUi_L4: "FAQs",
    titleTagH6: "Mockup Company",
    label3: "Home",
    label4: "Product",
    label5: "Solutions",
    label6: "About",
    label7: "Support",
    x66Afca6B48834A7F86588C30Ca4617Fe: "https://anima-uploads.s3.amazonaws.com/projects/619dcd24ec8a61a4b11754bd/releases/623c2613a7499b23dfbaacd2/img/66afca6b-4883-4a7f-8658-8c30ca4617fe@1x.png",
    label8: "Contact",
    copyrightStyleStyle2TagUi_S: "© 2020 Mockup.  All Rights Reserved.",
    privacyPolicyStyleStyle2TagUi_S: "Privacy Policy",
    termsOfServiceSt: "Terms of Service",
    imageBlock1Props: imageBlock1Data,
    imageBlock2Props: imageBlock2Data,
    imageBlock3Props: imageBlock3Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU1Props: buttonDISPLAYELEMENTSLabelSIZEMEDIU2Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU2Props: buttonDISPLAYELEMENTSLabelSIZEMEDIU3Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU3Props: buttonDISPLAYELEMENTSLabelSIZEMEDIU4Data,
};

