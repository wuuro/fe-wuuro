import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

const MenuDelDia: React.FunctionComponent = () => {
  return (
    <Layout title="Menu del Para mañana">
      <style jsx global>{`
        .main_imagen {
          height: calc(30% - 80px) !important;
          background-position: center center;
          background-image: url('https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
          background-size: cover;
        }
        .container {
          display: flex;
          display: flex;
          font-family: Dosis;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h1 {
          margin: 0px;
          text-align: center;
          font-size: 15px;
          font-family: Dosis;
        }

        p {
          font-size: 15px;
          font-family: Dosis;
        }
        h2 {
          font-size: 30px;
          margin: 0px;
          font-family: Dosis;
        }

        p {
          font-size: 30px;
          text-align: center;
          margin: 5px;
          font-family: Dosis;
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
      <h1>MENÚ PARA EL DÍA</h1>
      <p>LUNES 3 DE FEBRERO</p>
      <section className="main_imagen"></section>
      <section className="container">
        <h2>Pollo Apanado</h2>
        <p>
          Delicioso pollo apanado, con arroz, ensalada agridulce, yuca frita,
          sopa de ajiaco y una refrescante limonada.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=573012081021&text=Buenas deseo el menú del día POLLO APANADO, GRACIAS"
          target="_blank"
        >
          RESERVAR PARA MAÑANA
        </a>
      </section>
    </Layout>
  )
}

export default MenuDelDia
