import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
    mercadopago.configure({
      access_token: 
        "APP_USR-351098784325314-100415-b3a8c6a60ba61ccc053019f2806368e3-1108943108",
    });

    const result = await mercadopago.preferences.create({
      items: [
        {
        title: 'boleto de cine',
        unit_price: 70,
        currency_id: "ARS",
        quantity: 1,
        }
      ],
      back_urls: {
        success: 'http://localhost:4000/success',
        failure: 'http://localhost:4000/failure',
        pending: 'http://localhost:4000/pending',
      },
      notification_url: 'https://c216-190-226-157-113.ngrok.io/webhook',
    });

    console.log(result);

    res.send(result.body);
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query

  if (payment.type === 'payment') {
    const data = await mercadopago.payment.findById(payment['data.id'])
    console.log(data)
  }

  res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({error: error.message})
    
  }
}