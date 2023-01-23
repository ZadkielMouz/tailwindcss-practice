import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import { EmailSubscribe } from "../components/email-subscribe/EmailSubscribe";
import { ImageGallery } from "../components/image-gallery/ImageGallery";
import { LoginModal } from "../components/login-modal/LoginModal";
import { PricingCards } from "../components/pricing-cards/PricingCards";
import { ProductModal } from "../components/product-modal/ProductModal";
import { IndexPage } from "../IndexPage"


export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            [
                <Route path="/" element= { <IndexPage /> } />,
                <Route path="Email-Subscribe" element= { <EmailSubscribe /> } />,
                <Route path="Pricing-Cards" element= { <PricingCards /> } />,
                <Route path="Product-Modal" element= { <ProductModal /> } />,
                <Route path="Image-Gallery" element= { <ImageGallery /> } />,
                <Route path="Login-Modal" element= { <LoginModal /> } />,

            ]
        ),
        {
            basename: '/tailwindcss-practice/'
        }
    );

    return (
        <RouterProvider router={ router } />
    )
}
