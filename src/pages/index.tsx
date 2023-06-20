import Layout from "@/layout";
import React from 'react';
import Typed from 'typed.js';

function IndexPage () {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <Layout>
        <div>
          {/*打字机*/}
          <span ref={el}/>
        </div>
      </Layout>
  )
}

export default IndexPage
