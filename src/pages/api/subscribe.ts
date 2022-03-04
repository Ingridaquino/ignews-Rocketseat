import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Forma de pagamento (cartão)
            billing_address_collection: 'required', // Necessario o endereço
            line_times: [
                { price: 'price_1KWNx6EonhYPpHxwtzaLMSig', quantity: 1}, // Valor e quantidade do produto
            ],
            mode: 'subscription',
            allow_promotion_codes: true, //Cumpo de desconto 
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,

        })
    }else {
        res.setHeader('ALLOW', 'POST')
        res.status(405).end('Method not allowed')
    }
}