import page from '../../styles/modules/page/page.module.css';

const HomePage = () => {

    let pageStyles = `${page.wrapper} ${page.fullscreen} ${page.center}`;

    return (
        <div className={pageStyles}>
            <div>
                HOME - Nu med Comic Sans
            </div>
        </div>
    );
};
export default HomePage;