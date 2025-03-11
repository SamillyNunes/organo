import './Banner.css';

interface BannerProps{
    imageUrl: string
    alt?: string
}

export default function Banner (props: BannerProps) {
    return (
        <header className='banner'>
            <img src={props.imageUrl} alt={props.alt} />
        </header>
    );
}
