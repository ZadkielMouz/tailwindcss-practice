import { IndexCard } from './IndexCard'
import emailsubscribe from '../email-subscribe/images/captura.png';
import imagegallery from '../image-gallery/images/image-gallery.png';
import pricingcards from '../pricing-cards/images/pricing-cards.png';
import productmodal from '../product-modal/images/product-modal.png';
import loginmodal from '../login-modal/images/login-modal.png'

export const IndexList = () => {

    const indexList = [
        { name: 'Email-Subscribe', image: emailsubscribe },
        { name: 'Pricing-Cards', image: pricingcards },
        { name: 'Product-Modal', image: productmodal },
        { name: 'Image-Gallery', image: imagegallery },
        { name: 'Login-Modal', image: loginmodal },
    ]
    return (
        <div className='flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center max-w-2xl mx-auto'>
            
            {
                indexList.map( ({name, image}) => (
                    <IndexCard key={ name } name={ name } image={ image } />
                ))
            }
        </div>
    )
}
