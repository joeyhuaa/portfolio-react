import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ClassicHome22 from "./components/ClassicHome22";
import ClassicHome32 from "./components/ClassicHome32";
import ClassicHome42 from "./components/ClassicHome42";
import ClassicHome4 from "./components/ClassicHome4";
import ClassicHome from "./components/ClassicHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|classic-home)">
          <ClassicHome22 {...classicHome22Data} />
        </Route>
        <Route path="/classic-home-1">
          <ClassicHome32 {...classicHome32Data} />
        </Route>
        <Route path="/classic-home-2">
          <ClassicHome42 {...classicHome42Data} />
        </Route>
        <Route path="/classic-home-3">
          <ClassicHome4 {...classicHome4Data} />
        </Route>
        <Route path="/classic-home-4">
          <ClassicHome {...classicHomeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const imageBlock1Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default-@1x.png",
};

const imageBlock2Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--4@1x.png",
    className: "image-block-1",
};

const imageBlock3Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--5@1x.png",
    className: "image-block-2",
};

const featuredContentData = {
    imageBlock1Props: imageBlock1Data,
    imageBlock2Props: imageBlock2Data,
    imageBlock3Props: imageBlock3Data,
};

const heroData = {
    hero: "/img/placement-area--asset-hero--size-default--state-default--1@1x.png",
};

const circleButtonSIZELARGESTATEDEFAULTST1Data = {
    x8A145B4607554D079Cf68833E2Be6E4E: "/img/94526f67-1ce9-4142-91fa-36d85523a75b@1x.png",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU22Data = {
    className: "button-display_eleme-3",
};

const circleButtonSIZELARGESTATEDEFAULTST21Data = {
    x2281B8E498B74370B56907Def5F21A66: "/img/b114854d-cc4c-49e7-ad70-590e4363fabd@1x.png",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU23Data = {
    className: "button-display_eleme-3",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU24Data = {
    className: "button-display_eleme-3",
};

const classicHome22Data = {
    titleTagH6: "Mockup Company",
    label1: "Home",
    label2: "Solutions",
    promotionBox: "/img/placement-area--asset-desktop-panel--size-default--state-default@1x.png",
    loremIpsumDolorSi: <>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</>,
    weBelieveThatPaym: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    h6TagH4: "Featured Solutions",
    line: "/img/line-1@1x.png",
    h6TagH51: "Solution",
    h6TagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    h6TagH52: "Solution",
    h6TagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    a230Cb3DE70048A5A760C060353Cfdfa: "/img/c50ace6e-bf16-4c06-8c38-c19bd2b6e17e@1x.png",
    h6TagH53: "Solution",
    h6TagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    companyStyleStyle3TagH4: "Mockup Company",
    descriptionStyleStyle3TagP: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x35Fedd9C5Bbc449B91D15Ce70336A6B0: "/img/e237636d-ee36-4070-8769-978831e65154@1x.png",
    f582668EF9B64Daa9F4058B68Ac4Bee1: "/img/f582668e-f9b6-4daa-9f40-58b68ac4bee1@1x.png",
    d90E54Ec6Bd24Ff19C20Bcb6C571D34B: "/img/ceeb59df-a49c-40f7-9568-732ad223ae7f@1x.png",
    overlapGroup: "/img/c31ff59a-d7e1-4247-9b5e-6b24119dd95e@1x.png",
    x96C0Dd6BF6De41Cc92Cf975Ee038F9D5: "/img/b7127ec1-a445-43d2-a8ea-2cf0a620000b@1x.png",
    x96Bf38A78B0B4EbdAa2AD894711F81E1: "/img/8c0e80be-6307-44dc-b677-d0a6bca98db4@1x.png",
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
    featuredContentProps: featuredContentData,
    heroProps: heroData,
    circleButtonSIZELARGESTATEDEFAULTST: circleButtonSIZELARGESTATEDEFAULTST1Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU: buttonDISPLAYELEMENTSLabelSIZEMEDIU22Data,
    circleButtonSIZELARGESTATEDEFAULTST2: circleButtonSIZELARGESTATEDEFAULTST21Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU2: buttonDISPLAYELEMENTSLabelSIZEMEDIU23Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU3: buttonDISPLAYELEMENTSLabelSIZEMEDIU24Data,
};

const imageBlock22Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--6@1x.png",
};

const imageBlock23Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--7@1x.png",
    className: "image-block-4",
};

const imageBlock24Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--8@1x.png",
    className: "image-block-5",
};

