// https://medium.com/@prodmxle/adding-custom-fonts-to-nextjs-application-with-tailwind-css-894f716eec16


import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Barlow" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument