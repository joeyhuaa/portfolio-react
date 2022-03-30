import React from "react";
import FeaturedContent from "../FeaturedContent";
import Hero from "../Hero";
import TabItemSTATEDEFAULT from "../TabItemSTATEDEFAULT";
import Area from "../Area";
import TabItemSTATEDEFAULT2 from "../TabItemSTATEDEFAULT2";
import TabItemSTATEDEFAULT3 from "../TabItemSTATEDEFAULT3";
import IconICONfeathersearchSIZELARGESTYLE from "../IconICONfeathersearchSIZELARGESTYLE";
import ButtonDISPLAYELEMENTSLabelSIZEMEDIU from "../ButtonDISPLAYELEMENTSLabelSIZEMEDIU";
import Video from "../Video";
import ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 from "../ButtonDISPLAYELEMENTSLabelSIZEMEDIU2";
import CircleButtonSIZELARGESTATEDEFAULTST from "../CircleButtonSIZELARGESTATEDEFAULTST";
import CircleButtonSIZELARGESTATEDEFAULTST2 from "../CircleButtonSIZELARGESTATEDEFAULTST2";
import Newsletter from "../Newsletter";
import FooterStrip from "../FooterStrip";
import "./ClassicHome22.sass";

class ClassicHome22 extends React.Component {
  render() {
    const {
      titleTagH6,
      label1,
      label2,
      promotionBox,
      loremIpsumDolorSi,
      weBelieveThatPaym,
      h6TagH4,
      line,
      h6TagH51,
      h6TagP1,
      h6TagH52,
      h6TagP2,
      a230Cb3DE70048A5A760C060353Cfdfa,
      h6TagH53,
      h6TagP3,
      companyStyleStyle3TagH4,
      descriptionStyleStyle3TagP,
      x35Fedd9C5Bbc449B91D15Ce70336A6B0,
      f582668EF9B64Daa9F4058B68Ac4Bee1,
      d90E54Ec6Bd24Ff19C20Bcb6C571D34B,
      overlapGroup,
      x96C0Dd6BF6De41Cc92Cf975Ee038F9D5,
      x96Bf38A78B0B4EbdAa2AD894711F81E1,
      productsStyleStyle3TagH5,
      productStyleStyle3TagUi_L1,
      productStyleStyle3TagUi_L2,
      productStyleStyle3TagUi_L3,
      productStyleStyle3TagUi_L4,
      servicesStyleStyle3TagH5,
      serviceStyleStyle3TagUi_L1,
      serviceStyleStyle3TagUi_L2,
      serviceStyleStyle3TagUi_L3,
      serviceStyleStyle3TagUi_L4,
      resourcesStyleStyle3TagH5,
      resourceStyleStyle3TagUi_L1,
      resourceStyleStyle3TagUi_L2,
      resourceStyleStyle3TagUi_L3,
      resourceStyleStyle3TagUi_L4,
      featuredContentProps,
      heroProps,
      circleButtonSIZELARGESTATEDEFAULTST,
      buttonDISPLAYELEMENTSLabelSIZEMEDIU,
      circleButtonSIZELARGESTATEDEFAULTST2,
      buttonDISPLAYELEMENTSLabelSIZEMEDIU2,
      buttonDISPLAYELEMENTSLabelSIZEMEDIU3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="classic-home screen">
          <div className="overlap-group7">
            <FeaturedContent
              imageBlock1Props={featuredContentProps.imageBlock1Props}
              imageBlock2Props={featuredContentProps.imageBlock2Props}
              imageBlock3Props={featuredContentProps.imageBlock3Props}
            />
            <div className="overlap-group5">
              <Hero hero={heroProps.hero} />
              <div className="header">
                <div className="title-tagh6">{titleTagH6}</div>
                <div className="tabs">
                  <div className="tab-item-stateactive">
                    <div className="overlap-group4">
                      <div className="area"></div>
                      <div className="label poppins-medium-celeste-16px">{label1}</div>
                    </div>
                  </div>
                  <TabItemSTATEDEFAULT />
                  <div className="tab-item-statedefault">
                    <div className="overlap-group">
                      <Area />
                      <div className="label-1">{label2}</div>
                    </div>
                  </div>
                  <TabItemSTATEDEFAULT2 />
                  <TabItemSTATEDEFAULT3 />
                </div>
                <IconICONfeathersearchSIZELARGESTYLE />
                <ButtonDISPLAYELEMENTSLabelSIZEMEDIU />
              </div>
            </div>
          </div>
          <Video />
          <div className="tion-container">
            <div className="promotion-box" style={{ backgroundImage: `url(${promotionBox})` }}>
              <div className="lorem-ipsum-dolor-si poppins-bold-old-lace-32px">{loremIpsumDolorSi}</div>
              <p className="we-believe-that-paym poppins-medium-old-lace-16px">{weBelieveThatPaym}</p>
              <ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 />
            </div>
            <div className="featured-solutions">
              <div className="h6-tagh4 poppins-bold-old-lace-32px">{h6TagH4}</div>
              <img className="line" src={line} />
              <div className="content-block-container">
                <div className="content-block-1">
                  <CircleButtonSIZELARGESTATEDEFAULTST
                    x8A145B4607554D079Cf68833E2Be6E4E={
                      circleButtonSIZELARGESTATEDEFAULTST.x8A145B4607554D079Cf68833E2Be6E4E
                    }
                  />
                  <div className="h6-tagh5 poppins-bold-old-lace-24px">{h6TagH51}</div>
                  <p className="h6-tagp poppins-normal-white-16px">{h6TagP1}</p>
                  <ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 className={buttonDISPLAYELEMENTSLabelSIZEMEDIU.className} />
                </div>
                <div className="content-block">
                  <CircleButtonSIZELARGESTATEDEFAULTST2
                    x2281B8E498B74370B56907Def5F21A66={
                      circleButtonSIZELARGESTATEDEFAULTST2.x2281B8E498B74370B56907Def5F21A66
                    }
                  />
                  <div className="h6-tagh5 poppins-bold-old-lace-24px">{h6TagH52}</div>
                  <p className="h6-tagp poppins-normal-white-16px">{h6TagP2}</p>
                  <ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 className={buttonDISPLAYELEMENTSLabelSIZEMEDIU2.className} />
                </div>
                <div className="content-block">
                  <div className="circle-button-sizela">
                    <div className="icon-iconfeatherawar">
                      <div className="icon">
                        <div className="overlap-group-1">
                          <div className="x891cfd2b-8b3e-489b-8960-32f7cf9845ba border-2-2px-woodsmoke"></div>
                          <img
                            className="a230cb3d-e700-48a5-a760-c060353cfdfa"
                            src={a230Cb3DE70048A5A760C060353Cfdfa}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h6-tagh5 poppins-bold-old-lace-24px">{h6TagH53}</div>
                  <p className="h6-tagp poppins-normal-white-16px">{h6TagP3}</p>
                  <ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 className={buttonDISPLAYELEMENTSLabelSIZEMEDIU3.className} />
                </div>
              </div>
            </div>
          </div>
          <Newsletter />
          <div className="footer">
            <div className="flex-row">
              <div className="flex-col">
                <div className="company-stylestyle3tagh4 poppins-bold-old-lace-32px">{companyStyleStyle3TagH4}</div>
                <p className="description-stylestyle3tagp poppins-normal-star-dust-16px">
                  {descriptionStyleStyle3TagP}
                </p>
                <div className="circle-button-size-container">
                  <div className="circle-button-sizeme-1">
                    <div className="icon-iconfeather">
                      <div className="icon-1">
                        <img
                          className="x35fedd9c-5bbc-449b-91d1-5ce70336a6b0"
                          src={x35Fedd9C5Bbc449B91D15Ce70336A6B0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="circle-button-sizeme-2">
                    <div className="icon-iconfeather">
                      <div className="icon-2">
                        <img className="f582668e-f9b6-4daa-9f40-58b68ac4bee1" src={f582668EF9B64Daa9F4058B68Ac4Bee1} />
                      </div>
                    </div>
                  </div>
                  <div className="circle-button-sizeme">
                    <div className="icon-iconfeather">
                      <div className="icon-3">
                        <div className="bde720ee-9faa-4f37-a63d-bc8cb9173acd border-2px-woodsmoke"></div>
                        <div className="flex-row-1">
                          <div className="c76b58bc-3b79-41ee-bfb9-8d0f6f858054 border-2px-woodsmoke"></div>
                          <img
                            className="d90e54ec-6bd2-4ff1-9c20-bcb6c571d34b"
                            src={d90E54Ec6Bd24Ff19C20Bcb6C571D34B}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circle-button-sizeme">
                    <div className="icon-iconfeather">
                      <div className="icon-4">
                        <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
                          <img
                            className="x96c0dd6b-f6de-41cc-92cf-975ee038f9d5"
                            src={x96C0Dd6BF6De41Cc92Cf975Ee038F9D5}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circle-button-sizeme-3">
                    <div className="icon-iconfeather">
                      <div className="icon-5">
                        <img className="icon-call" src={x96Bf38A78B0B4EbdAa2AD894711F81E1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylestyletag-container">
                <div className="s-stylestyle3tagh5 poppins-bold-old-lace-24px">{productsStyleStyle3TagH5}</div>
                <div className="product-stylestyle3tagui_l-1 poppins-medium-old-lace-18px">
                  {productStyleStyle3TagUi_L1}
                </div>
                <div className="product-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {productStyleStyle3TagUi_L2}
                </div>
                <div className="product-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {productStyleStyle3TagUi_L3}
                </div>
                <div className="product-stylestyle3tagui_l-2 poppins-medium-old-lace-18px">
                  {productStyleStyle3TagUi_L4}
                </div>
              </div>
              <div className="stylestyletag-container-1">
                <div className="s-stylestyle3tagh5 poppins-bold-old-lace-24px">{servicesStyleStyle3TagH5}</div>
                <div className="service-stylestyle3tagui_l-1 poppins-medium-old-lace-18px">
                  {serviceStyleStyle3TagUi_L1}
                </div>
                <div className="service-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {serviceStyleStyle3TagUi_L2}
                </div>
                <div className="service-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {serviceStyleStyle3TagUi_L3}
                </div>
                <div className="service-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {serviceStyleStyle3TagUi_L4}
                </div>
              </div>
              <div className="stylestyletag-container-2">
                <div className="s-stylestyle3tagh5 poppins-bold-old-lace-24px">{resourcesStyleStyle3TagH5}</div>
                <div className="resource-stylestyle3tagui_l poppins-medium-old-lace-18px">
                  {resourceStyleStyle3TagUi_L1}
                </div>
                <div className="resource-stylestyle3tagui_l-1 poppins-medium-old-lace-18px">
                  {resourceStyleStyle3TagUi_L2}
                </div>
                <div className="resource-stylestyle3tagui_l-2 poppins-medium-old-lace-18px">
                  {resourceStyleStyle3TagUi_L3}
                </div>
                <div className="resource-stylestyle3tagui_l-3 poppins-medium-old-lace-18px">
                  {resourceStyleStyle3TagUi_L4}
                </div>
              </div>
            </div>
          </div>
          <FooterStrip />
        </div>
      </div>
    );
  }
}

export default ClassicHome22;