const tabItemSTATEACTIVE1Data = {
    children: "Home",
};

const tabItemSTATEACTIVE2Data = {
    children: "About",
    className: "tab-item-statedefault-7",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU32Data = {
    className: "button-display_eleme-11",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU33Data = {
    className: "button-display_eleme-11",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU34Data = {
    className: "button-display_eleme-11",
};

const icon1Data = {
    src: "/img/94de9112-46f0-4b8b-a4d7-36be86602109-1@1x.png",
};

const icon2Data = {
    src: "/img/96bf38a7-8b0b-4ebd-aa2a-d894711f81e1-1@1x.png",
    className: "icon-19",
};

const classicHome32Data = {
    h6TagH41: "Featured Products",
    line1: "/img/line-5@1x.png",
    hero: "/img/placement-area--asset-hero--size-default--state-default--2@1x.png",
    loremIpsumDolorSi1: "Design is the silent ambassador of your brand",
    heroText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label1: "Contact",
    titleTagH6: "Mockup Company",
    label2: "Product",
    label3: "Solutions",
    label4: "Support",
    a05Dc37F4D7E4E2797AfAc3C219Da6B5: "/img/a05dc37f-4d7e-4e27-97af-ac3c219da6b5-1@1x.png",
    label5: "Contact",
    promotionBox: "/img/placement-area--asset-desktop-panel--size-default--state-default-1@1x.png",
    loremIpsumDolorSi2: <>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</>,
    weBelieveThatPaym: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    h6TagH42: "Featured Solutions",
    line2: "/img/line-5@1x.png",
    x04D47D4BCcbf4Ab990D4Ba345F3C4795: "/img/04d47d4b-ccbf-4ab9-90d4-ba345f3c4795-1@1x.png",
    d7E55Bb16B70409A99814B7E759E4518: "/img/d7e55bb1-6b70-409a-9981-4b7e759e4518-1@1x.png",
    h6TagH51: "Solution",
    h6TagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    x986106Ac0Ab9497EA674Dac399D729Ed: "/img/986106ac-0ab9-497e-a674-dac399d729ed-1@1x.png",
    x1D7Ad06B4Cac4960899B406511470F66: "/img/1d7ad06b-4cac-4960-899b-406511470f66-1@1x.png",
    h6TagH52: "Solution",
    h6TagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    a230Cb3DE70048A5A760C060353Cfdfa: "/img/a230cb3d-e700-48a5-a760-c060353cfdfa-1@1x.png",
    h6TagH53: "Solution",
    h6TagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    video: "/img/placement-area--asset-panel--state-default--2@1x.png",
    h6TagH43: "Product Spotlight",
    h6: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
    newsletterTagH4: "Newsletter",
    duisAuteIrureDolo: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    value: "Your email",
    label6: "Subscribe",
    copyrightStyleStyle2TagUi_S: "© 2020 Mockup.  All Rights Reserved.",
    privacyPolicyStyleStyle2TagUi_S: "Privacy Policy",
    termsOfServiceSt: "Terms of Service",
    companyStyleStyle3TagH4: "Mockup Company",
    descriptionStyleStyle3TagP: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x35Fedd9C5Bbc449B91D15Ce70336A6B0: "/img/35fedd9c-5bbc-449b-91d1-5ce70336a6b0-1@1x.png",
    f582668EF9B64Daa9F4058B68Ac4Bee1: "/img/f582668e-f9b6-4daa-9f40-58b68ac4bee1-1@1x.png",
    d90E54Ec6Bd24Ff19C20Bcb6C571D34B: "/img/d90e54ec-6bd2-4ff1-9c20-bcb6c571d34b-1@1x.png",
    overlapGroup: "/img/e9acb95c-1133-4faa-b255-2cb8cac800d4-1@1x.png",
    x96C0Dd6BF6De41Cc92Cf975Ee038F9D5: "/img/96c0dd6b-f6de-41cc-92cf-975ee038f9d5-1@1x.png",
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
    imageBlock21Props: imageBlock22Data,
    imageBlock22Props: imageBlock23Data,
    imageBlock23Props: imageBlock24Data,
    tabItemSTATEACTIVE1Props: tabItemSTATEACTIVE1Data,
    tabItemSTATEACTIVE2Props: tabItemSTATEACTIVE2Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU: buttonDISPLAYELEMENTSLabelSIZEMEDIU32Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU2: buttonDISPLAYELEMENTSLabelSIZEMEDIU33Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU3: buttonDISPLAYELEMENTSLabelSIZEMEDIU34Data,
    icon1Props: icon1Data,
    icon2Props: icon2Data,
};

const icon22Data = {
    src: "/img/94de9112-46f0-4b8b-a4d7-36be86602109-2@1x.png",
};

const imageBlock32Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--9@1x.png",
};

const imageBlock33Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--10@1x.png",
    className: "image-block-7",
};

const imageBlock34Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--11@1x.png",
    className: "image-block-8",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU42Data = {
    className: "button-display_eleme-17",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU43Data = {
    className: "button-display_eleme-17",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU44Data = {
    className: "button-display_eleme-17",
};

const icon23Data = {
    src: "/img/96bf38a7-8b0b-4ebd-aa2a-d894711f81e1-2@1x.png",
    className: "icon-29",
};

const classicHome42Data = {
    video: "/img/placement-area--asset-panel--state-default--3@1x.png",
    h6TagH41: "Product Spotlight",
    h6: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
    h6TagH42: "Featured Products",
    line1: "/img/line-7@1x.png",
    hero: "/img/placement-area--asset-hero--size-default--state-default--3@1x.png",
    loremIpsumDolorSi1: "Design is the silent ambassador of your brand",
    heroText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label1: "Contact",
    titleTagH6: "Mockup Company",
    label2: "Home",
    label3: "Product",
    label4: "Solutions",
    label5: "About",
    label6: "Support",
    a05Dc37F4D7E4E2797AfAc3C219Da6B5: "/img/a05dc37f-4d7e-4e27-97af-ac3c219da6b5-2@1x.png",
    label7: "Contact",
    promotionBox: "/img/placement-area--asset-desktop-panel--size-default--state-default-2@1x.png",
    loremIpsumDolorSi2: <>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</>,
    weBelieveThatPaym: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    h6TagH43: "Featured Solutions",
    line2: "/img/line-7@1x.png",
    x04D47D4BCcbf4Ab990D4Ba345F3C4795: "/img/04d47d4b-ccbf-4ab9-90d4-ba345f3c4795-2@1x.png",
    d7E55Bb16B70409A99814B7E759E4518: "/img/d7e55bb1-6b70-409a-9981-4b7e759e4518-2@1x.png",
    h6TagH51: "Solution",
    h6TagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    x986106Ac0Ab9497EA674Dac399D729Ed: "/img/986106ac-0ab9-497e-a674-dac399d729ed-2@1x.png",
    x1D7Ad06B4Cac4960899B406511470F66: "/img/1d7ad06b-4cac-4960-899b-406511470f66-2@1x.png",
    h6TagH52: "Solution",
    h6TagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    a230Cb3DE70048A5A760C060353Cfdfa: "/img/a230cb3d-e700-48a5-a760-c060353cfdfa-2@1x.png",
    h6TagH53: "Solution",
    h6TagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    newsletterTagH4: "Newsletter",
    duisAuteIrureDolo: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    value: "Your email",
    label8: "Subscribe",
    copyrightStyleStyle2TagUi_S: "© 2020 Mockup.  All Rights Reserved.",
    privacyPolicyStyleStyle2TagUi_S: "Privacy Policy",
    termsOfServiceSt: "Terms of Service",
    companyStyleStyle3TagH4: "Mockup Company",
    descriptionStyleStyle3TagP: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x35Fedd9C5Bbc449B91D15Ce70336A6B0: "/img/35fedd9c-5bbc-449b-91d1-5ce70336a6b0-2@1x.png",
    f582668EF9B64Daa9F4058B68Ac4Bee1: "/img/f582668e-f9b6-4daa-9f40-58b68ac4bee1-2@1x.png",
    d90E54Ec6Bd24Ff19C20Bcb6C571D34B: "/img/d90e54ec-6bd2-4ff1-9c20-bcb6c571d34b-2@1x.png",
    overlapGroup: "/img/e9acb95c-1133-4faa-b255-2cb8cac800d4-2@1x.png",
    x96C0Dd6BF6De41Cc92Cf975Ee038F9D5: "/img/96c0dd6b-f6de-41cc-92cf-975ee038f9d5-2@1x.png",
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
    icon21Props: icon22Data,
    imageBlock31Props: imageBlock32Data,
    imageBlock32Props: imageBlock33Data,
    imageBlock33Props: imageBlock34Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU: buttonDISPLAYELEMENTSLabelSIZEMEDIU42Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU2: buttonDISPLAYELEMENTSLabelSIZEMEDIU43Data,
    buttonDISPLAYELEMENTSLabelSIZEMEDIU3: buttonDISPLAYELEMENTSLabelSIZEMEDIU44Data,
    icon22Props: icon23Data,
};

const contentBlock221Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--12@1x.png",
};

const contentBlock222Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--13@1x.png",
    className: "content-block-9",
};

const contentBlock223Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--14@1x.png",
    className: "content-block-10",
};

