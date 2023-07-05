import React , {useEffect , useR} from 'react'

const ServiceSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(5); 

    useEffect(() => {
      const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
          setSlidesToShow(1);
        } else if (window.innerWidth < 992) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      };
  
      updateSlidesToShow();
      window.addEventListener('resize', updateSlidesToShow);
      return () => {
        window.removeEventListener('resize', updateSlidesToShow);
      };
    }, []);
  
    const sliderRef = useRef(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  
    const nextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    const prevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <>
        <div className="currency_slider_cont">
          <Slider {...settings} ref={sliderRef} className="currency_slider">
            <div className="Item">
              <p className="head">US Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">British Pound</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Euro</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Australian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Canadian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
            <div className="Item">
              <p className="head">US Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">British Pound</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Euro</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Australian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
  
            <div className="Item">
              <p className="head">Canadian Dollar</p>
              <div className="two_sec">
                <p>Buy</p>
                <p>82.87</p>
              </div>
              <div className="two_sec">
                <p>Sell</p>
                <p>82.6564</p>
              </div>
            </div>
          </Slider>
          <div className="Prev-Next_cont">
            <img src={img5} onClick={prevSlide} className="PrevImg" alt="" />
            <img src={img6} onClick={nextSlide} className="NextImg" alt="" />
          </div>
        </div>
      </>
    );
  };
  

export default ServiceSlider