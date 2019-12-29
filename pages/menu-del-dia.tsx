import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

const MenuDelDia: React.FunctionComponent = () => {
  return (
    <Layout title="Menu del Día">
      <style jsx global>{`
        .main_imagen {
          height: 300px !important;
          background-position: center center;
          background-image: url('https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
          background-size: cover;
        }
        .container {
          display: flex;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h1 {
          margin: 0px;
          text-align: center;
        }
        h2 {
          font-size: 30px;
          margin: 0px;
        }

        p {
          font-size: 30px;
          text-align: center;
          margin: 5px;
        }

        a {
          text-decoration: none;
          color: white;
          height: 60px;
          line-height: 2.4;
          border-radius: 5px;
          padding-left: 5px;
          width: 100%;
          color: white;
          width: 100%;
          background-color: red;
          font-size: 20px;
          text-align: center;
          margin-top: 15px;
          cursor: pointer;
        }

        a:hover {
          background-color: #12746b;
        }
      `}</style>
      <Header></Header>
      <h1>MENU DEL DÍA</h1>
      <section className="main_imagen"></section>
      <section className="container">
        <h2>Arroz con pollo</h2>
        <p>
          Sabroso arroz con pollo, vegetales, papas fritas, y jugo de naraja{' '}
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=573042173867&text=Buenas deseo el menu del día"
          target="_blank"
        >
          RESERVAR PARA MAÑANA
        </a>
      </section>
    </Layout>
  )
}

export default MenuDelDia