const classicHome4Data = {
    hero: "/img/placement-area--asset-hero--size-default--state-default--4@1x.png",
    titlePlatformMobileTagH1: <>Design is the <br />silent <br />ambassador of <br />your brand</>,
    heroText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label1: "Contact",
    blogNamePlatformMobileTagUi_L: "Mockup Company",
    x15795489Ad54418AB44BB36F8094590B: "/img/15795489-ad54-418a-b44b-b36f8094590b-1@1x.png",
    c87847Ff72C84Ea5B991Caa7Bb35Dd02: "/img/15795489-ad54-418a-b44b-b36f8094590b-1@1x.png",
    ae93D175B7E54E548A79708Eb7E14810: "/img/15795489-ad54-418a-b44b-b36f8094590b-1@1x.png",
    typographyTagH41: "Featured Solutions",
    line1: "/img/line-10@1x.png",
    x755E3917E37D4D0FAc024407208B75E2: "/img/755e3917-e37d-4d0f-ac02-4407208b75e2@1x.png",
    x8A145B4607554D079Cf68833E2Be6E4E: "/img/8a145b46-0755-4d07-9cf6-8833e2be6e4e-1@1x.png",
    typographyTagH51: "Solution",
    typographyTagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    x2281B8E498B74370B56907Def5F21A66: "/img/2281b8e4-98b7-4370-b569-07def5f21a66-1@1x.png",
    x72B59AfdAd8B4434915266476F79F081: "/img/72b59afd-ad8b-4434-9152-66476f79f081-1@1x.png",
    typographyTagH52: "Solution",
    typographyTagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    x03326Fc35Ba84363B152B0Eb53028B40: "/img/03326fc3-5ba8-4363-b152-b0eb53028b40-1@1x.png",
    typographyTagH53: "Solution",
    typographyTagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    video: "/img/placement-area--asset-panel--state-default--4@1x.png",
    iconPlay: "/img/d6bb394e-0da5-478c-ae9d-35566c25684d-1@1x.png",
    typographyTagH42: "Featured Products",
    line2: "/img/line-10@1x.png",
    promotion: "/img/placement-area--asset-panel--size-default--state-default--1@1x.png",
    titlePlatformMobileTagH4: <>Lorem ipsum dolor sit <br />amet, consectetur <br />adipiscing elit, sed do <br />eiusmod tempor</>,
    heroText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label2: "Read More",
    companyPlatformMo: "Mockup Company",
    descriptionPlatfor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    followMePlatform1: "Products",
    followMePlatform2: "Services",
    lineStyleStyle31: "/img/line--style-style3--2@1x.png",
    lineStyleStyle32: "/img/line--style-style3--2@1x.png",
    productPlatformMo1: "Product 1",
    servicePlatformMo1: "Service 1",
    productPlatformMo2: "Product 2",
    servicePlatformMo2: "Service 2",
    productPlatformMo3: "Product 3",
    servicePlatformMo3: "Service 3",
    productPlatformMo4: "Product 4",
    servicePlatformMo4: "Service 4",
    followMePlatform3: "Resources",
    line3: "/img/line-9@1x.png",
    resourcePlatformM1: "News",
    resourcePlatformM2: "Blog",
    resourcePlatformM3: "Videos",
    resourcePlatformM4: "FAQs",
    x9165E48CBf00449881082F60D9A75B16: "/img/9165e48c-bf00-4498-8108-2f60d9a75b16-1@1x.png",
    x30Fb48Ba6Bb74Dc68Bbd08Fd06A82F46: "/img/30fb48ba-6bb7-4dc6-8bbd-08fd06a82f46-1@1x.png",
    x359Cb46644B34976A46DF6E1Da1Ffe6B: "/img/359cb466-44b3-4976-a46d-f6e1da1ffe6b-1@1x.png",
    overlapGroup: "/img/7c905fad-e2e3-4eb1-805c-e6f713db8ab2-1@1x.png",
    c9Bed9790D6C4803A7B72C18389148Fc: "/img/c9bed979-0d6c-4803-a7b7-2c18389148fc-1@1x.png",
    iconCall: "/img/13825a82-728e-4ea1-9671-402ba312690b-1@1x.png",
    privacyPolicyPlat: "Privacy Policy",
    termsOfServicePl: "Terms of Service",
    copyrightPlatform: "© 2020 Mockup.  All Rights Reserved.",
    typographyTagH43: "Newsletter",
    typography: <>Duis aute irure dolor in reprehenderit <br />in voluptate velit.</>,
    value: "Email address",
    label3: "Go",
    contentBlock221Props: contentBlock221Data,
    contentBlock222Props: contentBlock222Data,
    contentBlock223Props: contentBlock223Data,
};

