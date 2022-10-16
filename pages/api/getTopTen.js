// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=64edab01-861a-423e-b7c5-ba403a5786e1`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )

    const data = await response.json()

    res.status(200).json({ data })
  }

  getData()
}
