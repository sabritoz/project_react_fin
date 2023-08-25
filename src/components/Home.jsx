import React, { useState } from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Shopping from './Shopping'

const Home = () => {
    const [movies, setmovies] = useState([
        {
          name:"Gold Rhinestone Bracelet",
          genre:"Bracelet",
          image:"https://www.lulus.com/images/product/xlarge/8195361_1668716.jpg?w=560",
          description:"Lulus Exclusive Karat Collection! You deserve a little somethin' somethin' like the Lulus Quite a Treat 14KT Gold Rhinestone Bracelet! This elegant 14KT gold-plated bracelet has a dazzling cubic zirconia rhinestone display. This item is plated with real 14KT gold. Love it and it will love you back! Remove before exercising or showering, and when applying scents, lotions and sprays.",
          Price:"100£",
        },
        {
          name:" Cubic Zirconia Bracelet",
          genre:"Bracelet",
          image:"https://www.lulus.com/images/product/xlarge/10364901_2134256.jpg?w=560",
          description:"You'll throw sparkles all over the room with the Lulus Exceptional Shine Silver Adjustable Cubic Zirconia Bracelet! Glowing, silver-toned metal shapes this chic bracelet that offers a customizable fit with its box chain, toggle closure design. A band of dazzling, baguette cut cubic zirconia rhinestones (with circular embellishments at the ends) decoPrices the center of the chain, for a look that's sure to impress!",
          Price:"250£",
          
        },
        {
          name:" Gold Choker Necklace",
          genre:"Necklace",
          image:"https://www.lulus.com/images/product/xlarge/6383121_1340496.jpg?w=560",
          description:"Lulus Exclusive Karat Collection! Stay up with the minimal jewelry trend with the Lulus Keep it Dainty 14KT Gold Layered Choker Necklace! This gorgeous 14KT gold plated choker necklace has two delicate chains with tiny beads throughout. This item is plated with real 14KT gold. Love it and it will love you back! Remove before exercising or showering, and when applying scents, lotions and sprays.",
          Price:"130£",
        },
        {
          name:"Contemporary Gold Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/3151800_608912.jpg?w=560",
          description:"It's easy to achieve a modern, minimalist look with the Lulus Keep It Contemporary Gold Earrings! Shiny gold statement earrings with a simple, bar and circle design.",
          Price:"90£",
        },
        {
          name:"Perfect Trio Gold Layered Necklace",
          genre:"Necklace",
          image:"https://www.lulus.com/images/product/xlarge/3223720_212986.jpg?w=560",
          description:"Get triple the glamor thanks to the dazzling effects of the Lulus Perfect Trio Gold Layered Necklace! Three skinny gold chains descend from shortest to longest with a round charm, and skinny pendant dressing up the last two chains. Bar pendant measures 1",
          Price:"300£",
        },
        {
          name:"Mini Hoop Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/6573061_1411736.jpg?w=560",
          description:"The Lulus Our Little Secret Gold Rhinestone Mini Hoop Earrings is our best-kept secret to achieve a chic look! These darling gold earrings have a dual hoop design and are adorned with shiny, circular rhinestones.",
          Price:"100£",
        },
        {
          name:"Alter Ego Gold Hoop Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/4236090_421262.jpg?w=560",
          description:"You'll transform into the goddess you are in the Lulus Alter Ego Gold Hoop Earrings! Simple and lightweight matte gold hoop earrings are lightly antiqued.",
          Price:"275£",
        },
        {
          name:"Elegance Gold Rhinestone Hoop Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/6814601_1485116.jpg?w=560",
          description:"The Lulus Oh My Elegance Gold Rhinestone Hoop Earrings are a simply stunning addition to any outfit! These must-have earrings are composed of sleek gold that shapes an open hoop silhouette with sparkling cubic zirconia rhinestones and textured detailing that accent half of the outer and inner hoop.",
          Price:"89£",
        },
        {
          name:"Glamour Gold Rhinestone Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/4080870_806712.jpg?w=560",
          description:"Glam up your look with the Lulus Glamour Gold Rhinestone Earrings! Clear rhinestones on post backs hold large, clear, oval-shaped, faceted rhinestones in gold settings.",
          Price:"80£",
        },
        {
          name:" Flower Washer Hoop Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/10756261_2227796.jpg?w=560",
          description:"All your favorite looks are perfect for pairing with the Lulus x Luv AJ Sweet Glow 14KT Gold Pearl Flower Washer Hoop Earrings! These throwback-cute earrings are plated in genuine 14KT gold and have a slender, textured hoop silhouette. Faux pearl beads create flower-shaped, washer-style charms that add a captivating sense of movement to these adorable earrings.",
          Price:"150£",
        },
        {
          name:"old Pearl Drop Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/6801841_1389816.jpg?w=560",
          description:" Take your ensemble to new levels of chic with the Lulus X Casa Clara Camilla 14KT Gold Pearl Drop Earrings! Create a stunning look with these drop earrings that feature white freshwater pearls connected by a shiny 14KT gold plated chain that creates a shoulder-duster design! Linen bag included for storage and protection.",
          Price:"125£",
        },
        {
          name:" Rhinestone Tassel Earrings",
          genre:"Earrings",
          image:"https://www.lulus.com/images/product/xlarge/4167730_835582.jpg?w=560",
          description:"The Petit Moments Glitz Gold Rhinestone Tassel Earrings are just the kind of look that we wanna wear out (and get noticed in)! Elegant strands of shiny gold snake chain and clear rhinestone chains cascade from post backs. Pair with your favorite LBD and you'll easily make it a night to remember",
          Price:"99.99£",
        },
        {
          name:"Gold Pearl Layered Necklace",
          genre:"Necklace",
          image:"https://www.lulus.com/images/product/xlarge/8728721_1817116.jpg?w=560",
          description:"Lulus Exclusive Karat Collection! Your treasure hunt is over now that you've found the Divine Diver 14KT Gold and Pearl Layered Necklace! This 14KT gold-plated necklace includes a short chain (dotted with faux pearls) and a dainty gold chain with a faux pearl pendant. This item is plated with real 14KT gold. Love it and it will love you back! Remove before exercising or showering, and when applying scents, lotions and sprays.",
          Price:"450£",
        },
        {
          name:" White Layered Pearl Necklace",
          genre:"Necklace",
          image:"https://www.lulus.com/images/product/xlarge/10583381_2195236.jpg?w=560",
          description:"From Midtown to the Upper West Side, nothing will elevate your look like the Lulus Exceptionally Luxe White Layered Pearl Necklace! Glowing strands of faux pearls shape this ultra-posh necklace that has a layered design and an oversized faux pearl pendant as the focal point.",
          Price:"300£",
        },
        {
          name:"White Pearl Wrap Necklace",
          genre:"Necklace",
          image:"https://www.lulus.com/images/product/xlarge/10486321_2195276.jpg?w=560",
          description:"Make sure that you looked poised from head to toe by accessorizing with the Lulus Charming Refinement White Pearl Wrap Necklace! Add some effortless class to any outfit with this unique necklace that features a long chain of elegant faux pearls that can be wrapped around to create a layered-style design, with oversized faux pearl charms that accent each end.",
          Price:"100£",
        },])
      const [search, setsearch] = useState("")
      const navigate= useNavigate()
      const [navigation, setnavigation] = useState(0)
  return (
    <div className='Home'>
      <Navbar setnavigation={setnavigation} setsearch={setsearch}/>
      {navigation===0?<MovieList search={search} Movies={movies}/>:<Shopping/>}
      <button className='button' onClick={()=>navigate('/')}>&larr;</button>
    </div>
  )
}

export default Home