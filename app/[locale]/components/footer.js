import {useTranslations} from 'next-intl';

export default function Footer(){
    const t = useTranslations('footer');
    return(
        <footer className="footer">
            <div className="footer-cont">
                <div className="footer-1">
                    <div className="footer-name">
                        <h3 className="footer-brand">Darikson Ochoa</h3>
                    </div>
                    <div className="footer-links">
                        <h3>{t('about')}</h3>
                        <p>{t('soy')}</p>
                    </div>
                    <div className="footer-links">
                        <h3>{t('yo')}</h3>
                        <div className="footer-redes">
                            <a href="https://wa.me/51972602806" target="_blank" rel="noreferrer" className="fa-brands fa-whatsapp"></a>
                            <a href="https://www.linkedin.com/in/darikson-ochoa-sicha/" target="_blank" rel="noreferrer" className="fa-brands fa-linkedin"></a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <small><b>© 2023 Darikson Ochoa</b> - {t('made')}</small>
            </div>
        </footer>
)
}