import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <style jsx global>{`
    
        .info{
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 70px;
          font-family: Dosis;
          margin-top: 0px;
          padding: 10px;
        }

        p{
          margin: 5% 0px;
        }

        small {
          color: green;
          font-size: 22px;
        }

        a{
          text-decoration: none;
          color: white;
          height: 60px;
          line-height: 2.6;
          border-radius: 5px;
          width: 100%;
          color: white;
          width: 100%;
          background-color: red;
          font-size: 20px;
          margin-top: 15px;
          cursor: pointer;
        }

        
        a:hover {
          background-color: #12746b;
        }
        
        }
      `}</style>
      <Header></Header>
      <section className="info">
        <p>
          <strong>PIDE YA, </strong>
          <br />
          Tu paladar te lo Agradecerá.
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABsUExURUdwTO2RAO2RAMw2VO2RAO2RAOZ/Fu6SAM02V+uKCcw1Vc02VNlZNP/jK/alFxgYGeJKdv7eKfzYJ/rEIPvQI/GiBPa4Fi4oGtxEbdq/J8WoI5yBH19SHEY7HLeRHntkHt5oP3MrPpYwSNpdMdnYYbYAAAANdFJOUwC1ZHCN3x/+/j7fm+slIFr6AAADxUlEQVRYw+WY63qjIBCGq/FEWteCeIRgD/d/j8sMikDUxO7+2OfZr6ZNR3mdGU6jLy//qbKMxHGiFccky34KiZMoTXOrNI2S+DSMxJFlNKCFFp1hZcRQmqatOWcgznjdGlyakCc5cYSUlrMyEOMtsqJnUCQyFFpuihrWQ6+yOAUMKw+EqDQ+5oA7xxiDAqcOsk7AHV4+FuXNUaYgrMfuzHnXTqVkn1PT8knRXRLEVZcntEPKznKQFGVb/XWSg6TkLkE6z/QsCPIU3yWoYeVpsSZP/eCSIDA2KqGGwMUNIw+C0w61rsuj7Kqq6qbBbbRl1MF5PRf5gQloAbo5jZQ1jq5LjetS4NC4NKkqyTeMLt53SWfImWFMVqvEYpw2jGGW9Bhq7hzqbp5Lg2u8ObelzToqid9lApuoAX3o5jDUbMT0dW6+6zwnNjIv1eBRN87RLB6hUWkHRJAkN906MndwUCEldgwT0vY1VVIqaoxy9Ia3js1O1zYYeYuD7vpvjYyFM24e3eQH07XcSlLsdf558WXmxj+ar97MjZdOo38Coku3/UugaGsYlT9YJ/8OqFw8Sv46iA4wIehzB1xN75LNEDDcvNlYGqr9HZwwV9OSWhAOSLh2rKoJTjgHXmguD07A2jAi0Q5InCKUwj1g+bjnbBy4rmiPoJmdIjBpKQiWNMnpU+J6PRbmq520sIwYk3apEkx/YTs/6x8By5tpZZcR3IwoFq8C1kb9dWkZgJg1w4I51cZiFzboNlME00HCjdhDgetd8VFj5bwutQQKNSO4kxywsGZzgb1+lv8Z3K/7KpAE9SRZS6OGz4K1XQ78UMCpvvoCSJw72xGWEPNF9YSb8hFnhM3ts39/R1LtlhFQ1NRGvAVSJ2pe7wh3NuAYUuNVEbrf2uVCszHKcRsz4n5uOEj69uoax6W6bs1uOo1tSGnHCU8tHCS9eQWpriDbVQK3+E6KsW1rPOAzCmkKgK/CgoB0CUs/h2TuDKxJKKVGpcQkZ9OnbuuRXsPar/nlSElbD3Va9vunZvQuqS+uJCyPPVKjplsVCDHYeCX1QWzmgeaXp1yzbsabrrvdPr+K1Y3Cyffl5REJYUpoKZV/eAG5SbpsPNTck1YB6f1e96CnSH3I6TdAGF1+0ifda9nek/EZn/pwHC2jIEkPUaFPmnPNDh7X91G+T32xlSH7xB7le6ymyb/9wbjPMah0eS3iU0BvQDJ6wMEAk8h5UeO8sokScrkWi66XZ960xAEMXvsQyGz2alDX1+zse6jwTVRGLpcLyV7+D/0GcjPUWsQSKLMAAAAASUVORK5CYII="
            alt=""
          />
        </p>
        <small>por solo 10.000$ pesitos por tu primer pedido</small>
        <Link href="/menu-del-dia">
          <a> VER MENU DEL DÍA</a>
        </Link>
      </section>
    </Layout>
  )
}
export default Index
