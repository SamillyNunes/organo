import './CustomFooter.css';

const CustomFooter = () => {
    return (
        <div className='custom-foot'>
            <div className='network'>
                <img src='images/fb.png' alt='Facebook' />
                <img src='images/ig.png' alt='Instagram' />
                <img src='images/tw.png' alt='Twitter' />
            </div>
            <img src='images/logo.png' alt='Logo: Organo' className='logo' />
            <h5 className='label'>Desenvolvido com Alura.</h5>
        </div>
    );
}

export default CustomFooter;