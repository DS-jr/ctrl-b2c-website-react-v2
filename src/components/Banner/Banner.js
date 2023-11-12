import Container from '../Container'
import GetWalletActions from '../GetWallet/GetWalletActions'

import './Banner.scss'

function Banner() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <img className="Banner-img-gradient Banner-img-gradient-top" src="/images/banner/gradient-main.svg" alt="" />
        <div className="Banner-start">
          <img
            className="Banner-img"
            src="/images/banner/wallet.png"
            alt="Unstoppable wallet"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title text-gradient">
              CTRL your keys
            </div>
            <div className="Banner-title-slogan my-2 py-2 mb-3">
            Non-custodial open-source wallet in Telegram
            </div>
            <GetWalletActions />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
