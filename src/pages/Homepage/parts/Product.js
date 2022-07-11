import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import ProductCard from '../../../comps/ProductCard'
import icon1 from '../../../assets/1.png'
import icon2 from '../../../assets/2.png'
import icon3 from '../../../assets/3.png'
import icon4 from '../../../assets/4.png'
import icon5 from '../../../assets/5.png'
import icon6 from '../../../assets/6.png'
import icon7 from '../../../assets/7.png'
import icon8 from '../../../assets/8.png'

const productHighlights = [
  {
    title: "Anonymous Profiles",
    icon: icon1,
    description: "At RariKo, we believe that everyone on the internet should be given their own choice of staying  anonymous by default. We don’t give a damn about your Email or phone number to get you use our app. All you have to do is connect your decentralized wallets and register here."
  },
  {
    title: "Digital Identities",
    icon: icon2,
    description: "Now you can create a decentralized digital identity on the blockchain, which can be unrelated to your physical identity. It does not matter who you are or where you come from, you choose how you want to be represented and can build a whole new personality & reputation around it."
  },
  {
    title: "Multi-chain Support",
    icon: icon3,
    description: "Did we tell you that your identity just doesn’t live on one blockchain but resides on multiple? We are currently supporting Solana and all the EVM chains like Ethereum, Polygon, Avalanche, BSC and Fantom. Don’t worry!! None of them can take down your identity."
  },
  {
    title: "Automated community access",
    icon: icon4,
    description: "Ever felt that joining multiple Web3 communities is frustrating and time-taking? We got you covered in saving your precious time. With our Real-time Asset Authentication(RTAA), you can join and leave communities in an automated way in less than a minute."
  },
  {
    title: "Governance tools",
    icon: icon5,
    description: "If you are a token-gated community or a DAO, our In-app voting protocol can effectively handle your governance requirements. Voting power would be curated from multiple wallets and chains and assigned to an identity."
  },
  {
    title: "Community Discoverability",
    icon: icon6,
    description: "Believe your product can chnage the world but is not getting enough visibility in the space? Or maybe your DAO have too few members to function? Easily grow your community with our discover solution and on-board a bunch of users for free*."
  },
  {
    title: "Peer to Peer NFT trades Payments",
    icon: icon7,
    description: "Introducing  a game changing trading solution for NFTs. You can directly buy/sell Non fungible Tokens just by sending a message. you could easily save 5-15% in fees and royalties while trading.Almost forgot to mention this is escrowed and foolproof, so that you don’t lose your assets to scammers. "
  },
  {
    title: "Socialize & Earn (S&E)",
    icon: icon8,
    description: "Our Socialize & Earn model ensures every user on our platform will be rewarded fair & enough. </br> Socialize with fellow sapiens, join communities, contribute and have fun while also getting rewarded in crypto & multiple NFTs."
  }
]

const Product = () => {
  return (
    <Container id={'product'}>
      <Box sx={{width: 'fit-content',margin: '0 auto',mt: 4}}>
      <Typography sx={{fontSize: 40, fontWeight: 700 , width: 'fit-content', margin: '0 auto'}} align='center'>Product Highlights</Typography>
        <Box sx={{borderBottom: '1px solid white', mt: -1.2}}></Box>
      </Box>

      <Grid sx={{pt: 10, pb: 10}} container spacing={4}>
        {productHighlights.map((item) => (
          <Grid item md={6} xs={12}>
            <ProductCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Product