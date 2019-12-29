import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <style jsx global>{`
        .main_imagen {
          height: 300px !important;
          background-position: center center;
          background-image: url('https://image.freepik.com/foto-gratis/porcion-filete-asado-parilla-comida-cena_1172-322.jpg');
          background-size: cover;
        }

        .info{
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 20px;
          margin-top: 0px;
          padding: 10px;
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
      <section className="main_imagen"></section>
      <section className="info">
        <h2>
          Separa tu almuerzo y disfruta de nuestras delicias, tu paladar te lo
          agradecerá.
        </h2>
        <small>por solo 10.000$ pesitos por tu primer pedido</small>
        <Link href="/menu-del-dia">
          <a> VER MENU DEL DÍA</a>
        </Link>
        {/* <a
          href="https://api.whatsapp.com/send?phone=573195854646&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%Wuuro%202."
          target="_blank"
        ></a> */}
      </section>
    </Layout>
  )
}
export default Index
