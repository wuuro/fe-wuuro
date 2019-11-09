import React from "react";
import Layout from "../components/Layout";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <style jsx global>{`
        header {
          height: 50px;
          width: 100%;
          padding: 20px;
          color: red;
          font-size: 40px;
          }
        
        img {
          height: 80px;
          width: 100;
        }
        .main_imagen {
          height: 250px;
          background-position: center center;
          background-image: url('https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
          background-size: cover;
        }

        .info{
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 16px;
          margin-top: 40px;
          padding: 40px;
        }

        small {
          color: green;
         
        }

        a{
          text-decoration: none;
          color: white;
          height: 100%;
          line-height: 2.6;
          border-radius: 5px;
          width: 100%;
          color: white;
          width: 100%;
          background-color: red;
          height: 80px;
          font-size: 30px;
          margin-top: 30px;
          cursor: pointer;
        }

        
        a:hover {
          background-color: #12746b;
        }
        
        }
      `}</style>
      <header>
        <img src="/static/images/logo_wuuro.png" alt="" />
      </header>
      <section className="main_imagen"></section>
      <section className="info">
        <h2>
        Separa tu almuerzo y disfruta de nuestras delicias, tu palabra te lo agradecerá.
        </h2>
        <small>por solo 10.000$ pesitos por tu primer pedido</small>

        <a
          href="https://api.whatsapp.com/send?phone=573195854646&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%Wuuro%202."
          target="_blank"
        >
          PEDIR YA
        </a>
      </section>
    </Layout>
  );
};
export default Index;
