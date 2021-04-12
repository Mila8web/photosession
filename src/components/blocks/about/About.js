import s from './About.module.scss';

// 
import fotoKiss from './../../../assets/img/about/fotoKiss.png';
import time from './../../../assets/img/about/time.svg';
import photo from './../../../assets/img/about/photo.svg';
import mark from './../../../assets/img/about/mapPinMarked.svg';
import bubble from './../../../assets/img/about/speechBubble.svg';
import cup from './../../../assets/img/about/cup.svg';
import rating from './../../../assets/img/about/rating.svg';



function About() {
    return (
        <section className={s.about}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.gridWrap}>
                    <h2 className={s.title}>Фотосессия в вертолете  </h2>
                        <img src={fotoKiss} alt="fotoKiss" className={s.img} />
                    <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>
                    <div className={s.listItems}>
                            <div className={s.item}>
                                <a>
                                    <img src={time} alt="icon" className={s.icon}/>
                                </a>
                                <span>3 часа съемки</span>
                            </div>
                            <div className={s.item}>
                                <a>
                                    <img src={photo} alt="icon" className={s.icon}/> 
                                </a>
                                <span>Более 50 фотографий</span>
                            </div>
                            <div className={s.item}>
                                <a>
                                    <img src={mark} alt="icon" className={s.icon}/>
                                </a>
                                <span>Москва</span>
                            </div>
                            <div className={s.item}>
                                <a>
                                    <img src={bubble} alt="icon" className={s.icon}/>
                                </a>
                                <span>Готовы ответить на любые вопросы</span>
                            </div>
                    </div >
                    </div>
                    
                    <div className={s.ratingWrap}>
                        <img src={cup} alt="cup" />
                        <div className={s.rating}>
                            <p>Более <span>50</span>  отзывов с оценкой </p>
                            <img src={rating} alt="rating"  />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;