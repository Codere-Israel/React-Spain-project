import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import axios from "axios";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

function MySwiper({ device }) {
  console.log(device);
  // const BROADCAST_DATE = "2022-10-30T19:00:00Z";
  const DATE_TO_COUNT = "2022-12-18T15:00:00Z";
  const [showTimer, setShowTimer] = useState(false);
  const [flag, setFlag] = useState(1);

  const [imgs, setImgs] = useState([]);
  const [liveBanners, setLiveBanners] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [ctaText, setCtaText] = useState("Regístrate");
  const [ctaLink, setCtaLink] = useState(
    "https://m.apuestas.codere.es/deportes/#/RegistroESPage"
  );

  const indexHandler = (swiper) => {
    setSwiper(swiper);
    try {
      setCtaText(liveBanners[swiper.realIndex].ctaText);
      setCtaLink(liveBanners[swiper.realIndex].ctaURL);
    } catch (error) {}

    // console.log(liveBanners[swiper.realIndex]);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER || "http://localhost:5001"}/prd/spain`
      )
      .then((res) => {
        let x = res.data[0].slide_list.filter(BannerFilter);
        setImgs([...x]);

        setLiveBanners(
          x.reduce((acc, obj) => {
            const tempBanner = {
              ...obj,
              image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
            };
            acc.push(tempBanner);
            return acc;
          }, [])
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let tempList = imgs.reduce((acc, obj) => {
      const tempBanner = {
        ...obj,
        image: obj.image.replace("xxx", device ? "mobile" : "desktop"),
      };
      acc.push(tempBanner);
      return acc;
    }, []);

    setLiveBanners([...tempList]);
  }, [device]);

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
  const onReadyHandler = () => {
    setShowTimer(true);
  };

  return (
    <div id="carousel-section">
      <>
        <Swiper
          onSlideChange={(swiper) => indexHandler(swiper)}
          modules={[Pagination, EffectFade, Autoplay, Lazy]}
          pagination={{ clickable: true }}
          effect={"fade"}
          // lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
          autoplay={{ delay: 3250, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          init={false}
          onImagesReady={onReadyHandler}
        >
          {liveBanners.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.ctaLink}>
                <img src={item.image} alt={item.banner_name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {!device ? (
          <>
            <div>
              <Button
                className="central-regis gl-effect"
                href={ctaLink}
                rel={"nofollow"}
              >
                {ctaText}
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </>
        ) : (
          <SlideButton regis={ctaLink} />
        )}
      </>
    </div>
  );
}
export default MySwiper;