const contentBlock1Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default-@1x.png",
};

const contentBlock2Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--1@1x.png",
    className: "content-block-13",
};

const contentBlock3Data = {
    imageAssetSmallSizeDefaultStateDefa: "/img/placement-area--asset-small--size-default--state-default--2@1x.png",
    className: "content-block-13",
};

const circleButtonSIZELARGESTATEDEFAULTST3Data = {
    x8A145B4607554D079Cf68833E2Be6E4E: "/img/8a145b46-0755-4d07-9cf6-8833e2be6e4e@1x.png",
    className: "circle-button-sizela-3",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU25Data = {
    className: "button-display_eleme-4",
};

const circleButtonSIZELARGESTATEDEFAULTST22Data = {
    x2281B8E498B74370B56907Def5F21A66: "/img/2281b8e4-98b7-4370-b569-07def5f21a66@1x.png",
    className: "circle-button-sizela-5",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU26Data = {
    className: "button-display_eleme-4",
};

const buttonDISPLAYELEMENTSLabelSIZEMEDIU27Data = {
    className: "button-display_eleme-4",
};

const classicHomeData = {
    hero: "/img/placement-area--asset-hero--size-default--state-default-@1x.png",
    titlePlatformMobileTagH1: <>Design is the <br />silent <br />ambassador of <br />your brand</>,
    heroText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label1: "Contact",
    blogNamePlatformMobileTagUi_L: "Mockup Company",
    x15795489Ad54418AB44BB36F8094590B: "/img/15795489-ad54-418a-b44b-b36f8094590b@1x.png",
    c87847Ff72C84Ea5B991Caa7Bb35Dd02: "/img/15795489-ad54-418a-b44b-b36f8094590b@1x.png",
    ae93D175B7E54E548A79708Eb7E14810: "/img/15795489-ad54-418a-b44b-b36f8094590b@1x.png",
    typographyTagH41: "Featured Products",
    line1: "/img/line-1@1x.png",
    typographyTagH42: "Featured Solutions",
    line2: "/img/line-1@1x.png",
    typographyTagH51: "Solution",
    typographyTagP1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    typographyTagH52: "Solution",
    typographyTagP2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    x03326Fc35Ba84363B152B0Eb53028B40: "/img/03326fc3-5ba8-4363-b152-b0eb53028b40@1x.png",
    typographyTagH53: "Solution",
    typographyTagP3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    video: "/img/placement-area--asset-panel--state-default-@1x.png",
    d6Bb394E0Da5478CAe9D35566C25684D: "/img/d6bb394e-0da5-478c-ae9d-35566c25684d@1x.png",
    promotion: "/img/placement-area--asset-panel--size-default--state-default-@1x.png",
    titlePlatformMobileTagH4: <>Lorem ipsum dolor sit <br />amet, consectetur <br />adipiscing elit, sed do <br />eiusmod tempor</>,
    heroText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    label2: "Read More",
    typographyTagH43: "Newsletter",
    typography: <>Duis aute irure dolor in reprehenderit <br />in voluptate velit.</>,
    value: "Email address",
    label3: "Go",
    companyPlatformMo: "Mockup Company",
    descriptionPlatfor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    followMePlatform1: "Products",
    followMePlatform2: "Services",
    lineStyleStyle31: "/img/line--style-style3--1@1x.png",
    lineStyleStyle32: "/img/line--style-style3--1@1x.png",
    productPlatformMo1: "Product 1",
    servicePlatformMo1: "Service 1",
    productPlatformMo2: "Product 2",
    servicePlatformMo2: "Service 2",
    productPlatformMo3: "Product 3",
    servicePlatformMo3: "Service 3",
    productPlatformMo4: "Product 4",
    servicePlatformMo4: "Service 4",
    followMePlatform3: "Resources",
    line3: "/img/line@1x.png",
    resourcePlatformM1: "News",
    resourcePlatformM2: "Blog",
    resourcePlatformM3: "Videos",
    resourcePlatformM4: "FAQs",
    x9165E48CBf00449881082F60D9A75B16: "/img/e237636d-ee36-4070-8769-978831e65154@1x.png",
    x30Fb48Ba6Bb74Dc68Bbd08Fd06A82F46: "/img/dcf52dc7-5a05-42a9-ab8b-e2436c52716d@1x.png",
    x359Cb46644B34976A46DF6E1Da1Ffe6B: "/img/ceeb59df-a49c-40f7-9568-732ad223ae7f@1x.png",
    overlapGroup: "/img/7c905fad-e2e3-4eb1-805c-e6f713db8ab2@1x.png",
    c9Bed9790D6C4803A7B72C18389148Fc: "/img/b7127ec1-a445-43d2-a8ea-2cf0a620000b@1x.png",
    x13825A82728E4Ea19671402Ba312690B: "/img/13825a82-728e-4ea1-9671-402ba312690b@1x.png",
    privacyPolicyPlat: "Privacy Policy",
    termsOfServicePl: "Terms of Service",
    copyrightPlatform: "© 2020 Mockup.  All Rights Reserved.",
    contentBlock1Props: contentBlock1Data,
    contentBlock2Props: contentBlock2Data,
    contentBlock3Props: contentBlock3Data,
    circleButtonSIZELARGESTATEDEFAULTST: circleButtonSIZELARGESTATEDEFAULTST3Data,
    contentBlock1Props2: buttonDISPLAYELEMENTSLabelSIZEMEDIU25Data,
    circleButtonSIZELARGESTATEDEFAULTST2: circleButtonSIZELARGESTATEDEFAULTST22Data,
    contentBlock1Props3: buttonDISPLAYELEMENTSLabelSIZEMEDIU26Data,
    contentBlock1Props4: buttonDISPLAYELEMENTSLabelSIZEMEDIU27Data,
};

