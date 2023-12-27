import iphone from "../assets/iphone-svg.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleRight,
// } from "@fortawesome/free-solid-svg-icons";
import { Button, Image, Modal, NavLink, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import myData from "../mobX/Store";
import { observer } from "mobx-react";
import terms from "../json/tyc.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { toJS } from "mobx";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const MySwiper = observer(({ device }) => {
  const regis = {
    spain: "https://m.apuestas.codere.es/deportes/#/RegistroESPage",
    panama: "https://m.codere.pa/deportespanama/#/RegistroPAPage",
    colombia: "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage",
    argentina: "https://m.caba.codere.bet.ar/deportes/#/RegistroARPage",
    mexico: "",
  };

  const country = myData.country.split("-")[0].toLocaleLowerCase();
  const curRegis = regis[country];
  // console.log(data);
  const [swiper, setSwiper] = useState(null);
  const [currentTycType, setCurrentTycType] = useState(null);
  const [currentBannerName, setCurrentBannerName] = useState("");
  const [showTycModal, setShowTycModal] = useState(false);
  const [ctaText, setCtaText] = useState("Regístrate");
  const [tycType, setTycType] = useState(
    "https://m.codere.pa/deportespanama/#/RegistroPAPage"
  );
  // const data = toJS(myData.dataObj);

  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    console.log("showTycModal >>");
    console.log(showTycModal);
    if (swiper) {
      if (showTycModal) swiper.autoplay.pause();
      else swiper.autoplay.run();
    }
  }, [showTycModal]);

  const reduceList = () => {
    try {
      let list = toJS(myData.dataObj)
        .slide_list.filter(BannerFilter)
        .reduce((acc, obj) => {
          const tempBanner = {
            ...obj,
            image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
          };
          acc.push(tempBanner);
          return acc;
        }, []);

      console.log(list);
      setBannerList([...list]);
    } catch (error) {
      console.log("failed2");
    }
  };

  useEffect(() => {
    try {
      reduceList();
    } catch {
      console.log("failed");
    }
  }, []);

  useEffect(() => {
    let list = toJS(myData.dataObj)
      .slide_list.filter(BannerFilter)
      .reduce((acc, obj) => {
        const tempBanner = {
          ...obj,
          image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
        };
        acc.push(tempBanner);
        return acc;
      }, []);
    setBannerList([...list]);
  }, [device, myData.dataObj]);

  const indexHandler = (swiper) => {
    setSwiper(swiper);
    if (bannerList[swiper.realIndex].ctaText) {
      setCtaText(bannerList[swiper.realIndex].ctaText);
      setTycType(bannerList[swiper.realIndex].tycType);
    } else {
      setCtaText("Regístrate");
      // setTycType("https://m.codere.pa/deportespanama/#/RegistroPAPage");
    }

    if (bannerList[swiper.realIndex].tycType) {
      setCurrentTycType(bannerList[swiper.realIndex].tycType);
    } else setCurrentTycType("");

    setCurrentBannerName(
      bannerList[swiper.realIndex].tycTitle
        ? bannerList[swiper.realIndex].tycTitle
        : ""
    );
  };

  function dateInBetween(banner) {
    return (
      new Date() >= new Date(banner.startDate) &&
      new Date() <= new Date(banner.endDate)
    );
  }

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  const modalGenerator = () => {
    return (
      <>
        <Modal
          centered
          show={showTycModal}
          onHide={() => setShowTycModal(false)}
          contentClassName="terms-tyc"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="test">
                <h5>Términos y condiciones</h5>
                <h5>{currentBannerName}</h5>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentTycType && tycGenerator(currentTycType)}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowTycModal(false)}
              className="accept-btn"
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const tycGenerator = (type) => {
    if (country === "spain") return;

    let term = null;
    let curTerm = terms[country];

    for (let i = 0; i < curTerm.length; i++) {
      if (curTerm[i].type === type) term = curTerm[i];
    }

    return (
      <ol style={{ maxHeight: "50vh", overflowY: "scroll" }}>
        {term.ol.map((li, k) => (
          <li key={k}>
            {li.bolded ? <strong>{li.bolded}</strong> : null}
            {li.text}
            {li.inner ? (
              <ul>
                {li.inner.map((li2, k2) => (
                  <li key={k2}>{li2}</li>
                ))}
              </ul>
            ) : null}
            {li.table && (
              <Table bordered className="mt-2">
                <thead>
                  <tr>
                    {li.table.th.map((h, k) => (
                      <th key={k}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {li.table.tr.map((tr, i) => (
                    <tr key={i}>
                      {tr.map((td, j) => (
                        <td key={j}>{td}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div id="carousel-section" className={device ? "mobile-carousel" : ""}>
      {device ? <Image className="phone" src={iphone} /> : null}
      <Swiper
        className={device ? "mobile-slide" : ""}
        onSlideChange={(swiper) => indexHandler(swiper)}
        modules={[Pagination, EffectFade, Autoplay, Lazy]}
        pagination={{ clickable: true }}
        onLoad={indexHandler}
        effect="fade"
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 3250, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {bannerList.map((item, index) => (
          <SwiperSlide key={index}>
            <NavLink href={curRegis}>
              <Image
                className={device ? "mobile-device" : "desktop-device"}
                src={item.image}
                alt={item.img_alt}
              />
            </NavLink>

            {!device ? (
              <div id="des-reg">
                <Button
                  className="central-regis gl-effect"
                  href={item.ctaLink ? item.ctaLink : curRegis}
                  rel={"nofollow"}
                >
                  {ctaText ? ctaText : ""}
                  <span className="bi bi-chevron-right"></span>
                  {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                </Button>

                {currentTycType && (
                  <span className="tyc" onClick={() => setShowTycModal(true)}>
                    Términos y condiciones
                  </span>
                )}
              </div>
            ) : (
              <div className="">
                <SlideButton regis={item.ctaText} ctaText={ctaText} />
                {currentTycType && (
                  <span className="tyc" onClick={() => setShowTycModal(true)}>
                    Términos y condiciones
                  </span>
                )}
              </div>
            )}
            {modalGenerator()}
            {/* {showTimer && new Date() < new Date(DATE_TO_COUNT) && (
                      <Timer2 DATE_TO_COUNT={DATE_TO_COUNT} delay={delay} />
                    )} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
export default MySwiper;
